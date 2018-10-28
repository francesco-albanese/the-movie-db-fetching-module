import { localifyObjectKeys } from '.'

describe('utils', () => {
  describe('localifyObjectKeys', () => {

    it('returns empty object if no parameter is passed', () => {
      const result = localifyObjectKeys()
      expect(result).toEqual({})
    })

    it('returns empty object if parameter is not an object', () => {
      const result = localifyObjectKeys([{ a: 'b' }])
      expect(result).toEqual({})
    })

    it('returns an object with key en if key not found in validLocales', () => {
      const obj = { 'ch': 'whatever' }
      const result = localifyObjectKeys(obj)
      expect(result).toEqual(expect.objectContaining({
        en: 'whatever'
      }))
    })

    it('returns localified object keys with valid locales', () => {
      const obj = { 'en-GB': 'english', 'it': 'italian' }
      const result = localifyObjectKeys(obj)
      expect(result).toEqual(expect.objectContaining({
        en: 'english',
        it: 'italian'
      }))
    })

  })
})