import { isEmpty } from 'lodash-es'
import { getMovieImage } from '#utils'

export const transformMovieDetailsResponse = (data = {}) => {

  if (isEmpty(data) || data.status_code) {
    //an error occurred or the movieid is not valid
    return {}
  } 
  
  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    release_date,
    runtime,
    title,
    vote_average
  } = data

  const genreNames = genres.map(({ name }) => name)

  const background = isEmpty(backdrop_path)
    ? 'https://via.placeholder.com/1096x617.png?text=No+Image+Available'
    : getMovieImage(backdrop_path)
    
  const poster = isEmpty(poster_path) 
    ? 'https://via.placeholder.com/411x617.png?text=No+Image+Available'
    : getMovieImage(poster_path)

  return {
    background,
    description: overview,
    genres: genreNames,
    poster,
    release_date,
    rating: vote_average,
    runtime,
    title
  }
}