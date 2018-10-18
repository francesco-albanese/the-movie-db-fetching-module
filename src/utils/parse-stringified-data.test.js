import { parseStringifiedData } from './parse-stringified-data'

describe('parseStringifiedData', () => {
  it('returns null when invalid string', () => {
    const result = parseStringifiedData()
    expect(result).toBeNull()
  })

  it('returns a valid JSON object', () => {
    const result = parseStringifiedData('{ "a": "test" }')
    expect(result).toBeDefined()
    expect(expect.objectContaining({ a: 'test' }))
  })

  it('returns data as is if data is not a string', () => {
    const result = parseStringifiedData(7)
    expect(result).toEqual(7)
  })
})