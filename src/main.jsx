import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageContextProvider from './context/PageContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PageContextProvider>
      <App />
    </PageContextProvider>,
  </BrowserRouter>
)
