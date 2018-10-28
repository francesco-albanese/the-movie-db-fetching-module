import { isEmpty } from 'lodash-es'
/**
 * Returns object keyed by valid locale (en|it)
 * If locale not a valid locale default to en
 * @param obj {Object}
 * @returns {Object} 
 */

const validLocales = [ 'en', 'it' ]

export const localifyObjectKeys = obj => {
  if (isEmpty(obj) || Array.isArray(obj)) {
    return {}
  }

  return Object.entries(obj).reduce((localifiedKeys, [ key, value ]) => {

    const objectKey = validLocales.find(locale => key.includes(locale)) || 'en'

    localifiedKeys[ objectKey ] = value

    return localifiedKeys
  }, {})
}