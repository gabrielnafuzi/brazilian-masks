import { cpfMask } from '.'

describe('cpfMask', () => {
  it('should format CPF with mask', () => {
    expect(cpfMask('')).toBe('')
    expect(cpfMask('1')).toBe('1')
    expect(cpfMask('12')).toBe('12')
    expect(cpfMask('123')).toBe('123')
    expect(cpfMask('1234')).toBe('123.4')
    expect(cpfMask('12345')).toBe('123.45')
    expect(cpfMask('123456')).toBe('123.456')
    expect(cpfMask('1234567')).toBe('123.456.7')
    expect(cpfMask('12345678')).toBe('123.456.78')
    expect(cpfMask('123456789')).toBe('123.456.789')
    expect(cpfMask('1234567890')).toBe('123.456.789-0')
    expect(cpfMask('12345678900')).toBe('123.456.789-00')
  })

  it('should NOT add digits after the phone reaches 11 characters', () => {
    expect(cpfMask('123456789001231231231')).toBe('123.456.789-00')
  })
})
