import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ProductBox from './index'

let props = {
  products: [
    {
      quantity: 5,
      product: {
        imageObjects: [
          {
            small: 'imageSmall1',
            thumbnail: 'imageThumbnail1'
          }
        ],
        name: 'Teste prod 1',
        sku: '000001',
        priceSpecification: {
          price: '49'
        }
      }
    },
    {
      quantity: 2,
      product: {
        imageObjects: [
          {
            small: 'imageSmall2',
            thumbnail: 'imageThumbnail2'
          }
        ],
        name: 'Teste prod 2',
        sku: '000002',
        priceSpecification: {
          price: '5000'
        }
      }
    }
  ],
  displayPrice: true,
  useThumbnail: false
}

describe('<ProductBox/>', () => {
  it('Should render ProductBox Component', () => {
    render(<ProductBox {...props} />)
    const mainDiv = screen.getByTestId('product-box-component')
    expect(mainDiv).toBeInTheDocument()
  })

  it('Should display two products', () => {
    render(<ProductBox {...props} />)
    const items = screen.getAllByTestId('product-item')
    expect(items.length).toBe(2)
  })

  it('Should display the price transformed to Real (prefix R$)', () => {
    render(<ProductBox {...props} />)
    const priceElements = screen.getAllByTestId('price')
    expect(priceElements[0]).toHaveTextContent(`R$ 49,00`)
    expect(priceElements[1]).toHaveTextContent(`R$ 5.000,00`)
  })

  it('Should use the small image instead of thumbnail', () => {
    render(<ProductBox {...props} />)
    const image = screen.getAllByTestId('product-image')
    expect(image[0]).toHaveAttribute('src', props.products[0].product.imageObjects.small)
    expect(image[1]).toHaveAttribute('src', props.products[1].product.imageObjects.small)
  })

  it('Should use the thumbnail image', () => {
    props.useThumbnail = true
    render(<ProductBox {...props} />)
    const image = screen.getAllByTestId('product-image')
    expect(image[0]).toHaveAttribute('src', props.products[0].product.imageObjects.thumbnail)
    expect(image[1]).toHaveAttribute('src', props.products[1].product.imageObjects.thumbnail)
  })
})
