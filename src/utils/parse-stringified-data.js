import { isString } from 'lodash-es'

export const parseStringifiedData = data => {
  return !isString(data) 
    ? data
    : JSON.parse(data)
}