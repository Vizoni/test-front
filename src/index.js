import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './styles/Global'
import { CartProvider } from './context/Cart'

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
