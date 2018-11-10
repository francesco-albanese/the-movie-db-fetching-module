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

    const image = isEmpty(poster_path) 
      ? 'https://via.placeholder.com/411x617.png?text=No+Image+Available'
      : getMovieImage(poster_path)

    return {
      genre_ids,
      id,
      image,
      title
    }

  })
}