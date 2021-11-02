import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './Styles/Global'
import { CartProvider } from './Context/Cart'

const Strict = () => (
  <StrictMode>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
