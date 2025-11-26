import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TerminalProvider } from './context/TerminalContext.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

console.log('Terminal booting...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <TerminalProvider>
        <App />
      </TerminalProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)

