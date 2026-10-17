import { useCallback, useMemo, useState } from 'react'
import About from './components/About'
import BackToTop from './components/BackToTop'
import BlobCursor from './components/Blobs_Cursor'
import Contact from './components/Contact'
import ElevatorNav from './components/ElevatorNav'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Projects from './components/Projects'
import ReadingProgress from './components/ReadingProgress'
import StarModal from './components/StarModal'
import WeChatModal from './components/WeChatModal'
import { NAV_LINKS } from './data/content'
import { useScrollSpy } from './hooks/useScrollSpy'

function App() {
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), [])
  const { activeId, progress, showBackToTop } = useScrollSpy(sectionIds)
  const [activeCase, setActiveCase] = useState(null)
  const [wechatOpen, setWechatOpen] = useState(false)

  const closeCase = useCallback(() => setActiveCase(null), [])
  const closeWechat = useCallback(() => setWechatOpen(false), [])

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-surface text-on-surface antialiased">
      {/* 全站 Blob 光标动效：容器铺满视口，指针事件穿透，不影响点击 */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          pointerEvents: 'none',
        }}
      >
        <BlobCursor
          material="chrome"
          color="#3B82F6"
          blend="normal"
          size={140}
          morph={0}
          morphSpeed={0.4}
          depth={1}
          trail={16}
          lag={0.55}
          goo={1}
          stretch={0.6}
          wobble={1}
          drip={0}
          shine={1}
          splash
          splashCount={6}
          splashSpeed={0.5}
          splashSize={0.5}
          splashGravity={0}
          regrow={0.5}
          shadow={false}
          hideCursor
        />
      </div>

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
          <Contact onOpenWechat={() => setWechatOpen(true)} />
        </div>
      </main>

      <Footer />

      <StarModal caseId={activeCase} onClose={closeCase} />
      <WeChatModal open={wechatOpen} onClose={closeWechat} />
    </div>
  )
}

export default App
