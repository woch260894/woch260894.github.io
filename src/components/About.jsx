import { useState } from 'react'
import { useLocale } from '../i18n/LanguageContext'
import { ProofFrame, ProofLightbox } from './Proofs'

export default function About() {
  const { copy } = useLocale()
  const { ui } = copy
  const [proof, setProof] = useState(null)

  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface-container-low py-space-xl scroll-mt-24"
      id="about"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-3xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-secondary uppercase">
            <span>{ui.aboutKicker}</span>
            <span className="h-px w-8 bg-secondary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            {ui.aboutTitle}
          </h2>
          <p className="text-body-md text-on-surface-variant">{ui.aboutLead}</p>
        </div>

        <div className="relative flex flex-col gap-4 pl-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-primary/30 before:content-[''] md:pl-10 md:before:left-[19px]">
          {copy.timeline.map((item) => (
              <div key={item.phase} className="group relative">
                <div
                  className={`absolute top-5 -left-[30px] h-3 w-3 rounded-full border-2 bg-surface shadow-[0_0_12px_rgba(180,197,255,0.8)] md:-left-[46px] ${item.border}`}
                />
                <article className={`rounded-xl border border-outline-variant/40 bg-surface-container/80 p-4 backdrop-blur-sm md:p-5 ${item.hoverBorder}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`font-label-code rounded px-2 py-0.5 text-body-sm tracking-wide ${item.phaseClass}`}>
                      {item.phase}
                    </span>
                    <span className="font-label-code text-body-sm text-on-surface-variant">{item.location}</span>
                  </div>
                  <h3 className="mt-2 text-headline-md font-semibold text-on-surface">{item.title}</h3>
                  <p className="mt-1 text-body-lg text-on-surface">{item.sentence}</p>

                  {item.metrics?.length ? (
                    <div className="mt-4">
                      <div className="font-label-code text-body-sm tracking-[0.16em] text-primary uppercase">{ui.leadKicker}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.metrics.map((metric) => (
                          <span key={`${metric.value}-${metric.label}`} className="min-w-28 rounded-lg border border-primary/40 bg-primary-container/10 px-3 py-2">
                            <span className="block font-label-code text-headline-md font-bold text-primary">{metric.value}</span>
                            <span className="mt-0.5 block text-body-sm text-on-surface-variant">{metric.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {item.groups?.length ? (
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {item.groups.map((group) => (
                        <div key={group.name} className="rounded-lg border border-outline-variant/30 bg-surface/70 p-3">
                          <div className="font-label-code text-body-sm tracking-widest text-secondary uppercase">{group.name}</div>
                          <ul className="mt-2 flex flex-col gap-1.5">
                            {group.points.map((point) => (
                              <li key={point} className="text-body-md text-on-surface">{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {item.notes?.length ? (
                    <div className="mt-3 border-t border-outline-variant/20 pt-3">
                      <div className="font-label-code text-body-sm tracking-[0.16em] text-on-surface-variant uppercase">{ui.noteLabel}</div>
                      <ul className="mt-2 flex flex-col gap-1.5">
                        {item.notes.map((note) => (
                          <li key={note} className="text-body-md leading-6 text-on-surface-variant">{note}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {item.proofs?.length ? (
                    <div className="mt-3 flex gap-3">
                      {item.proofs.map((itemProof) => (
                        <ProofFrame key={itemProof.src} proof={itemProof} onOpen={setProof} />
                      ))}
                    </div>
                  ) : null}
                </article>
              </div>
          ))}
        </div>
      </div>
      <ProofLightbox proof={proof} onClose={() => setProof(null)} />
    </section>
  )
}
