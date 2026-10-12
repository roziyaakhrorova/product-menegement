export default function RenderLab({ count, onIncrement, useCb, onToggleCb, computeCount }) {
  return (
    <section className="rounded-2xl bg-ink p-5 text-white">
     

      <div className="mt-4 flex items-center justify-between rounded-xl bg-white/8 p-4">
        <div>
          <p className="text-xs font-semibold text-white/60">Counter</p>
          <p className="font-display text-5xl font-extrabold tabular-nums leading-none">{count}</p>
        </div>
        <button
          type="button"
          onClick={onIncrement}
          aria-label="Counterni oshirish"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-signal text-3xl font-bold text-ink transition-transform hover:bg-[#f5a200] active:scale-95"
        >
          +
        </button>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={useCb}
        onClick={onToggleCb}
        className="mt-4 flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl bg-white/8 p-4 text-left hover:bg-white/12"
      >
        <span>
          <span className="block text-xs text-white/60">
            {useCb ? 'Yoqilgan: kartalar qayta render bo‘lmaydi' : 'O‘chirilgan: hamma karta qayta render'}
          </span>
        </span>
        <span
          className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
            useCb ? 'bg-cobalt' : 'bg-white/25'
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
              useCb ? 'left-6' : 'left-1'
            }`}
          />
        </span>
      </button>

    </section>
  )
}
