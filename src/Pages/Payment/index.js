import React from 'react'
import { useHistory } from 'react-router-dom'

import Checkout from '../../components/Checkout'
import Button from '../../components/Button'
import Title from '../../components/Title'
import CreditCard from '../../components/CreditCard'

import { useCart } from '../../context/Cart'
import { useCreditCard } from '../../context/CreditCard'

import { Container } from './styles'

const Payment = () => {
  const { cart } = useCart()
  const { formErrors, isFormValidated, setHasSubmitted } = useCreditCard()
  const history = useHistory()

  const handleSubmit = () => {
    setHasSubmitted(true)
    if (isFormValidated()) {
      history.push('/confirmation')
    }
  }

  return (
    <Container>
      <Title>Cartão de Crédito</Title>
      <CreditCard />
      <Checkout cart={cart} />
      <Button
        text="Finalizar o pedido"
        onClick={handleSubmit}
        disabled={Object.keys(formErrors).length > 0}
      />
    </Container>
  )
}

export default Payment
