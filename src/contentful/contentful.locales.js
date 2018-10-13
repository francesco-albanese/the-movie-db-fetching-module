import { contentfulClient, urls } from './contentful.const'
import { transformLocaleResponse } from '#transformation'

export const getLocales = () => {
  return contentfulClient.get(urls.space, {
    transformResponse: [
      data => transformLocaleResponse(data)
    ]
  })
    .then(data => {
      console.log(data)
      return data
    })
}