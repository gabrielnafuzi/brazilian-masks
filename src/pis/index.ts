import { clear } from '../utils'

export const pis = (value: string) => {
  return clear(value)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5}\.\d{2})(\d)/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1')
}
