export default function ReadingProgress({ progress }) {
  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-[70] h-[3px] bg-surface-container-lowest/50">
      <div
        className="h-full bg-gradient-to-r from-primary-container via-tertiary to-secondary shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
