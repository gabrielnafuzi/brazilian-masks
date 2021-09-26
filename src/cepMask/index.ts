import { clear } from 'utils'

export const cepMask = (cep: string) => {
  return clear(cep)
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}
