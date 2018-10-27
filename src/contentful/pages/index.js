import { 
  contentTypes,
  contentfulClient, 
  urls 
} from '#contentful/contentful.const'
import { transformPageResponse } from '#transformation'
import { parseStringifiedData } from '#utils'

export const getPages = (locale = '*') => {
  return contentfulClient.get(urls.entries, {
    params: {
      content_type: contentTypes.page,
      include: 3,
      locale,
      select: 'sys.id,fields.name,fields.path,fields.reference,fields.sections'
    },
    transformResponse: [
      data => parseStringifiedData(data),
      data => transformPageResponse(data)
    ]
  })
    .then(data => data)
}