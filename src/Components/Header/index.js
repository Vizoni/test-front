import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <Link to="/bag">Sacola</Link>
      <Link to="/payment">Pagamento</Link>
      <Link to="/checkout">Confirmação</Link>
    </Container>
  )
}

export default Header