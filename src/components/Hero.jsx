import { PROFILE_IMG, STATS, TYPEWRITER_PHRASES } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { useTypewriter } from '../hooks/useTypewriter'
import Icon from './Icon'

function StatCard({ stat }) {
  const value = useCountUp(stat.value)

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-high p-space-lg shadow-md transition-all duration-300 ${stat.hoverBorder}`}
    >
      <div className={`font-label-code absolute top-3 right-4 text-label-tag ${stat.nodeColor}`}>
        {stat.node}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-metric-display font-bold text-on-surface">{value}</span>
        <span className={`text-headline-sm ${stat.unitColor}`}>{stat.unit}</span>
      </div>
      <h3 className="mt-1 text-title-md font-semibold text-on-surface">{stat.title}</h3>
      <p className="mt-2 text-body-sm text-on-surface-variant">{stat.desc}</p>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_PHRASES)

  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl scroll-mt-24 md:py-24" id="home">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-primary-container/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-4 h-[280px] w-[400px] rounded-full bg-secondary-container/10 blur-[100px]" />

      <div className="mx-auto max-w-[1280px] px-margin-mobile md:px-margin">
        <div className="mb-space-lg inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-high px-3 py-1.5 text-on-surface shadow-sm">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
          <span className="font-label-code text-label-tag tracking-wider text-on-surface uppercase">
            🇭🇰 香港人 · AI 数据交付 · 跨文化团队管理
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col items-start gap-space-md lg:col-span-7">
            <div className="flex flex-col gap-space-xs">
              <h1 className="text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
                Teddy Wong <span className="font-normal text-primary">|</span>{' '}
                <span className="text-tertiary">AI Delivery Lead</span>
              </h1>
              <div className="flex h-8 items-center">
                <span className="font-label-code text-body-md font-medium tracking-wide text-secondary">
                  {typed}
                </span>
                <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-secondary-container" />
              </div>
            </div>

            <p className="mt-space-xs max-w-2xl text-body-md leading-relaxed text-on-surface-variant md:text-body-lg">
              深耕自动驾驶与具身智能全球化数据闭环，曾操盘 WeRide
              国际头部客户交付（Anthropic、小红书、Calder、阿里具身），带领跨文化 50+
              人多语种团队建立吉隆坡与迪拜海外基地，致力于为下一代具身与通用 AI
              打造极速、可靠的出海交付引擎。
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                className="inline-flex h-11 items-center gap-2 rounded bg-primary-container px-space-lg text-body-sm text-on-primary-container shadow-[0_0_24px_rgba(37,99,235,0.4)] transition-all duration-200 hover:bg-inverse-primary hover:text-on-primary"
                href="#projects"
              >
                <Icon name="explore" className="text-lg" />
                <span>探索核心战绩</span>
              </a>
              <a
                className="inline-flex h-11 items-center gap-2 rounded border border-outline-variant/60 bg-surface-container-high px-space-lg text-body-sm text-on-surface transition-all duration-200 hover:bg-surface-bright"
                href="#contact"
              >
                <Icon name="chat_bubble" className="text-lg" />
                <span>获取战略简报 / 联系我</span>
              </a>
            </div>

            <div className="font-label-code mt-space-sm flex items-center gap-space-sm text-body-sm text-on-surface-variant">
              <Icon name="public" className="text-base text-primary" />
              <span>Fluent in Cantonese (母语) / English (工作熟练) / Mandarin (流利)</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="group relative aspect-square w-72 overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-low shadow-2xl sm:w-80 md:w-96">
              <img
                alt="Teddy Wong Executive Portrait"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={PROFILE_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2.5 rounded-lg border border-outline-variant/50 bg-surface-container-highest/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-body-sm font-semibold text-on-surface">
                    开放香港 AI 运营/交付负责人机会
                  </span>
                  <span className="font-label-code text-label-tag text-on-surface-variant">
                    Senior Lead · Autonomous & AI Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.node} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
