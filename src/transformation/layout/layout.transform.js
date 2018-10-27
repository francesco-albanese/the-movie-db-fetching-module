import { isEmpty } from 'lodash-es'
import { getSections } from '#utils'

export const transformLayoutResponse = data => {
  if (isEmpty(data)) {
    return []
  }

  const { items, includes } = data

  return items.map(template => {
    
    const sections = getSections(template, includes.Entry)
    
    return {
      sections
    }
  })

}