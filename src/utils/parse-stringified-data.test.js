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
})