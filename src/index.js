import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './Styles/Global'
import { CartProvider } from './Context/Cart'
import { CreditCardProvider } from './Context/CreditCard'

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
