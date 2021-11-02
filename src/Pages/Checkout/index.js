import React, { useEffect } from 'react'

import Title from '../../Components/Title'

import { Container } from './styles'

const Checkout = () => {
  useEffect(() => {
    console.log('Entrou na Checkout')
  }, [])

  return (
    <Container>
      <Title>checkout</Title>
    </Container>
  )
}

export default Checkout
