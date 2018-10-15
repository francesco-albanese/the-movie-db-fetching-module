import { contentfulClient, urls } from './contentful.const'
import { transformLocaleResponse } from '#transformation'
import { parseStringifiedData } from '#utils'

export const getLocales = () => {
  return contentfulClient.get(urls.space, {
    transformResponse: [
      data => parseStringifiedData(data),
      data => transformLocaleResponse(data)
    ]
  })
    .then(data => data)
}