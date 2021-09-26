import { clear } from '.'

describe('clear', () => {
  it('should return only digits', () => {
    expect(clear('a1b2c3')).toBe('123')
    expect(clear(' !"#$%&()*+,-./:;<=>?@[\\]^_`{|}~')).toBe('')
    expect(clear('123456789asd')).toBe('123456789')
    expect(clear('123')).toBe('123')
  })
})
