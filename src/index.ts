import { cep } from './cep'
import { cpf } from './cpf'
import { cnpj } from './cnpj'
import { cpfOrCnpj } from './cpfOrCnpj'
import { phone } from './phone'
import { pis } from './pis'

export * from './phone'
export * from './cep'
export * from './cnpj'
export * from './cpf'
export * from './cpfOrCnpj'
export * from './pis'
export * from './utils'

export type MasksName = 'phone' | 'cep' | 'cnpj' | 'cpf' | 'cpfOrCnpj' | 'pis'

type Masks = {
  [key in MasksName]: (value: string) => string
}

const masks: Masks = {
  cep,
  cpf,
  cnpj,
  cpfOrCnpj,
  phone,
  pis
}

export default masks
