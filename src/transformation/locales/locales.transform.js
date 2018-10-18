import { isEmpty } from 'lodash-es'

export const transformLocaleResponse = data => {
  
  if (isEmpty(data)) {
    return []
  }

  const { locales } = data
  
  return locales
}