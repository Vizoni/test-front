import React from 'react'

import { Container } from './styles'

const Button = ({ text, onClick, disabled, form }) => {
  return (
    <Container onClick={onClick} disabled={disabled} form={form}>
      {text}
    </Container>
  )
}

export default Button
