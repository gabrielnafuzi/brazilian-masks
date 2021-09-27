import { cnpj } from '.'

describe('cnpj', () => {
  it('should format CNPJ with mask', () => {
    expect(cnpj('')).toBe('')
    expect(cnpj('1')).toBe('1')
    expect(cnpj('12')).toBe('12')
    expect(cnpj('123')).toBe('12.3')
    expect(cnpj('1234')).toBe('12.34')
    expect(cnpj('12345')).toBe('12.345')
    expect(cnpj('123456')).toBe('12.345.6')
    expect(cnpj('1234567')).toBe('12.345.67')
    expect(cnpj('12345678')).toBe('12.345.678')
    expect(cnpj('123456789')).toBe('12.345.678/9')
    expect(cnpj('1234567890')).toBe('12.345.678/90')
    expect(cnpj('12345678900')).toBe('12.345.678/900')
    expect(cnpj('123456789000')).toBe('12.345.678/9000')
    expect(cnpj('1234567890000')).toBe('12.345.678/9000-0')
    expect(cnpj('12345678900000')).toBe('12.345.678/9000-00')
  })

  it('should NOT add digits after the CNPJ reaches 14 characters', () => {
    expect(cnpj('1234567890000012312312')).toBe('12.345.678/9000-00')
  })
})
