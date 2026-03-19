import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const scriptUrl = process.env.APPS_SCRIPT_URL
  if (!scriptUrl) {
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  })

  return res.status(200).json({ result: 'success' })
}
