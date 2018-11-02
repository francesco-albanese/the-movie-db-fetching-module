import { 
  contentTypes,
  contentfulClient, 
  urls 
} from '#contentful/contentful.const'
import { transformPortalResponse } from '#transformation'
import { parseStringifiedData } from '#utils'

export const getPortals = (locale = '*') => {
  return contentfulClient.get(urls.entries, {
    params: {
      content_type: contentTypes.portal,
      include: 3,
      locale,
      select: 'sys.id,fields.name,fields.sections'
    },
    transformResponse: [
      data => parseStringifiedData(data),
      data => transformPortalResponse(data)
    ]
  })
    .then(data => data)
}