import { ELEVATOR_LINKS } from '../data/content'

export default function ElevatorNav({ activeId }) {
  return (
    <aside
      aria-label="楼层电梯导航"
      className="pointer-events-auto fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex sm:right-6"
    >
      <div className="flex flex-col items-center gap-4 rounded-full border border-outline-variant/50 bg-surface-container-high/80 px-2 py-3 shadow-xl backdrop-blur-md">
        {ELEVATOR_LINKS.map((item, index) => {
          const active = activeId === item.id
          return (
            <div key={item.id} className="flex flex-col items-center gap-4">
              {index > 0 && <div className="h-3 w-px bg-outline-variant/40" />}
              <a
                href={`#${item.id}`}
                title={item.label}
                className="group relative flex items-center justify-center rounded-full p-1 transition-all"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    active
                      ? 'h-3.5 w-3.5 bg-primary shadow-[0_0_10px_rgba(180,197,255,0.9)] ring-2 ring-primary-container'
                      : 'h-2.5 w-2.5 bg-outline-variant'
                  }`}
                />
                <span className="font-label-code pointer-events-none absolute right-8 rounded border border-outline-variant/60 bg-surface-container-highest/95 px-2.5 py-1 text-[11px] whitespace-nowrap text-on-surface opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
