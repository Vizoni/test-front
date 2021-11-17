import React from 'react'
import MaskedField from 'react-masked-field'

import { Container, Item, CardDetails } from './styles'
import { useCreditCard } from '../../Context/CreditCard'

const CreditCard = () => {
  const { creditCardFormValues, formErrors, handleChange } = useCreditCard()

  return (
    <Container>
      <form>
        <Item>
          <span>Número do cartão:</span>
          <MaskedField
            mask="9999-9999-9999-9999"
            placeholder="____.____.____.____"
            className={formErrors.cardNumber ? 'error' : ''}
            onChange={handleChange}
            value={creditCardFormValues.cardNumber}
            type="text"
            name="cardNumber"
          />
          <p>{formErrors.cardNumber}</p>
        </Item>
        <Item>
          <span>Nome do Titular:</span>
          <input
            type="text"
            placeholder="Como no cartão"
            name="cardHolderName"
            value={creditCardFormValues.cardHolderName}
            onChange={handleChange}
            className={formErrors.cardHolderName ? 'error' : ''}
          />
          <p>{formErrors.cardHolderName}</p>
        </Item>
        <CardDetails>
          <Item>
            <span>Validade (mês/ano):</span>
            <MaskedField
              mask="99/9999"
              placeholder="__/____"
              className={formErrors.validity ? 'error' : ''}
              onChange={handleChange}
              value={creditCardFormValues.validity}
              type="text"
              name="validity"
            />
            <p>{formErrors.validity}</p>
          </Item>
          <Item>
            <span>CVV:</span>
            <MaskedField
              mask="999"
              placeholder="___"
              className={formErrors.cvv ? 'error' : ''}
              onChange={handleChange}
              value={creditCardFormValues.cvv}
              type="text"
              name="cvv"
            />
            <p>{formErrors.cvv}</p>
          </Item>
        </CardDetails>
      </form>
    </Container>
  )
}

export default CreditCard
