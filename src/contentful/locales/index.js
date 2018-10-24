import { contentfulClient, urls } from '#contentful/contentful.const'
import { transformLocaleResponse } from '#transformation'
import { parseStringifiedData } from '#utils'

export const getLocales = async() => {
  try {
    const { data } = await contentfulClient.get(urls.space, {
      transformResponse: [
        data => parseStringifiedData(data),
        data => transformLocaleResponse(data)
      ]
    })
    
    return data

  } catch (e) {
    throw e
  }
}