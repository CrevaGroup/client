import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/Store/index.js'
import { Provider } from 'react-redux'
import axios from 'axios'
const VITE_URL_SERVER = import.meta.env.VITE_URL_SERVER;

axios.defaults.baseURL = VITE_URL_SERVER

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
