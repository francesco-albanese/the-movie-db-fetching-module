import { isEmpty } from 'lodash-es'

export const parseStringifiedData = data => {
  return isEmpty(data) 
    ? null
    : JSON.parse(data)
}