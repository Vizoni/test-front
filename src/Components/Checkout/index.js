import React, { useEffect } from 'react'

import { transformToReal } from '../../Utils/Currency'

import { Container } from './styles'

const Checkout = ({ cart }) => {
  const getTotal = () => {
    return cart.subTotal + cart.shippingTotal - cart.discount
  }

  return (
    <Container data-testId="checkout-component">
      <div>
        <span>Produtos</span>
        <span>{transformToReal(cart.subTotal)}</span>
      </div>
      <div>
        <span>Frete</span>
        <span>{transformToReal(cart.shippingTotal)}</span>
      </div>
      <div>
        <span>Desconto</span>
        <span data-testId="discount-span">- {transformToReal(cart.discount)}</span>
      </div>
      <div>
        <span>Total</span>
        <span>{transformToReal(getTotal())}</span>
      </div>
    </Container>
  )
}

export default Checkout
