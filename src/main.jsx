import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlueprintProvider } from './context/BlueprintContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlueprintProvider>
      <App />
    </BlueprintProvider>
  </StrictMode>,
)
