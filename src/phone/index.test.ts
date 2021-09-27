import { phone } from '.'

describe('phone', () => {
  it('should format phone with mask', () => {
    expect(phone('')).toBe('')
    expect(phone('1')).toBe('(1')
    expect(phone('12')).toBe('(12')
    expect(phone('123')).toBe('(12) 3')
    expect(phone('1234')).toBe('(12) 34')
    expect(phone('12345')).toBe('(12) 345')
    expect(phone('123456')).toBe('(12) 3456')
    expect(phone('1234567')).toBe('(12) 3456-7')
    expect(phone('12345678')).toBe('(12) 3456-78')
    expect(phone('123456789')).toBe('(12) 3456-789')
    expect(phone('1234567890')).toBe('(12) 3456-7890')
    expect(phone('12345678901')).toBe('(12) 34567-8901')
  })

  it('should NOT add digits after the phone reaches 11 characters', () => {
    expect(phone('123456789012')).toBe('(12) 34567-8901')
  })
})
