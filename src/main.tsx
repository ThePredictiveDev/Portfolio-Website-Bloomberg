import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TerminalProvider } from './context/TerminalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TerminalProvider>
      <App />
    </TerminalProvider>
  </React.StrictMode>,
)

