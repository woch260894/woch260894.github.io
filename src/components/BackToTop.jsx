import Icon from './Icon'

export default function BackToTop({ visible }) {
  return (
    <button
      type="button"
      aria-label="回到顶部"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group fixed right-5 bottom-6 z-40 flex items-center gap-1.5 rounded-full border border-outline-variant/60 bg-surface-container-high/90 p-3 text-on-surface shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary-container hover:text-on-primary-container ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <Icon name="arrow_upward" className="text-xl transition-transform group-hover:-translate-y-0.5" />
      <span className="font-label-code hidden pr-1 text-[11px] font-semibold tracking-wider uppercase sm:inline">
        Top
      </span>
    </button>
  )
}
