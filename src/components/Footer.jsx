import { LOGO_IMG } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#1E293B] bg-[#0B1220]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-space-lg px-margin-mobile py-space-xl md:px-margin">
        <div className="flex flex-col items-start justify-between gap-space-lg border-b border-surface-container-highest/60 pb-space-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <img
                alt="TW Monogram Logo"
                className="h-6 w-auto object-contain opacity-80"
                src={LOGO_IMG}
              />
              <span className="text-title-md text-on-surface">Teddy Wong · 王天宇</span>
            </div>
            <p className="max-w-md text-body-sm text-on-surface-variant">
              Senior Cross-Border Autonomous Systems & Frontier AI Enterprise Delivery Leader.
              Bridging GBA engineering with global deployment nodes.
            </p>
          </div>
          <div className="font-label-code inline-flex h-7 items-center gap-2 rounded-full border border-[#1E293B] bg-surface-container-high px-3 text-label-tag text-on-surface shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
            <span>Based in Shenzhen · Open to Hong Kong opportunities</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md text-center md:flex-row md:text-left">
          <div className="flex items-center gap-space-lg">
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="work" className="text-base" />
              <span>LinkedIn</span>
            </a>
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href="#contact"
            >
              <Icon name="chat" className="text-base" />
              <span>WeChat</span>
            </a>
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href="mailto:contact@teddywong.ai"
            >
              <Icon name="alternate_email" className="text-base" />
              <span>Email</span>
            </a>
            <a
              className="font-label-code flex items-center gap-1 text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="terminal" className="text-base" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="font-label-code text-label-code text-outline">
            © 2025 Teddy Wong. All rights reserved. Precision Delivery & AI Operations.
          </p>
        </div>
      </div>
    </footer>
  )
}
