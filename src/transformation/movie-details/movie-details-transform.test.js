import { transformMovieDetailsResponse } from './movie-details-transform'
import * as Fixtures from './__fixtures__/movie-details.transform.fixtures'

describe('transformMovieDetailsResponse', () => {
  it('returns an empty object if data is missing', () => {
    expect(transformMovieDetailsResponse()).toEqual({})
  })

  it('returns a transformed movie', () => {
    const result = transformMovieDetailsResponse(Fixtures.data)
    expect(result).toMatchSnapshot()
  })
})