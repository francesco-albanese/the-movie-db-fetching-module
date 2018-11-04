import { tmdbClient, urls } from '#tmdb/tmdb.const'
import { transformAllGenresResponse } from '#transformation'

import { parseStringifiedData } from '#utils'

export const getGenres = async(language) => {
  
  try {
    const data  = await tmdbClient.get(urls.genres, {
      params: {
        language
      },
      transformResponse: [
        data => parseStringifiedData(data),
        ({ genres }) => transformAllGenresResponse(genres)
      ]
    })

    return data
  }

  catch (e) {
    throw e
  }
}