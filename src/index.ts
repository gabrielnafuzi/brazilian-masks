import { cepMask } from './cepMask'
import { cpfMask } from './cpfMask'
import { cnpjMask } from './cnpjMask'
import { cpfOrCnpjMask } from './cpfOrCnpj'
import { phoneMask } from './phoneMask'

export * from './phoneMask'
export * from './cepMask'
export * from './cnpjMask'
export * from './cpfMask'
export * from './cpfOrCnpj'
export * from './utils'

export type MasksName =
  | 'phoneMask'
  | 'cepMask'
  | 'cnpjMask'
  | 'cpfMask'
  | 'cpfOrCnpjMask'

type Masks = {
  [key in MasksName]: (value: string) => string
}

const masks: Masks = {
  cepMask,
  cpfMask,
  cnpjMask,
  cpfOrCnpjMask,
  phoneMask
}

export default masks
