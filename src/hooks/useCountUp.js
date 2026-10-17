import { useEffect, useState } from 'react'

export function useCountUp(target, { enabled = true, steps = 40, intervalMs = 30 } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return undefined

    let count = 0
    const speed = Math.ceil(target / steps)
    let timer

    const update = () => {
      count += speed
      if (count < target) {
        setValue(count)
        timer = setTimeout(update, intervalMs)
      } else {
        setValue(target)
      }
    }

    update()
    return () => clearTimeout(timer)
  }, [target, enabled, steps, intervalMs])

  return value
}
