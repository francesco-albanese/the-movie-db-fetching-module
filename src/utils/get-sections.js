import { getFirstObjectKey } from '#utils'

/**
 * Build a section tree starting from content reference
 * 
 * @param content {Array} - content references
 * @param entries {Array} - Unordered list of entries from Contentful
 * @returns {Array} of transformed items
 */
export const buildSectionTree = (content = [], entries = []) => {

  return content.map(content => {

    const linkReference = entries.find(entry => entry.sys.id === content.sys.id)
    
    if (linkReference) {
      const { fields } = linkReference
      const link = { ...fields }

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
  const { fields } = page
  const { name, sections } = fields

  const section = {}
  const sectionName = name[ getFirstObjectKey(name) ]

  const sectionReference = entries.find(entry => {
    const sectionId = sections[ getFirstObjectKey(sections) ][ 0 ].sys.id
    return entry.sys.id === sectionId
  })

  if (sectionReference) {
    const { content } = sectionReference.fields
    const contentReference = content[ getFirstObjectKey(content) ]
    const sectionTree = buildSectionTree(contentReference, entries)
    section[ sectionName ] = [ ...sectionTree ]
  }

  return section
  
}