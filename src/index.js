import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './styles/Global'
import { CartProvider } from './context/Cart'
import { CreditCardProvider } from './context/CreditCard'

const Strict = () => (
  <StrictMode>
    <CartProvider>
      <CreditCardProvider>
        <GlobalStyle />
        <App />
      </CreditCardProvider>
    </CartProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
