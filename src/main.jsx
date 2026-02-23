import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlueprintProvider } from './context/BlueprintContext.jsx'

// Load devtools blocker asynchronously to prevent main thread blocking
setTimeout(() => {
  import('disable-devtool').then(({ default: disableDevtool }) => {
    disableDevtool();
  });
}, 2000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlueprintProvider>
      <App />
    </BlueprintProvider>
  </StrictMode>,
)
