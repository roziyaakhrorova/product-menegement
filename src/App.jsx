import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { products } from './data/products.js'
import ProductCard from './components/ProductCard.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import RenderLab from './components/RenderLab.jsx'
import SelectedBar from './components/SelectedBar.jsx'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Barchasi')
  const [sort, setSort] = useState('none')
  const [selectedId, setSelectedId] = useState(null)
  const [count, setCount] = useState(0)
  const [useCb, setUseCb] = useState(true)

  const computeCount = useRef(0)

 
  const visibleProducts = useMemo(() => {
    computeCount.current += 1
    console.log('useMemo: filtr va saralash hisoblandi')

    const text = search.trim().toLowerCase()
    let list = products.filter(
      (p) =>
        p.name.toLowerCase().includes(text) &&
        (category === 'Barchasi' || p.category === category)
    )

    if (sort === 'asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'desc') list = [...list].sort((a, b) => b.price - a.price)

    return list
  }, [search, category, sort])

  // useCallback: funksiya har renderda bir xil havola bo'lib qoladi,
  // shuning uchun React.memo props'ni "o'zgarmagan" deb hisoblaydi.
  const memoSelect = useCallback((id) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }, [])

  // useCallback'siz variant: har renderda yangi funksiya yaratiladi
  const plainSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  const handleSelect = useCb ? memoSelect : plainSelect

  const selectedProduct = products.find((p) => p.id === selectedId) || null

  // useEffect: tanlangan mahsulot nomini brauzer sarlavhasida ko'rsatadi
  useEffect(() => {
    document.title = selectedProduct
      ? `${selectedProduct.name} · Mahsulotlar`
      : 'Mahsulotlar boshqaruvi'
  }, [selectedProduct])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Mahsulotlar
          </h1>
        
        </div>
        <p className="rounded-full bg-white px-4 py-2 text-sm font-bold ring-1 ring-line">
          {visibleProducts.length} / {products.length} ta mahsulot
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
        <aside className="space-y-5 lg:sticky lg:top-6">
          <FilterPanel
            search={search}
            onSearch={setSearch}
            category={category}
            onCategory={setCategory}
            sort={sort}
            onSort={setSort}
          />
          <RenderLab
            count={count}
            onIncrement={() => setCount((c) => c + 1)}
            useCb={useCb}
            onToggleCb={() => setUseCb((v) => !v)}
            computeCount={computeCount.current}
          />
        </aside>

        <main className="space-y-5">
          <SelectedBar product={selectedProduct} onClear={() => setSelectedId(null)} />

          {visibleProducts.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-line">
              <p className="font-display text-xl font-bold">Hech narsa topilmadi</p>
              <p className="mt-1 text-slate-ink">Boshqa so‘z yoki kategoriya bilan urinib ko‘ring.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setCategory('Barchasi')
                }}
                className="mt-4 cursor-pointer rounded-xl bg-cobalt px-5 py-2.5 text-sm font-bold text-white hover:bg-cobalt-dark"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={product.id === selectedId}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
