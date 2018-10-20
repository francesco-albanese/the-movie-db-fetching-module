import { transformPageResponse } from './pages.transform'
import * as Fixtures from './__fixtures__/pages.transform.fixtures'

describe('transformPageResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformPageResponse()).toEqual([])
  })

  it('returns transformed pages', () => {
    const result = transformPageResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})