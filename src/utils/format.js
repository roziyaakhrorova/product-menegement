// 1450000 -> "1 450 000 so'm"
export function formatPrice(price) {
  return price.toLocaleString('en-US').replace(/,/g, ' ') + " so'm"
}

// Kategoriya bo'yicha rang va ikonka belgisi
export const categoryStyle = {
  Elektronika: { from: '#3355ff', to: '#7b93ff', icon: 'bolt' },
  "Uy-ro'zg'or": { from: '#0f8b8d', to: '#4fc1b8', icon: 'home' },
  Sport: { from: '#6b3fd4', to: '#a784f2', icon: 'flame' },
  Aksessuar: { from: '#d6336c', to: '#f78fb3', icon: 'bag' },
  Kiyim: { from: '#2b8a3e', to: '#74c98a', icon: 'shirt' },
  "Go'zallik": { from: '#e8590c', to: '#ffa94d', icon: 'sparkle' },
  Kitoblar: { from: '#8a5a2b', to: '#d4a373', icon: 'book' },
  "O'yinchoqlar": { from: '#d99100', to: '#ffd43b', icon: 'star' },
  Telefonlar: { from: '#495a8a', to: '#9aa8d4', icon: 'phone' },
  'Oziq-ovqat': { from: '#c92a2a', to: '#ff8787', icon: 'cup' },
  Avto: { from: '#2b2f3a', to: '#6b7280', icon: 'car' },
  Mebel: { from: '#a68a64', to: '#e0cfa8', icon: 'chair' },
  "Bog'dorchilik": { from: '#5c940d', to: '#c0eb75', icon: 'leaf' },
}
