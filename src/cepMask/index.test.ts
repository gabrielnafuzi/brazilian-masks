import { cepMask } from '.'

describe('cepMask', () => {
  it('should format CEP with mask', () => {
    expect(cepMask('')).toBe('')
    expect(cepMask('1')).toBe('1')
    expect(cepMask('12')).toBe('12')
    expect(cepMask('123')).toBe('123')
    expect(cepMask('1234')).toBe('1234')
    expect(cepMask('12345')).toBe('12345')
    expect(cepMask('123456')).toBe('12345-6')
    expect(cepMask('1234567')).toBe('12345-67')
    expect(cepMask('12345678')).toBe('12345-678')
  })

  it('should NOT add digits after the CEP reaches 8 characters', () => {
    expect(cepMask('123456789')).toBe('12345-678')
  })
})
