import { isEmpty } from 'lodash-es'
import { getFirstObjectKey, getSections } from '#utils'

export const getPaths = (path = {}) => {
  const pathList = Object.entries(path)

  return pathList.reduce((paths, [ locale, path ]) => {
    paths[ locale.substring(0, 2) ] = path
    return paths
  }, {})
}

export const transformPageResponse = data => {
  if (isEmpty(data)) {
    return []
  }

  const { items, includes } = data

  return items.map(page => {

    const { 
      name,
      path,
      reference,
      sections 
    } = page.fields
    
    const parsedSections = !isEmpty(sections) 
      ? getSections(page, includes.Entry)
      : null

    const paths = getPaths(path)

    const transformedPage = {
      name: name[ getFirstObjectKey(name) ],
      paths,
      reference: reference[ getFirstObjectKey(reference) ],
      sections: parsedSections
    }
    
    return transformedPage
  })

}