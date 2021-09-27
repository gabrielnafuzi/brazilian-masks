import { clear } from '../utils'

export const cep = (value: string) => {
  return clear(value)
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}
