import { useEffect, useRef, useState } from 'react'

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(target: number, duration = 1800, active = false): number {
  const [current, setCurrent] = useState(0)
  const rafId = useRef<number>(0)

  useEffect(() => {
    if (!active) return

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCurrent(Math.round(easeOutCubic(progress) * target))

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick)
      }
    }

    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [target, duration, active])

  return current
}

/** Parse a stat value like "200+", "5 años", "100%" into { number, prefix, suffix } */
export function parseStatValue(value: string): {
  number: number
  prefix: string
  suffix: string
} {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  if (!match) return { number: 0, prefix: '', suffix: value }
  return {
    prefix: match[1],
    number: parseInt(match[2], 10),
    suffix: match[3],
  }
}
