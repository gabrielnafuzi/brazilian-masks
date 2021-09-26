import { clear } from 'utils'

export const phoneMask = (phone: string) => {
  const onlyPhoneNumbers = clear(phone)
  const isPhoneLengthHigherThanTen = onlyPhoneNumbers.length > 10
  const quantityOfCharsOnLeftSideOfDash = isPhoneLengthHigherThanTen ? 5 : 4
  const regexToSeparateByDash = new RegExp(
    `(\\d{${quantityOfCharsOnLeftSideOfDash}})(\\d)`
  )

  return onlyPhoneNumbers
    .replace(/(\d)/, '($1')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(regexToSeparateByDash, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}
