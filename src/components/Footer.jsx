import { EMAIL, JC_URL } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#1E293B] bg-[#0B1220]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-lg px-margin-mobile py-space-xl md:px-margin">
        <div className="flex flex-col items-start justify-between gap-space-lg border-b border-surface-container-highest/60 pb-space-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary-container text-[12px] font-semibold text-on-primary-container">
                王
              </span>
              <span className="text-title-md text-on-surface">王俊 · 海外交付经理</span>
            </div>
            <p className="max-w-md text-body-sm text-on-surface-variant">
              香港永久居民，现居深圳，可常驻香港。海外交付与基地运营，具身数据采集、标注验收与跨文化团队管理。
            </p>
          </div>
          <div className="font-label-code inline-flex h-7 items-center gap-2 rounded-full border border-[#1E293B] bg-surface-container-high px-3 text-label-tag text-on-surface shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
            <span>深圳 · 可常驻香港 · 海外 / 国内均可</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md text-center md:flex-row md:text-left">
          <div className="flex items-center gap-space-lg">
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href={JC_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="work" className="text-base" />
              <span>JC Collection</span>
            </a>
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href={`mailto:${EMAIL}`}
            >
              <Icon name="alternate_email" className="text-base" />
              <span>Email</span>
            </a>
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href="https://github.com/woch260894"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="terminal" className="text-base" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="font-label-code text-label-code text-outline">
            © 2026 王俊. 海外交付经理 / 基地负责人.
          </p>
        </div>
      </div>
    </footer>
  )
}
