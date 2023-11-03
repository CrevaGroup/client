import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'tw-elements';
import store from './Redux/Store/index.js'
import { Provider } from 'react-redux'
import axios from 'axios'

axios.defaults.baseURL = 'https://server-lovat-nu.vercel.app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
