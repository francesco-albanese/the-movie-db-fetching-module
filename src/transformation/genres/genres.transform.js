import { isEmpty } from 'lodash-es'

export const transformAllGenresResponse = (data = []) => {

  if (isEmpty(data)) {
    return []
  } 
  
  return data.map(genre => {

    const { id, name } = genre

    return {
      id,
      name
    }

  })
}