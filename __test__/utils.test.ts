import { genKey } from '../src'

describe('Utility Test', () => {
  it('Should return a 32 characters key ', () => {
    expect(genKey().length).toBe(32)
  })

  it('Should have different value', () => {
    const key1 = genKey()
    const key2 = genKey()
    expect(key1).not.toBe(key2)
  })
})
