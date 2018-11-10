import { getMovieImage } from '.'

describe('utils', () => {

  describe('getMovieImage', () => {

    beforeAll(() => {
      process.env.TMDB_IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w1280'
    })

    it('returns null if empty path', () => {
      const result = getMovieImage()
      expect(result).toBeNull()
    })

    it('returns null if path is not a string', () => {
      const result = getMovieImage({ a: 'b' })
      expect(result).toBeNull()
    })

    it('returns transformed path', () => {
      const result = getMovieImage('/abc.jpg')
      expect(result).toContain(`${ process.env.TMDB_IMAGES_BASE_URL }/abc.jpg`)
    })
  })

})