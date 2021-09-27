import { cnpj, cpf, clear } from '..'

const CPF_LENGTH = 11

export const cpfOrCnpj = (value: string) => {
  return clear(value).length <= CPF_LENGTH ? cpf(value) : cnpj(value)
}
