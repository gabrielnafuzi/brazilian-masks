import { cpf } from '.'

describe('cpf', () => {
  it('should format CPF with mask', () => {
    expect(cpf('')).toBe('')
    expect(cpf('1')).toBe('1')
    expect(cpf('12')).toBe('12')
    expect(cpf('123')).toBe('123')
    expect(cpf('1234')).toBe('123.4')
    expect(cpf('12345')).toBe('123.45')
    expect(cpf('123456')).toBe('123.456')
    expect(cpf('1234567')).toBe('123.456.7')
    expect(cpf('12345678')).toBe('123.456.78')
    expect(cpf('123456789')).toBe('123.456.789')
    expect(cpf('1234567890')).toBe('123.456.789-0')
    expect(cpf('12345678900')).toBe('123.456.789-00')
  })

  it('should NOT add digits after the phone reaches 11 characters', () => {
    expect(cpf('123456789001231231231')).toBe('123.456.789-00')
  })
})
