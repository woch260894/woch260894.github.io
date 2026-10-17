import { useEffect, useState } from 'react'
import { LOGO_IMG, NAV_LINKS, PROFILE_IMG } from '../data/content'
import Icon from './Icon'

export default function Header({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const linkClass = (active) =>
    `border-b-2 px-1 py-1 transition-all ${
      active
        ? 'border-primary font-semibold text-primary'
        : 'border-transparent text-on-surface-variant hover:text-on-surface'
    }`

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-slate-800 bg-[#0c1321]/95 shadow-[0_8px_28px_rgba(0,0,0,0.45)]'
          : 'border-slate-800/80 bg-[#0c1321]/85 shadow-[0_4px_20px_rgba(0,0,0,0.35)]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-space-md px-margin-mobile md:px-margin">
        <div className="flex min-w-0 items-center gap-space-sm">
          <img alt="TW Monogram Logo" className="h-8 w-auto shrink-0 object-contain" src={LOGO_IMG} />
          <a className="group flex min-w-0 flex-col" href="#home" onClick={closeMenu}>
            <span className="flex items-center gap-space-xs truncate text-title-md font-semibold tracking-tight text-on-surface">
              Teddy Wong <span className="hidden font-normal text-outline sm:inline">|</span>{' '}
              <span className="hidden text-body-sm font-medium text-primary transition-colors group-hover:text-tertiary sm:inline">
                AI Delivery
              </span>
            </span>
            <span className="font-label-code hidden text-label-code tracking-widest text-on-surface-variant uppercase lg:block">
              Cross-Border Enterprise Systems
            </span>
          </a>
        </div>

        <nav className="font-label-code hidden items-center gap-space-md text-body-sm lg:flex xl:gap-space-lg" aria-label="主导航">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.id
            return (
              <a key={link.id} href={`#${link.id}`} className={linkClass(active)}>
                <span className="hidden xl:inline">{link.label}</span>
                <span className="xl:hidden">{link.labelZh}</span>
                <span className="ml-1 hidden text-[10px] text-outline xl:inline">{link.labelZh}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-space-sm sm:gap-space-md">
          <a
            className="relative hidden h-10 items-center justify-center rounded bg-primary-container px-space-md text-body-sm font-medium text-on-primary-container transition-all duration-200 hover:bg-inverse-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] focus:ring-1 focus:ring-primary focus:outline-none active:scale-[0.98] sm:inline-flex"
            href="#contact"
            onClick={closeMenu}
          >
            下载简历
          </a>
          <img
            alt="Profile"
            className="hidden h-8 w-8 rounded-full border border-outline-variant/60 object-cover ring-2 ring-primary/20 md:block"
            src={PROFILE_IMG}
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant/50 bg-surface-container-high text-on-surface transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-xl" />
          </button>
        </div>
      </div>

      {/* 移动端 / 平板：展开式楼层导航 */}
      <div
        id="mobile-nav"
        className={`border-t border-outline-variant/40 bg-[#0c1321]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-margin-mobile py-3" aria-label="移动端导航">
          {NAV_LINKS.map((link, index) => {
            const active = activeId === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`font-label-code flex items-center justify-between rounded-lg px-3 py-3 text-body-sm transition-colors ${
                  active
                    ? 'bg-primary-container/20 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-label-tag text-outline">0{index}</span>
                  <span className="font-medium text-on-surface">{link.labelZh}</span>
                  <span className="text-outline">{link.label}</span>
                </span>
                <Icon name="arrow_forward" className="text-base" />
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 inline-flex h-11 items-center justify-center rounded bg-primary-container px-space-md text-body-sm font-medium text-on-primary-container"
          >
            下载简历 / Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
