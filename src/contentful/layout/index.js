import { 
  contentTypes,
  contentfulClient, 
  urls 
} from '#contentful/contentful.const'
import { transformLayoutResponse } from '#transformation'
import { parseStringifiedData } from '#utils'

export const getLayout = (locale = '*') => {
  return contentfulClient.get(urls.entries, {
    params: {
      content_type: contentTypes.layout,
      include: 3,
      locale,
      select: 'sys.id,fields.name,fields.reference,fields.sections'
    },
    transformResponse: [
      data => parseStringifiedData(data),
      data => transformLayoutResponse(data)
    ]
  })
    .then(data => data)
}