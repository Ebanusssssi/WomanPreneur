import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageContextProvider from './context/PageContext.jsx'

createRoot(document.getElementById('root')).render(
  <PageContextProvider>
    <App />
  </PageContextProvider>,
)
