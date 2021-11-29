import React from 'react'

import { transformToReal } from '../../Utils/Currency'

import { Container, Item } from './styles'

const ProductsBox = ({ products, displayPrice = true, useThumbnail = false }) => {
  const getImageSize = (productImageList) => {
    return useThumbnail ? productImageList.thumbnail : productImageList.small
  }

  return (
    <Container data-testId="product-box-component">
      {products &&
        products.map((product, index) => {
          return (
            <Item key={index} data-testId="product-item">
              <img
                src={getImageSize(product.product.imageObjects[0])}
                data-testId="product-image"
              />
              <div>
                <span className="text">{product.product.name}</span>
                {displayPrice && (
                  <span className="price" data-testId="price">
                    {transformToReal(product.product.priceSpecification.price)}
                  </span>
                )}
              </div>
            </Item>
          )
        })}
    </Container>
  )
}

export default ProductsBox
