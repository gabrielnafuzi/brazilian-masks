import { cnpjMask, cpfMask, clear } from '..'

const CPF_LENGTH = 11

export const cpfOrCnpjMask = (value: string) => {
  return clear(value).length <= CPF_LENGTH ? cpfMask(value) : cnpjMask(value)
}
