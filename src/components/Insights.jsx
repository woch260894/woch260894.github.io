import { useLocale } from '../i18n/LanguageContext'

export default function Insights() {
  const { copy } = useLocale()
  const { ui } = copy
  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface-container-low py-space-xl scroll-mt-24"
      id="insights"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-3xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-secondary uppercase">
            <span>{ui.skillsKicker}</span>
            <span className="h-px w-8 bg-secondary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            {ui.skillsTitle}
          </h2>
          <p className="text-body-md text-on-surface-variant">{ui.skillsLead}</p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {copy.insights.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-between rounded-xl border border-outline-variant/40 bg-surface-container p-space-lg transition-all duration-300 ${item.hoverBorder}`}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className={`font-label-code rounded px-2 py-0.5 text-label-tag ${item.tagClass}`}>
                    {item.tag}
                  </span>
                  <span className="font-label-code text-label-tag text-outline">{item.meta}</span>
                </div>
                <h3 className="text-title-md leading-snug font-bold text-on-surface">{item.title}</h3>
                <ul className="flex flex-col gap-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-body-md text-on-surface">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`mt-space-lg rounded-lg border-l-2 bg-surface-container-high p-3 ${item.calloutBorder}`}
              >
                <span className={`font-label-code mb-1 block text-label-tag ${item.calloutLabel}`}>
                  {ui.noteLabel}
                </span>
                <p className="text-body-sm text-on-surface-variant">{item.callout}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
