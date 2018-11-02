import { isEmpty } from 'lodash-es'
import { getFirstObjectKey, getSections } from '#utils'

export const transformPortalResponse = data => {
  if (isEmpty(data)) {
    return []
  }

  const { items, includes } = data

  return items.map(portal => {

    const { 
      name,
      sections 
    } = portal.fields
    
    const parsedSections = !isEmpty(sections) 
      ? getSections(portal, includes.Entry)
      : null

    const transformedPortals = {
      name: name[ getFirstObjectKey(name) ],
      sections: parsedSections
    }
    
    return transformedPortals
  })

}