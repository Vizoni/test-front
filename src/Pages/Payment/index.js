import React from 'react'
import { useHistory } from 'react-router-dom'

import Checkout from '../../Components/Checkout'
import Button from '../../Components/button'
import Title from '../../Components/Title'
import CreditCard from '../../Components/creditCard'

import { useCart } from '../../Context/Cart'
import { useCreditCard } from '../../Context/CreditCard'

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
