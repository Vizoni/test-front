import React, { useEffect } from 'react'

import ProductsBox from '../../Components/ProductsBox'
import Checkout from '../../Components/Checkout'
import Title from '../../Components/Title'

import { useCart } from '../../Context/Cart'

import { Container, Box, SuccessMessage } from './styles'

import { mdiCheckCircleOutline } from '@mdi/js'
import Icon from '@mdi/react'

const Confirmation = () => {
  const { cart, getCartInfo } = useCart()

  useEffect(() => {
    const getData = async () => {
      getCartInfo()
    }
    getData()
  }, [])

  return (
    <Container>
      <SuccessMessage>
        <Icon path={mdiCheckCircleOutline} title="User Profile" size={2} color="#FF7800" />
        <span>Compra efetuada com sucesso</span>
      </SuccessMessage>
      <Title>Pagamento</Title>
      <Box>
        <span>****.****.****.1234</span>
        <span>JOSÉ DA SILVA</span>
        <span>05/2019</span>
      </Box>
      <Title>Produtos</Title>
      <ProductsBox products={cart.items} displayPrice={false} useThumbnail={true}></ProductsBox>
      <Checkout cart={cart} />
    </Container>
  )
}

export default Confirmation
