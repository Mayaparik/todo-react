import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './projects/todoList/App'
import 'bootstrap-icons/font/bootstrap-icons.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
