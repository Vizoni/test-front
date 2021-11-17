import React from 'react'

import { Container } from './styles'

const Button = ({ text, onClick, disabled }) => {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {text}
    </Container>
  )
}

export default Button
