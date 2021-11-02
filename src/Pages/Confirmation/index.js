import React, { useEffect } from 'react'

import Title from '../../Components/Title'

import { Container } from './styles'

const Confirmation = () => {
  useEffect(() => {
    console.log('Entrou na Confirmation')
  }, [])

  return (
    <Container>
      <Title>Confirmation</Title>
    </Container>
  )
}

export default Confirmation
