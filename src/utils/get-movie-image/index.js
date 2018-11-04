import { isEmpty, isString } from 'lodash-es'

/**
 * 
 * @param {String} path 
 * @returns transformedPath {String}
 */
export const getMovieImage = path => {
  if (isEmpty(path) || !isString(path)) {
    return null
  }

  return `${ process.env.TMDB_IMAGES_BASE_URL }${ path }`
}