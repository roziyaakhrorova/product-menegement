export default function SelectedBar({ product, onClear }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-2xl px-5 py-4 ${
        product ? 'bg-signal-soft ring-2 ring-signal' : 'bg-white ring-1 ring-line'
      }`}
    >
      <div className="min-w-0">
        <p className="text-xs font-semibold text-slate-ink">Tanlangan mahsulot</p>
        <p className="truncate font-display text-xl font-bold">
          {product ? product.name : 'Hali tanlanmagan'}
        </p>
      </div>
      {product && (
        <button
          type="button"
          onClick={onClear}
          className="shrink-0 cursor-pointer rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-cobalt"
        >
          Bekor qilish
        </button>
      )}
    </div>
  )
}
