import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './index.scss'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
)
