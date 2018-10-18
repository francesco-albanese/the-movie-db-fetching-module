import { getFirstObjectKey } from '.'

describe('utils', () => {
  describe('getFirstObjectKey', () => {
    it('returns first key of an object', () => {
      const result = getFirstObjectKey({ a: 'a', b: 'b' })
      expect(result).toEqual('a')
    })

    it('returns undefined if array is given instead of object', () => {
      const result = getFirstObjectKey([ 'a' ])
      expect(result).toBeUndefined()
    })
  })
})