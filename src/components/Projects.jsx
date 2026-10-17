import { PROJECTS } from '../data/content'
import Icon from './Icon'

export default function Projects({ onOpenCase }) {
  return (
    <section
      className="w-full border-t border-outline-variant/30 bg-surface py-space-xl scroll-mt-24"
      id="projects"
    >
      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-xl flex max-w-3xl flex-col gap-space-xs">
          <div className="font-label-code inline-flex items-center gap-2 text-label-tag tracking-widest text-primary uppercase">
            <span>[ 02 / 实战标杆 ]</span>
            <span className="h-px w-8 bg-primary-container" />
          </div>
          <h2 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            6 大核心战绩 · 全球数据交付与基地建设
          </h2>
          <p className="text-body-md text-on-surface-variant">
            点击任意案例卡片查看基于 STAR 模型（Situation, Task, Action,
            Result）的深度交付复盘与工程方法论。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`group flex flex-col justify-between rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg transition-all duration-300 hover:-translate-y-1 ${project.hoverBorder}`}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`font-label-code rounded px-2 py-0.5 text-label-tag ${tag.className}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3
                  className={`text-headline-sm font-semibold text-on-surface transition-colors ${project.titleHover}`}
                >
                  {project.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">{project.desc}</p>
              </div>
              <div className="mt-space-lg flex items-center justify-between border-t border-outline-variant/30 pt-space-md">
                <div className="flex flex-col">
                  <span className="font-label-code text-label-tag text-outline">交付结果</span>
                  <span className={`text-title-md font-bold ${project.resultColor}`}>
                    {project.result}
                  </span>
                </div>
                <button
                  type="button"
                  className="font-label-code inline-flex cursor-pointer items-center gap-1 text-body-sm text-secondary hover:underline"
                  onClick={() => onOpenCase(project.id)}
                >
                  <span>STAR 复盘</span>
                  <Icon name="arrow_forward" className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
