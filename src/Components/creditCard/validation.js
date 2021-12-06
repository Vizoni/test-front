import * as yup from 'yup'

const cvvRegex = /\d{3}/
const creditCardRegex = /^\d{4}.\d{4}.\d{4}.\d{4}/
const dateRegex = /^((0[1-9])|(1[0-2]))\/(20[1-2][0-9])$/

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Campo obrigatório')
    .matches(creditCardRegex, 'Cartão inválido'),
  cardHolderName: yup.string().required('Campo obrigatório'),
  validity: yup.string().required('Campo obrigatório').matches(dateRegex, 'Data inválida'),
  cvv: yup
    .string()
    .required('Campo obrigatório')
    .matches(cvvRegex, 'O código é uma sequência de 3 números')
    .length(3, 'O código deve conter apenas 3 números')
})

export default schema
