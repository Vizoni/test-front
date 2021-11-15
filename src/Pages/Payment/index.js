import React, { useEffect } from 'react'

import Checkout from '../../Components/Checkout'
import Button from '../../Components/button'
import Title from '../../Components/Title'
import CreditCard from '../../Components/creditCard'

import { useCart } from '../../Context/Cart'

import { Container } from './styles'

const Payment = () => {
  const { cart, getCartInfo } = useCart()

  useEffect(() => {
    const getData = async () => {
      getCartInfo()
    }
    getData()
  }, [])

  return (
    <Container>
      <Title>Cartão de Crédito</Title>
      <CreditCard />
      <Checkout cart={cart} />
      <Button text="Finalizar o pedido" />
    </Container>
  )
}

export default Payment
