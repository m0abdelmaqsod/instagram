import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Pages_Router from './pages/Pages_Router';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages_Router />
  </React.StrictMode>,
)
