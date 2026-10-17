import { TIMELINE } from '../data/content'

export default function About() {
  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface-container-low py-space-xl scroll-mt-24"
      id="about"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-3xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-secondary uppercase">
            <span>[ 01 / 跨界自驱力 ]</span>
            <span className="h-px w-8 bg-secondary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            跨界履历时间线 · 终身学习者与破局者
          </h2>
          <p className="text-body-md text-on-surface-variant">
            跨界不是偏离，而是将超五星服务敏锐度、大宗商业谈判力、高压创业韧性与自驱 AI
            全栈能力融会贯通，塑造成今日极速破局、敢打硬仗的国际交付操盘手。
          </p>
        </div>

        <div className="relative flex flex-col gap-space-lg pl-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-0.5 before:bg-outline-variant/40 before:content-[''] md:pl-10 md:before:left-[19px]">
          {TIMELINE.map((item) => (
            <div key={item.phase} className="group relative">
              <div
                className={`absolute top-1.5 -left-[30px] h-4 w-4 rounded-full border-2 bg-surface transition-transform group-hover:scale-125 md:-left-[46px] ${item.border}`}
              />
              <div
                className={`rounded-xl border border-outline-variant/40 bg-surface-container p-space-lg transition-all ${item.hoverBorder}`}
              >
                <div className="mb-space-xs flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`font-label-code inline-flex items-center rounded px-2.5 py-0.5 text-label-tag ${item.phaseClass}`}
                  >
                    {item.phase}
                  </span>
                  <span className="font-label-code text-body-sm text-outline">{item.location}</span>
                </div>
                <h3 className="text-headline-sm font-semibold text-on-surface">{item.title}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-on-surface-variant md:text-body-md">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
