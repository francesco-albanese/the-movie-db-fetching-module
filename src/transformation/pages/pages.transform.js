import { isEmpty } from 'lodash-es'
import { getSections } from '#utils'

export const transformPageResponse = data => {
  if (isEmpty(data)) {
    return []
  }

  const { items, includes } = data

  return items.map(page => {

    const { 
      name,
      reference,
      sections 
    } = page.fields
    
    const parsedSections = !isEmpty(sections) 
      ? getSections(page, includes.Entry)
      : null

    const transformedPage = {
      name,
      reference,
      sections: parsedSections
    }
    
    return transformedPage
  })

}