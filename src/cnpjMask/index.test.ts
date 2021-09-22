import { cnpjMask } from '.'

describe('cnpjMask', () => {
  it('should format CNPJ with mask', () => {
    expect(cnpjMask('')).toBe('')
    expect(cnpjMask('1')).toBe('1')
    expect(cnpjMask('12')).toBe('12')
    expect(cnpjMask('123')).toBe('12.3')
    expect(cnpjMask('1234')).toBe('12.34')
    expect(cnpjMask('12345')).toBe('12.345')
    expect(cnpjMask('123456')).toBe('12.345.6')
    expect(cnpjMask('1234567')).toBe('12.345.67')
    expect(cnpjMask('12345678')).toBe('12.345.678')
    expect(cnpjMask('123456789')).toBe('12.345.678/9')
    expect(cnpjMask('1234567890')).toBe('12.345.678/90')
    expect(cnpjMask('12345678900')).toBe('12.345.678/900')
    expect(cnpjMask('123456789000')).toBe('12.345.678/9000')
    expect(cnpjMask('1234567890000')).toBe('12.345.678/9000-0')
    expect(cnpjMask('12345678900000')).toBe('12.345.678/9000-00')
  })

  it('should NOT add digits after the CNPJ reaches 14 characters', () => {
    expect(cnpjMask('1234567890000012312312')).toBe('12.345.678/9000-00')
  })
})
