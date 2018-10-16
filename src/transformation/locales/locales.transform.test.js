import { transformLocaleResponse } from './locales.transform'
import * as Fixtures from './__fixtures__/locales.transform.fixtures'

describe('transformLocaleResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformLocaleResponse()).toEqual([])
  })

  it('returns transformed locales', () => {
    const result = transformLocaleResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})