import React, { useEffect } from 'react'

import ProductsBox from '../../components/ProductsBox'
import Checkout from '../../components/Checkout'
import Title from '../../components/Title'

import { useCart } from '../../context/Cart'

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
      {cart.items && (
        <>
          <Title>Produtos</Title>
          <ProductsBox products={cart.items} displayPrice={false} useThumbnail={true} />
          <Checkout cart={cart} />
        </>
      )}
    </Container>
  )
}

export default Confirmation
