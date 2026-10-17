import { INSIGHTS } from '../data/content'

export default function Insights() {
  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface-container-low py-space-xl scroll-mt-24"
      id="insights"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-3xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-secondary uppercase">
            <span>[ 03 / 战略洞察 ]</span>
            <span className="h-px w-8 bg-secondary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            AI 行业出海与工程交付周报精选
          </h2>
          <p className="text-body-md text-on-surface-variant">
            不做二手新闻的搬运工，专注提炼前沿模型演进对企业落地、出海合规与数据供应链的本质启发。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {INSIGHTS.map((item) => (
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
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{item.desc}</p>
              </div>
              <div
                className={`mt-space-lg rounded-lg border-l-2 bg-surface-container-high p-3 ${item.calloutBorder}`}
              >
                <span className={`font-label-code mb-1 block text-label-tag ${item.calloutLabel}`}>
                  对企业出海交付的启发：
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
