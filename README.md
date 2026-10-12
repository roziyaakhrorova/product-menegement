# Mahsulotlar boshqaruvi (React + Vite + Tailwind CSS)

React'da `useMemo`, `React.memo` va `useCallback` ishlatilishini ko'rsatadigan o'quv loyihasi.

## Ishga tushirish

```bash
npm install
npm run dev
```

## Tuzilma

```
src/
  App.jsx                  holat (state) va hook'lar
  data/products.js         56 ta mahsulot, 13 ta kategoriya
  utils/format.js          narx formati, kategoriya ranglari
  components/
    ProductCard.jsx        React.memo bilan o'ralgan karta
    FilterPanel.jsx        qidiruv, kategoriya, saralash
    RenderLab.jsx          counter, useCallback almashtirgich
    SelectedBar.jsx        tanlangan mahsulot nomi
    CategoryIcon.jsx       oddiy SVG ikonkalar
```

## Qayta renderlar qanday ishlaydi

**useMemo** (`App.jsx`). Filtr va saralash natijasi `[search, category, sort]` o'zgargandagina
qayta hisoblanadi. Counter bosilganda `App` qayta chiziladi, lekin hisoblash o'tkazib yuboriladi.
Olib tashlansa: counter har bosilganda butun ro'yxat qaytadan filtrlanadi va saralanadi. Kartalar
baribir render bo'lmaydi (mahsulot obyektlari o'sha-o'sha), lekin ortiqcha hisoblash bajariladi.
Mahsulotlar soni oz bo'lsa farq sezilmaydi, katta ro'yxatda esa sekinlashadi.

**React.memo** (`ProductCard.jsx`). Karta faqat `product`, `isSelected` yoki `onSelect` o'zgarganda
qayta render bo'ladi. Counter oshganda hech biri o'zgarmaydi, shuning uchun kartalar
render bo'lmaydi (`render ×N` raqami o'zgarmaydi, konsolda ham yangi yozuv chiqmaydi).
Olib tashlansa: counter bosilganda barcha kartalar qayta render bo'ladi.

**useCallback** (`App.jsx`). `handleSelect` funksiyasi bir xil havola bo'lib qoladi
(dependency array bo'sh, chunki `setSelectedId` ichida `prev` ishlatilgan). Funksiya `React.memo`
uchun "o'zgarmagan prop" bo'ladi.
Olib tashlansa: har renderda yangi funksiya yaratiladi, `React.memo` props o'zgardi deb
hisoblaydi va barcha kartalar baribir qayta render bo'ladi. Buni "Render laboratoriyasi"dagi
`useCallback` tugmasi bilan o'zingiz tekshirishingiz mumkin.

## Tekshirish tartibi

1. Brauzer konsolini oching (F12).
2. `+` ni bosing: kartalarda `render ×N` o'zgarmaydi, konsolda `ProductCard render` chiqmaydi.
3. `useCallback` ni o'chiring va `+` ni yana bosing: har bir karta qayta render bo'ladi.
4. Mahsulotni tanlang: faqat tanlangan (va avval tanlangan) karta render bo'ladi, chunki ularning
   `isSelected` qiymati o'zgargan.
5. Qidiruvga yozing: `useMemo` hisoblagichi oshadi.

> `StrictMode` ataylab o'chirilgan, aks holda dev rejimda har bir render ikki marta sanaladi.
