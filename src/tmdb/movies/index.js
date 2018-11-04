import { tmdbClient, urls } from '#tmdb/tmdb.const'
import { transformAllMoviesResponse } from '#transformation'

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