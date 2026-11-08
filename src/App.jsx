import { useCallback, useMemo, useState } from 'react'
import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import ElevatorNav from './components/ElevatorNav'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Projects from './components/Projects'
import ReadingProgress from './components/ReadingProgress'
import StarModal from './components/StarModal'
import { useLocale } from './i18n/LanguageContext'
import { useScrollSpy } from './hooks/useScrollSpy'

function App() {
  const { copy } = useLocale()
  const sectionIds = useMemo(() => copy.navLinks.map((link) => link.id), [copy.navLinks])
  const { activeId, progress, showBackToTop } = useScrollSpy(sectionIds)
  const [activeCase, setActiveCase] = useState(null)

  const closeCase = useCallback(() => setActiveCase(null), [])

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-surface text-on-surface antialiased">
      <ReadingProgress progress={progress} />
      <Header activeId={activeId} />
      <ElevatorNav activeId={activeId} />
      <BackToTop visible={showBackToTop} />

      <main className="w-full flex-1 bg-surface pt-16">
        <div className="flex w-full flex-col text-on-surface">
          <Hero />
          <About />
          <Projects onOpenCase={setActiveCase} />
          <Insights />
          <Contact />
        </div>
      </main>

      <Footer />

      <StarModal caseId={activeCase} onClose={closeCase} />
    </div>
  )
}

export default App
