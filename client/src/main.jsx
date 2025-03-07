import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './authContext.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
   
)
