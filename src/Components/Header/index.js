import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Container } from './styles'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <Link to="/bag" className={pathname === '/bag' ? 'active' : ''}>
        Sacola
      </Link>
      <Link to="/payment" className={pathname === '/payment' ? 'active' : ''}>
        Pagamento
      </Link>
      <Link to="/confirmation" className={pathname === '/confirmation' ? 'active' : ''}>
        Confirmação
      </Link>
    </Container>
  )
}

export default Header
