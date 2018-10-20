import { transformLayoutResponse } from './layout.transform'
import * as Fixtures from './__fixtures__/layout.transform.fixtures'

describe('transformLayoutResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformLayoutResponse()).toEqual([])
  })

  it('returns transformed layout', () => {
    const result = transformLayoutResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})