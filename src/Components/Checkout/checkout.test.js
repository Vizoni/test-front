import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Checkout from './index'

let props = {
  cart: {
    subTotal: 500,
    shippingTotal: 15,
    discount: 35
  }
}

describe('<Checkout/>', () => {
  it('Should render Checkout Component', () => {
    render(<Checkout {...props} />)
    const mainDiv = screen.getByTestId('checkout-component')
    expect(mainDiv).toBeInTheDocument()
  })

  it('Should calculate total', () => {
    const getTotal = jest
      .fn()
      .mockImplementation(
        () => props.cart.subTotal + props.cart.shippingTotal - props.cart.discount
      )
    expect(getTotal()).toBe(480)
  })

  it('Should display with the correct format (prefix R$)', () => {
    render(<Checkout {...props} />)
    const discountText = screen.getByTestId('discount-span')
    expect(discountText).toHaveTextContent(`- R$ ${props.cart.discount}`)
  })
})
