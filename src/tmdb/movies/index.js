import { tmdbClient, urls } from '#tmdb/tmdb.const'
import { transformAllMoviesResponse, transformMovieDetailsResponse } from '#transformation'

import { parseStringifiedData } from '#utils'

export const getMovies = async(category, language) => {
  
  try {
    const { data }  = await tmdbClient.get(urls[ category ], {
      params: {
        language
      },
      transformResponse: [
        data => parseStringifiedData(data),
        ({ results }) => transformAllMoviesResponse(results)
      ]
    })

    return data
  }

  catch (e) {
    throw e
  }
}

export const getMovieById = async(movie_id, language) => {
  
  try {
    const { data }  = await tmdbClient.get(urls.movie(movie_id), {
      params: {
        language
      },
      transformResponse: [
        data => parseStringifiedData(data),
        data => transformMovieDetailsResponse(data)
      ]
    })

    return data
  }

  catch (e) {
    throw e
  }
}