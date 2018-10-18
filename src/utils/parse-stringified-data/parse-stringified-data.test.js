import { parseStringifiedData } from '.'

describe('utils', () => {
  describe('parseStringifiedData', () => {
    it('returns a valid JSON object', () => {
      const result = parseStringifiedData('{ "a": "test" }')
      expect(result).toBeDefined()
      expect(result).toEqual(expect.objectContaining({ a: 'test' }))
    })
  
    it('returns data as is if data is not a string', () => {
      const result = parseStringifiedData(7)
      expect(result).toEqual(7)
    })
  })
})