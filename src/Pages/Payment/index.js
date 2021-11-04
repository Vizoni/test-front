import React, { useEffect } from 'react'

import ProductsBox from '../../Components/ProductsBox'
import Checkout from '../../Components/Checkout'
import Button from '../../Components/button'
import Title from '../../Components/Title'

import { Container } from './styles'

const Payment = () => {
  useEffect(() => {
    console.log('Entrou na Payment')
  }, [])

  return (
    <Container>
      <Title>Cartão de Crédito</Title>
      <ProductsBox products={[]}></ProductsBox>
      <Checkout cart={{}} />
      <Button text="Finalizar o pedido" />
    </Container>
  )
}

export default Payment
