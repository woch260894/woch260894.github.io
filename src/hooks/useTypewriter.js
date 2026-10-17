import { useEffect, useState } from 'react'

export function useTypewriter(phrases, { typeSpeed = 90, deleteSpeed = 40, holdMs = 2000, pauseMs = 400 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!phrases?.length) return undefined

    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer

    const tick = () => {
      const current = phrases[phraseIndex]
      let delay = typeSpeed

      if (isDeleting) {
        charIndex -= 1
        setText(current.substring(0, charIndex))
        delay = deleteSpeed
      } else {
        charIndex += 1
        setText(current.substring(0, charIndex))
        delay = typeSpeed
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true
        delay = holdMs
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        delay = pauseMs
      }

      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timer)
  }, [phrases, typeSpeed, deleteSpeed, holdMs, pauseMs])

  return text
}
