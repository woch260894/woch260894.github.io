import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, { offset = 180 } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const update = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop
      const doc = document.documentElement
      const totalHeight = doc.scrollHeight - doc.clientHeight
      const percent = totalHeight > 0 ? (scrollPos / totalHeight) * 100 : 0

      setProgress(Math.min(100, Math.max(0, percent)))
      setShowBackToTop(scrollPos > 320)

      let current = sectionIds[0] ?? ''
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop - offset) {
          current = id
        }
      })
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds, offset])

  return { activeId, progress, showBackToTop }
}
