import { cep } from '.'

describe('cep', () => {
  it('should format CEP with mask', () => {
    expect(cep('')).toBe('')
    expect(cep('1')).toBe('1')
    expect(cep('12')).toBe('12')
    expect(cep('123')).toBe('123')
    expect(cep('1234')).toBe('1234')
    expect(cep('12345')).toBe('12345')
    expect(cep('123456')).toBe('12345-6')
    expect(cep('1234567')).toBe('12345-67')
    expect(cep('12345678')).toBe('12345-678')
  })

  it('should NOT add digits after the CEP reaches 8 characters', () => {
    expect(cep('123456789')).toBe('12345-678')
  })
})
