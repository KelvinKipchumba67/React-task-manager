import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/App.css'
import App from './components/App.jsx'
import { ThemeProvider } from './components/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)