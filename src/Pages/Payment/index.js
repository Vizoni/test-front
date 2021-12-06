import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Checkout from '../../components/Checkout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import CreditCard from '../../components/CreditCard'

import { useCart } from '../../context/Cart'

import { Container } from './styles'

const Payment = () => {
  const { cart } = useCart()
  const history = useHistory()
  const [isFormPristine, setIsFormPristine] = useState(true)

  const submitForm = (data, event) => {
    event.preventDefault()
    history.push('/confirmation')
  }

  return (
    <Container>
      <Title>Cartão de Crédito</Title>
      <CreditCard submitCreditCardForm={submitForm} setIsFormPristine={setIsFormPristine} />
      <Checkout cart={cart} />
      <Button
        text="Finalizar o pedido"
        type="submit"
        form="credit-card-form"
        disabled={isFormPristine}
      />
    </Container>
  )
}

export default Payment
