import React, { useEffect } from 'react'

import { Container, Item, CardDetails } from './styles'

const CreditCard = () => {
  return (
    <Container>
      <Item>
        <span>Número do cartão:</span>
        <input type="text" />
      </Item>
      <Item>
        <span>Nome do Titular:</span>
        <input type="text" placeholder="Como no cartão" />
      </Item>
      <CardDetails>
        <Item>
          <span>Validade (mês/ano):</span>
          <input type="text" />
        </Item>
        <Item>
          <span>CVV:</span>
          <input type="text" />
        </Item>
      </CardDetails>
    </Container>
  )
}

export default CreditCard
