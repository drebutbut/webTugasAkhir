import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
