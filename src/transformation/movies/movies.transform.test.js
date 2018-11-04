import { transformAllMoviesResponse } from './movies.transform'
import * as Fixtures from './__fixtures__/movies.transform.fixtures'

describe('transformAllMoviesResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformAllMoviesResponse()).toEqual([])
  })

  it('returns transformed movies', () => {
    const result = transformAllMoviesResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})