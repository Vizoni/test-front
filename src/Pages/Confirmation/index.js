import React, { useEffect } from 'react'

import ProductsBox from '../../Components/ProductsBox'
import Checkout from '../../Components/Checkout'
import Button from '../../Components/button'
import Title from '../../Components/Title'

import { Container } from './styles'

const Confirmation = () => {
  useEffect(() => {
    console.log('Entrou na Confirmation')
  }, [])

  return (
    <Container>
      <Title>Pagamento</Title>
      <Title>Produtos</Title>
      <ProductsBox products={[]}></ProductsBox>
      <Checkout cart={{}} />
    </Container>
  )
}

export default Confirmation
