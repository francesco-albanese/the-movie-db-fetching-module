import { transformAllGenresResponse } from './genres.transform'
import * as Fixtures from './__fixtures__/genres.transform.fixtures'

describe('transformAllGenresResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformAllGenresResponse()).toEqual([])
  })

  it('returns transformed genres', () => {
    const result = transformAllGenresResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})