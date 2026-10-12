const paths = {
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8z',
  home: 'M3 11 12 3l9 8v10h-6v-6H9v6H3V11z',
  flame: 'M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z',
  bag: 'M6 7h12l1 14H5L6 7zm3 0a3 3 0 0 1 6 0',
  shirt: 'M8 3 3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z',
  sparkle: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z',
  book: 'M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4V5zm16 0h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6V5z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  phone: 'M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm4 17h.01',
  cup: 'M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8zm12 1h2a2 2 0 0 1 0 5h-2M8 3v2m4-2v2',
  car: 'M4 15l2-6a2 2 0 0 1 2-1h8a2 2 0 0 1 2 1l2 6v4h-3v-2H7v2H4v-4zm3 0h.01M17 15h.01',
  chair: 'M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M3 12a2 2 0 0 1 4 0v3h10v-3a2 2 0 0 1 4 0v6H3v-6zM6 18v2m12-2v2',
  leaf: 'M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c2-5 5-8 9-10',
}

export default function CategoryIcon({ name, className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
