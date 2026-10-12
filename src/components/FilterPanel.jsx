import { categories } from '../data/products.js'

const sortOptions = [
  { value: 'none', label: 'Odatiy' },
  { value: 'asc', label: 'Arzon' },
  { value: 'desc', label: 'Qimmat' },
]

export default function FilterPanel({ search, onSearch, category, onCategory, sort, onSort }) {
  return (
    <section className="rounded-2xl bg-white p-5 ring-1 ring-line">
      <label htmlFor="search" className="text-sm font-bold">
        Qidirish
      </label>
      <input
        id="search"
        type="search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Mahsulot nomi..."
        className="mt-2 w-full rounded-xl border border-line bg-fog/60 px-3.5 py-2.5 text-sm placeholder:text-slate-ink/70 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-4 focus:ring-cobalt/15"
      />

      <p className="mt-5 text-sm font-bold">Kategoriya</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => onCategory(c)}
            className={`cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              category === c
                ? 'bg-cobalt text-white'
                : 'bg-fog text-ink hover:bg-line'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm font-bold">Narx bo'yicha</p>
      <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl bg-fog p-1">
        {sortOptions.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={sort === o.value}
            onClick={() => onSort(o.value)}
            className={`cursor-pointer rounded-lg px-2 py-2 text-sm font-semibold transition-colors ${
              sort === o.value ? 'bg-white text-ink shadow-sm' : 'text-slate-ink hover:text-ink'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </section>
  )
}
