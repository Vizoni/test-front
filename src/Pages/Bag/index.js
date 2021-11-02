import React, { useEffect } from 'react'

import Title from '../../Components/Title'
import ProductsBox from '../../Components/ProductsBox'
import { useCart } from '../../Context/Cart'

import { Container } from './styles'

const Bag = () => {
  const { cart, getCartInfo } = useCart()

  useEffect(() => {
    const getData = async () => {
      getCartInfo()
    }
    getData()
  }, [])

  return (
    <Container>
      <Title>Produtos</Title>
      <ProductsBox products={cart.items}></ProductsBox>
    </Container>
  )
}

export default Bag
