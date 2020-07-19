import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)

serviceWorker.register()
