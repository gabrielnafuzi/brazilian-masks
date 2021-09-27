import { pis } from '.'

describe('pis', () => {
  it('should fomart PIS with mask', () => {
    expect(pis('')).toBe('')
    expect(pis('0')).toBe('0')
    expect(pis('01')).toBe('01')
    expect(pis('012')).toBe('012')
    expect(pis('0123')).toBe('012.3')
    expect(pis('01234')).toBe('012.34')
    expect(pis('012345')).toBe('012.345')
    expect(pis('0123456')).toBe('012.3456')
    expect(pis('01234567')).toBe('012.34567')
    expect(pis('012345678')).toBe('012.34567.8')
    expect(pis('0123456789')).toBe('012.34567.89')
    expect(pis('01234567890')).toBe('012.34567.89-0')

    expect(pis('012.34567.89-0')).toBe('012.34567.89-0')
  })

  it('should NOT add digits after the phone reaches 11 characters', () => {
    expect(pis('0123456789001231231231')).toBe('012.34567.89-0')
  })
})
