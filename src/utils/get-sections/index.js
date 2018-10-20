import { getFirstObjectKey } from '#utils'
import { isEmpty } from 'lodash-es'
/**
 * Build a section tree starting from content reference
 * 
 * @param content {Array} - content references
 * @param entries {Array} - Unordered list of entries from Contentful
 * @returns {Array} of transformed items
 */
export const buildSectionTree = (content = [], entries = []) => {

  if (isEmpty(content) || isEmpty(entries)) {
    return []
  }

  return content.map(content => {

    const linkReference = entries.find(entry => entry.sys.id === content.sys.id)
    
    if (linkReference) {
      const { fields } = linkReference
      const { name } = fields
      const referenceName = name[ getFirstObjectKey(name) ]
      const link = { 
        [ referenceName ]: { ...fields }
      }

      return link
    }

    return null
  })
}

/**
 * Transform an unordered list of entries into a Section.
 * 
 * @param page    {Object}  - Page to which the Section belongs to
 * @param entries {Array}   - Unordered list of entries from Contentful
 * @returns {Array} of transformed Sections
 */
export const getSections = (page = {}, entries = []) => {

  if (isEmpty(page) || isEmpty(entries)) {
    return {}
  }

  const { fields } = page
  const { sections } = fields

  const section = {}

  const sectionReference = entries.find(entry => {
    const sectionId = sections[ getFirstObjectKey(sections) ][ 0 ].sys.id
    return entry.sys.id === sectionId
  })

  if (sectionReference) {
    const { content, name } = sectionReference.fields
    const sectionName = name[ getFirstObjectKey(name) ]
    const contentReference = content[ getFirstObjectKey(content) ]
    
    const sectionTree = buildSectionTree(contentReference, entries)

    section[ sectionName ] = [ ...sectionTree ]
  }

  return section
  
}