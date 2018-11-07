import { isEmpty } from 'lodash-es'
import { getMovieImage } from '#utils'

export const transformAllMoviesResponse = (data = []) => {

  if (isEmpty(data)) {
    return []
  } 
  
  return data.map(movie => {

    const { 
      genre_ids,
      id,
      poster_path,
      title
    } = movie

    return {
      genre_ids,
      id,
      image: getMovieImage(poster_path),
      title
    }

  })
}