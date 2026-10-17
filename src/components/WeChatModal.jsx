import Icon from './Icon'

export default function WeChatModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-outline-variant/60 bg-surface-container-high p-6 text-center shadow-2xl">
        <button
          type="button"
          className="absolute top-4 right-4 p-1 text-on-surface-variant hover:text-on-surface"
          onClick={onClose}
        >
          <Icon name="close" className="text-lg" />
        </button>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-400">
          <Icon name="chat" className="text-2xl" />
        </div>
        <div>
          <h4 className="text-title-md font-semibold text-on-surface">Teddy Wong 个人微信</h4>
          <p className="mt-1 text-body-sm text-on-surface-variant">微信号：TeddyWong_AI</p>
        </div>
        <div className="flex h-48 w-48 flex-col items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container p-3">
          <svg className="h-full w-full text-primary" fill="currentColor" viewBox="0 0 100 100">
            <path d="M0,0 h30 v30 h-30 z M4,4 h22 v22 h-22 z M8,8 h14 v14 h-14 z" />
            <path d="M70,0 h30 v30 h-30 z M74,4 h22 v22 h-22 z M78,8 h14 v14 h-14 z" />
            <path d="M0,70 h30 v30 h-30 z M4,74 h22 v22 h-22 z M8,78 h14 v14 h-14 z" />
            <rect height="8" width="8" x="38" y="10" />
            <rect height="8" width="8" x="52" y="10" />
            <rect height="24" width="24" x="38" y="38" />
            <rect height="8" width="8" x="10" y="38" />
            <rect height="8" width="8" x="74" y="38" />
            <rect height="8" width="8" x="38" y="74" />
            <rect height="8" width="8" x="52" y="74" />
            <rect height="16" width="16" x="74" y="74" />
          </svg>
        </div>
        <p className="font-label-code text-label-tag text-outline">扫一扫添加微信 / 请注明来意与机构</p>
      </div>
    </div>
  )
}
