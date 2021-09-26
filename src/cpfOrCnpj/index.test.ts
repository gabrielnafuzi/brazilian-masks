import { cpfOrCnpjMask } from '.'

describe('cpfOrCnpjMask', () => {
  it('should return value as CPF mask if length is <= 11', () => {
    expect(cpfOrCnpjMask('1234')).toBe('123.4')
    expect(cpfOrCnpjMask('12345')).toBe('123.45')
    expect(cpfOrCnpjMask('123456')).toBe('123.456')
    expect(cpfOrCnpjMask('1234567')).toBe('123.456.7')
    expect(cpfOrCnpjMask('12345678')).toBe('123.456.78')
    expect(cpfOrCnpjMask('123456789')).toBe('123.456.789')
    expect(cpfOrCnpjMask('1234567890')).toBe('123.456.789-0')
    expect(cpfOrCnpjMask('12345678900')).toBe('123.456.789-00')
    expect(cpfOrCnpjMask('123456789000')).not.toBe('123.456.789-00')

    expect(cpfOrCnpjMask('123.4')).toBe('123.4')
    expect(cpfOrCnpjMask('123.45')).toBe('123.45')
    expect(cpfOrCnpjMask('123.456')).toBe('123.456')
    expect(cpfOrCnpjMask('123.456.789-00')).toBe('123.456.789-00')
  })

  it('should return value as CNPJ mask if length if > 11', () => {
    expect(cpfOrCnpjMask('123456789000')).toBe('12.345.678/9000')
    expect(cpfOrCnpjMask('1234567890000')).toBe('12.345.678/9000-0')
    expect(cpfOrCnpjMask('12345678900000')).toBe('12.345.678/9000-00')

    expect(cpfOrCnpjMask('12.345.678/9000-00')).toBe('12.345.678/9000-00')
    expect(cpfOrCnpjMask('123456789000')).not.toBe('123.456.789-00')
  })
})
