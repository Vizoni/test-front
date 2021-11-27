import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Title from '../../Components/Title'
import ProductsBox from '../../Components/ProductsBox'
import Checkout from '../../Components/Checkout'
import Button from '../../Components/Button'

import { useCart } from '../../Context/Cart'

import { Container } from './styles'

const Bag = () => {
  const { cart, getCartInfo } = useCart()
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      getCartInfo()
    }
    getData()
  }, [])

  return (
    <Container>
      {cart.items && (
        <>
          <Title>Produtos</Title>
          <ProductsBox products={cart.items} />
          <Checkout cart={cart} />
        </>
      )}
      <Button text="Seguir para o pagamento" onClick={() => history.push('/payment')} />
    </Container>
  )
}

export default Bag
