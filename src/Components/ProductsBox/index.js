import React from 'react'

import { transformToReal } from './../../utils/currency'

import { Container, Item } from './styles'

const ProductsBox = ({ products }) => {
  return (
    <Container>
      {products &&
        products.map((product, index) => {
          return (
            <Item key={index}>
              <img src={product.product.imageObjects[0].small} />
              <div>
                <span className="text">{product.product.name}</span>
                <span className="price">
                  {transformToReal(product.product.priceSpecification.price)}
                </span>
              </div>
            </Item>
          )
        })}
    </Container>
  )
}

export default ProductsBox
