import { useState } from 'react'
import { useLocale } from '../i18n/LanguageContext'
import { useCountUp } from '../hooks/useCountUp'
import { useTypewriter } from '../hooks/useTypewriter'
import Icon from './Icon'
import { ProofFrame, ProofLightbox } from './Proofs'

function StatCell({ stat }) {
  const value = useCountUp(stat.value)

  return (
    <div className="relative overflow-hidden border border-primary/25 bg-surface-container/70 px-4 py-3 backdrop-blur-sm">
      <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary" />
      <span className="absolute right-0 bottom-0 h-2.5 w-2.5 border-r border-b border-secondary" />
      <div className="font-label-code text-[10px] tracking-[0.18em] text-secondary uppercase">{stat.node}</div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="text-metric-display-mobile font-bold text-on-surface md:text-metric-display">{value}</span>
        <span className={`font-label-code text-body-sm ${stat.unitColor}`}>{stat.unit}</span>
      </div>
      <div className="mt-1 truncate text-body-sm text-on-surface-variant">{stat.title}</div>
    </div>
  )
}

export default function Hero() {
  const { copy, profile } = useLocale()
  const { ui } = copy
  const typed = useTypewriter(copy.phrases)
  const [open, setOpen] = useState(null)
  const proofs = copy.timeline.flatMap((item) => item.proofs || [])
  const ticker = [...ui.ticker, ...ui.ticker]

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] w-full flex-col justify-between overflow-hidden py-5 scroll-mt-24 md:py-6"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(180,197,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(180,197,255,0.07)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-[36rem] rounded-full bg-primary-container/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-56 w-80 rounded-full bg-secondary-container/15 blur-[90px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-between gap-5 px-margin-mobile md:px-margin">
        <div className="grid items-end gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/10 px-3 py-1">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-container shadow-[0_0_10px_#ec6a06]" />
              <span className="font-label-code text-[11px] tracking-[0.16em] text-primary uppercase">{ui.heroBadge}</span>
            </div>
            <h1 className="text-display-xl-mobile font-bold tracking-tight text-on-surface md:text-display-xl">
              {ui.heroName}
              <span className="mt-1 block text-headline-lg-mobile font-semibold text-tertiary md:text-headline-lg">
                {ui.heroRole}
              </span>
            </h1>
            <div className="mt-2 flex h-7 items-center">
              <span className="font-label-code text-body-md text-secondary">{typed}</span>
              <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-secondary-container" />
            </div>
            <p className="mt-2 max-w-xl text-body-md text-on-surface-variant">{ui.heroBio}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ui.identity.map((chip) => (
                <span
                  key={chip}
                  className="font-label-code rounded-full border border-outline-variant/50 bg-surface-container/80 px-2.5 py-1 text-[11px] tracking-wide text-on-surface"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex h-10 items-center gap-2 rounded bg-primary-container px-4 text-body-sm text-on-primary-container shadow-[0_0_28px_rgba(37,99,235,0.45)] transition hover:bg-inverse-primary"
                href="#projects"
              >
                <Icon name="explore" className="text-lg" />
                {ui.viewProjects}
              </a>
              <a
                className="inline-flex h-10 items-center gap-2 rounded border border-outline-variant/60 px-4 text-body-sm text-on-surface transition hover:border-primary/50"
                href="#contact"
              >
                <Icon name="chat_bubble" className="text-lg" />
                {ui.contactCta}
              </a>
            </div>
          </div>

          <div className="flex lg:col-span-4 lg:justify-end">
            <div className="relative w-28 sm:w-36 lg:w-44">
              <div className="absolute -inset-3 rounded-2xl bg-primary-container/20 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-primary/40 bg-white shadow-[0_0_40px_rgba(37,99,235,0.28)]">
                <img alt={ui.portraitAlt} className="h-full w-full object-contain object-center" src={profile} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {copy.stats.map((stat) => (
            <StatCell key={stat.node} stat={stat} />
          ))}
        </div>

        <div className="relative overflow-hidden border-y border-primary/20 py-2">
          <div className="ticker-track flex w-max gap-8">
            {ticker.map((item, index) => (
              <span key={`${item}-${index}`} className="font-label-code text-body-sm whitespace-nowrap text-primary">
                {item}
                <span className="ml-8 text-secondary">/</span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="font-label-code mb-2 text-[11px] tracking-[0.18em] text-secondary uppercase">
            {ui.galleryKicker}
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {proofs.map((proof) => (
              <ProofFrame key={proof.src} proof={proof} onOpen={setOpen} />
            ))}
          </div>
        </div>

        <a href="#about" className="font-label-code flex items-center gap-2 self-start text-[11px] tracking-[0.2em] text-on-surface-variant uppercase">
          <span className="inline-block h-8 w-px bg-gradient-to-b from-primary to-transparent" />
          {ui.scrollCue}
        </a>
      </div>

      <ProofLightbox proof={open} onClose={() => setOpen(null)} />
    </section>
  )
}
