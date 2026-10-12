import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ataylab <StrictMode> ishlatilmadi: dev rejimda StrictMode har bir komponentni
// ikki marta render qiladi va render sanoqlarini chalkashtirib yuboradi.
createRoot(document.getElementById('root')).render(<App />)
