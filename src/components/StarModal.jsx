import { useEffect } from 'react'
import { STAR_CASES } from '../data/content'
import Icon from './Icon'

export default function StarModal({ caseId, onClose }) {
  const data = caseId ? STAR_CASES[caseId] : null

  useEffect(() => {
    if (!data) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [data, onClose])

  if (!data) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col gap-6 overflow-y-auto rounded-xl border border-outline-variant/60 bg-surface-container-high p-6 shadow-2xl md:p-8">
        <button
          type="button"
          className="absolute top-5 right-5 rounded-full border border-outline-variant/40 bg-surface-container p-1 text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-on-surface"
          onClick={onClose}
        >
          <Icon name="close" className="text-xl" />
        </button>

        <div className="flex flex-col gap-2 border-b border-outline-variant/40 pr-8 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-label-code rounded bg-primary-container px-2.5 py-0.5 text-label-tag text-on-primary-container">
              {data.tag}
            </span>
            <span className="font-label-code text-label-tag text-on-surface-variant">{data.client}</span>
          </div>
          <h3 className="text-headline-sm font-bold text-on-surface md:text-headline-md">{data.title}</h3>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border-l-4 border-primary bg-surface-container p-3.5">
            <span className="font-label-code text-label-tag font-bold text-primary">
              S · 业务背景 (Situation)
            </span>
            <p className="mt-1 text-body-sm leading-relaxed text-on-surface-variant">{data.situation}</p>
          </div>
          <div className="rounded-lg border-l-4 border-secondary bg-surface-container p-3.5">
            <span className="font-label-code text-label-tag font-bold text-secondary">
              T · 核心任务 (Task)
            </span>
            <p className="mt-1 text-body-sm leading-relaxed text-on-surface-variant">{data.task}</p>
          </div>
          <div className="rounded-lg border-l-4 border-tertiary bg-surface-container p-3.5">
            <span className="font-label-code text-label-tag font-bold text-tertiary">
              A · 关键行动 (Action)
            </span>
            <div className="mt-1 space-y-1 text-body-sm leading-relaxed text-on-surface-variant">
              {data.action.map((step, i) => (
                <p key={step}>
                  {i + 1}. {step}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-emerald-400 bg-surface-container p-3.5">
            <span className="font-label-code text-label-tag font-bold text-emerald-400">
              R · 交付成果 (Result)
            </span>
            <p className="mt-1 text-body-sm leading-relaxed font-semibold text-on-surface-variant">
              {data.result}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/30 bg-surface-container-low p-4">
          <span className="font-label-code text-label-tag font-semibold text-secondary uppercase">
            💡 操盘交付心得与方法论沉淀
          </span>
          <p className="text-body-sm text-on-surface italic">“{data.learning}”</p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            className="rounded bg-surface-container px-5 py-2 text-body-sm font-medium text-on-surface transition-colors hover:bg-surface-variant"
            onClick={onClose}
          >
            关闭复盘
          </button>
        </div>
      </div>
    </div>
  )
}
