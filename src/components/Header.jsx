import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LanguageContext'
import Icon from './Icon'

export default function Header({ activeId }) {
  const { copy, lang, setLang, profile } = useLocale()
  const { ui } = copy
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
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary-container text-body-sm font-semibold text-on-primary-container">
            {ui.brandMark}
          </span>
          <a className="group flex min-w-0 flex-col" href="#home" onClick={closeMenu}>
            <span className="flex items-center gap-space-xs truncate text-title-md font-semibold tracking-tight text-on-surface">
              {ui.brandName} <span className="hidden font-normal text-outline sm:inline">|</span>{' '}
              <span className="hidden text-body-sm font-medium text-primary transition-colors group-hover:text-tertiary sm:inline">
                {ui.brandRole}
              </span>
            </span>
            <span className="font-label-code hidden text-label-code tracking-widest text-on-surface-variant uppercase lg:block">
              {ui.brandMeta}
            </span>
          </a>
        </div>

        <nav className="font-label-code hidden items-center gap-space-md text-body-sm lg:flex xl:gap-space-lg" aria-label={ui.navLabel}>
          {copy.navLinks.map((link) => {
            const active = activeId === link.id
            return (
              <a key={link.id} href={`#${link.id}`} className={linkClass(active)}>
                <span>{lang === 'en' ? link.label : link.labelZh}</span>
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
            {ui.contactCta}
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="font-label-code h-10 rounded border border-outline-variant/50 px-3 text-body-sm text-on-surface transition-colors hover:border-primary/50 hover:text-primary"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <img
            alt={ui.portraitAlt}
            className="hidden h-8 w-8 rounded-full border border-outline-variant/60 object-cover object-center ring-2 ring-primary/20 md:block"
            src={profile}
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant/50 bg-surface-container-high text-on-surface transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
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
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-margin-mobile py-3" aria-label={ui.mobileNavLabel}>
          {copy.navLinks.map((link, index) => {
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
                  <span className="font-medium text-on-surface">{lang === 'en' ? link.label : link.labelZh}</span>
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
            {ui.contactCta}
          </a>
        </nav>
      </div>
    </header>
  )
}
