import { cep } from './cep'
import { cpf } from './cpf'
import { cnpj } from './cnpj'
import { cpfOrCnpj } from './cpfOrCnpj'
import { phone } from './phone'

export * from './phone'
export * from './cep'
export * from './cnpj'
export * from './cpf'
export * from './cpfOrCnpj'
export * from './utils'

export type MasksName = 'phone' | 'cep' | 'cnpj' | 'cpf' | 'cpfOrCnpj'

type Masks = {
  [key in MasksName]: (value: string) => string
}

const masks: Masks = {
  cep,
  cpf,
  cnpj,
  cpfOrCnpj,
  phone
}

export default masks
