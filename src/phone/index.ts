import { clear } from '../utils'

export const phone = (phone: string) => {
  return clear(phone)
    .replace(/(\d)/, '($1')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(\d{4})\d+?$/, '$1')
}
