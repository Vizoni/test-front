import React, { useEffect } from 'react'

import { Container, Item } from './styles'

const ProductsBox = ({ products }) => {
  return (
    <Container>
      {products &&
        products.map((product) => {
          return (
            <Item>
              <img src={product.product.imageObjects[0].thumbnail} />
              <span className="text">{product.product.name}</span>
              <span className="price">R$ {product.product.priceSpecification.price}</span>
            </Item>
          )
        })}
    </Container>
  )
}

export default ProductsBox
