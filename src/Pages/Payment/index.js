import React, { useEffect } from 'react'

import Title from '../../Components/Title'

import { Container } from './styles'

const Payment = () => {
  useEffect(() => {
    console.log('Entrou na Payment')
  }, [])

  return (
    <Container>
      <Title>PAYMENT</Title>
    </Container>
  )
}

export default Payment
