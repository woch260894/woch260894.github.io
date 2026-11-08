export function ProofFrame({ proof, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(proof)}
      className="group w-[6.5rem] shrink-0 text-left sm:w-[7.25rem]"
    >
      <span className="relative block h-24 overflow-hidden rounded-md border border-primary/30 bg-surface-container-lowest shadow-[0_0_18px_rgba(37,99,235,0.22)] sm:h-28">
        <img
          alt={proof.caption}
          src={proof.src}
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </span>
      <span className="font-label-code mt-1.5 block truncate text-[11px] tracking-wide text-primary">
        {proof.kicker}
      </span>
    </button>
  )
}

export function ProofLightbox({ proof, onClose }) {
  if (!proof) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl text-white"
        aria-label="Close"
      >
        ×
      </button>
      <figure
        className="max-h-[90vh] max-w-5xl overflow-auto rounded-xl bg-white p-3"
        onClick={(event) => event.stopPropagation()}
      >
        <img alt={proof.caption} src={proof.src} className="mx-auto max-h-[78vh] w-auto object-contain" />
        <figcaption className="px-2 py-2 text-center text-body-sm text-surface">{proof.caption}</figcaption>
      </figure>
    </div>
  )
}
