import React, { useEffect } from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Item, CardDetails } from './styles'
import schema from './validation'

const CreditCard = ({ submitCreditCardForm, setIsFormPristine }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    setIsFormPristine(!isDirty)
  }, [isDirty])

  return (
    <Container>
      <form onSubmit={handleSubmit(submitCreditCardForm)} id="credit-card-form">
        <Item>
          <span>Número do cartão:</span>
          <InputMask
            mask="9999.9999.9999.9999"
            placeholder="____.____.____.____"
            className={errors.cardNumber ? 'error' : ''}
            type="text"
            name="cardNumber"
            {...register('cardNumber')}
          />
          <p>{errors.cardNumber?.message}</p>
        </Item>
        <Item>
          <span>Nome do Titular:</span>
          <input
            placeholder="Como no cartão"
            className={errors.cardHolderName ? 'error' : ''}
            type="text"
            name="cardHolderName"
            {...register('cardHolderName')}
          />
          <p>{errors.cardHolderName?.message}</p>
        </Item>
        <CardDetails>
          <Item>
            <span>Validade (mês/ano):</span>
            <InputMask
              mask="99/9999"
              placeholder="__/____"
              className={errors.validity ? 'error' : ''}
              type="text"
              name="validity"
              {...register('validity')}
            />
            <p>{errors.validity?.message}</p>
          </Item>
          <Item>
            <span>CVV:</span>
            <InputMask
              mask="999"
              placeholder="___"
              className={errors.cvv ? 'error' : ''}
              type="text"
              name="cvv"
              {...register('cvv')}
            />
            <p>{errors.cvv?.message}</p>
          </Item>
        </CardDetails>
      </form>
    </Container>
  )
}

export default CreditCard
