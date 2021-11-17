import React, { useState } from 'react'

export const CreditCardContext = React.createContext({})

export const CreditCardProvider = ({ children }) => {
  const [creditCardFormValues, setCreditCardFormValues] = useState({
    cardNumber: '',
    cardHolderName: '',
    validity: '',
    cvv: ''
  })

  const [formErrors, setFormErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedValue = { ...creditCardFormValues, [name]: value }
    setCreditCardFormValues(updatedValue)
    if (hasSubmitted) {
      setFormErrors(validateForm(updatedValue))
    }
  }

  const isFormValidated = () => {
    const hasError = validateForm(creditCardFormValues)
    setFormErrors(hasError)
    return Object.keys(hasError).length > 0 ? false : true
  }

  const validateForm = (fields) => {
    const errors = {}
    const cvvRegex = /\d{3}/
    const creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}/
    const dateRegex = /^((0[1-9])|(1[0-2]))\/(20[1-2][0-9])$/
    if (!fields.cardNumber) {
      errors.cardNumber = 'Campo Número do cartão de crédito é obrigatório.'
    } else if (!creditCardRegex.test(fields.cardNumber)) {
      errors.cardNumber = 'Número do cartão inválido.'
    }
    if (!fields.cardHolderName) {
      errors.cardHolderName = 'Campo Nome do Titular é obrigatório.'
    }
    if (!fields.validity) {
      errors.validity = 'Campo Data de validade do cartão é obrigatório.'
    } else if (!dateRegex.test(fields.validity)) {
      errors.validity = 'Data inválida.'
    }
    if (!fields.cvv) {
      errors.cvv = 'Campo Código de segurança do cartão (CVV) é obrigatório.'
    } else if (!cvvRegex.test(fields.cvv)) {
      errors.cvv = 'Código de segurança deve ser uma sequência de 3 números'
    }
    return errors
  }

  return (
    <CreditCardContext.Provider
      value={{ creditCardFormValues, formErrors, handleChange, isFormValidated, setHasSubmitted }}
    >
      {children}
    </CreditCardContext.Provider>
  )
}

export const useCreditCard = () => React.useContext(CreditCardContext)
