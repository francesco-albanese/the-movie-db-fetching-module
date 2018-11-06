import { tmdbClient, urls } from '#tmdb/tmdb.const'
import { transformAllMoviesResponse } from '#transformation'

import { parseStringifiedData } from '#utils'

export const getMoviesByQuery = async(language, query) => {
  
  try {
    const data  = await tmdbClient.get(urls.search, {
      params: {
        include_adult: false,
        language,
        query
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