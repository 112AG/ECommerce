import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <App />
      <ToastContainer />
    </Provider>
)
