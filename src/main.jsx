import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BlueprintProvider } from './context/BlueprintContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlueprintProvider>
      <App />
    </BlueprintProvider>
  </StrictMode>,
)
