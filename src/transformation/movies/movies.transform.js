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
      overview,
      poster_path,
      title,
      vote_average 
    } = movie

    return {
      genre_ids,
      id,
      description: `${ overview.substring(0, 100) }...`,
      image: getMovieImage(poster_path),
      title,
      vote_average
    }

  })
}