// main.jsx — Vite/React entry point
// This file mounts the root React component (<App />) into
// the #root div defined in index.html.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'   // Global styles + Tailwind directives

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode runs extra checks in development (no effect in production)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
