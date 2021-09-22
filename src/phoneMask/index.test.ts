import { phoneMask } from '.'

describe('phoneMask', () => {
  it('should format phone with mask', () => {
    expect(phoneMask('')).toBe('')
    expect(phoneMask('1')).toBe('(1')
    expect(phoneMask('12')).toBe('(12')
    expect(phoneMask('123')).toBe('(12) 3')
    expect(phoneMask('1234')).toBe('(12) 34')
    expect(phoneMask('12345')).toBe('(12) 345')
    expect(phoneMask('123456')).toBe('(12) 3456')
    expect(phoneMask('1234567')).toBe('(12) 3456-7')
    expect(phoneMask('12345678')).toBe('(12) 3456-78')
    expect(phoneMask('123456789')).toBe('(12) 3456-789')
    expect(phoneMask('1234567890')).toBe('(12) 3456-7890')
    expect(phoneMask('12345678901')).toBe('(12) 34567-8901')
  })

  it('should NOT add digits after the phone reaches 11 characters', () => {
    expect(phoneMask('123456789012')).toBe('(12) 34567-8901')
  })
})
