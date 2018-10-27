import { isEmpty } from 'lodash-es'

export const transformLocaleResponse = data => {
  
  if (isEmpty(data)) {
    return []
  }

  const { locales } = data
  
  return locales.map(locale => {

    const {
      code,
      name
    } = locale

    return {
      code: `${ code.substring(0, 2) }`,
      name,
      default: locale.default,
      path: `/${ code.substring(0, 2) }`
    }
  })
}