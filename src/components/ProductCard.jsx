import { memo, useRef } from 'react'
import CategoryIcon from './CategoryIcon.jsx'
import { formatPrice, categoryStyle } from '../utils/format.js'

function ProductCard({ product, isSelected, onSelect }) {
  // Bu karta necha marta render bo'lganini sanaymiz
  const renders = useRef(0)
  renders.current += 1

  console.log('ProductCard render:', product.name)

  const style = categoryStyle[product.category]

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(16,28,58,0.06),0_12px_28px_-18px_rgba(16,28,58,0.35)] transition-shadow hover:shadow-[0_1px_0_rgba(16,28,58,0.06),0_20px_36px_-16px_rgba(16,28,58,0.45)] ${
        isSelected ? 'ring-2 ring-signal' : 'ring-1 ring-line'
      }`}
    >
      <div
        className="relative flex h-36 items-end p-4 text-white"
        style={{ background: `linear-gradient(135deg, ${style.from}, ${style.to})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] [background-size:14px_14px]" />
        <CategoryIcon name={style.icon} className="relative h-12 w-12 opacity-95" />
        <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur">
          render ×{renders.current}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-semibold text-slate-ink">{product.category}</p>
          <h3 className="mt-0.5 font-display text-lg font-bold leading-tight text-ink">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-base font-bold tabular-nums">{formatPrice(product.price)}</p>
          <p className="flex items-center gap-1 text-sm font-semibold text-ink">
            <span className="text-signal" aria-hidden="true">★</span>
            {product.rating.toFixed(1)}
          </p>
        </div>

        <button
          type="button"
          aria-pressed={isSelected}
          onClick={() => onSelect(product.id)}
          className={`mt-auto w-full cursor-pointer rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
            isSelected
              ? 'bg-signal text-ink hover:bg-[#f5a200]'
              : 'bg-ink text-white hover:bg-cobalt'
          }`}
        >
          {isSelected ? 'Tanlandi ✓' : 'Tanlash'}
        </button>
      </div>
    </article>
  )
}

// React.memo: props (product, isSelected, onSelect) o'zgarmasa karta qayta render bo'lmaydi
export default memo(ProductCard)
