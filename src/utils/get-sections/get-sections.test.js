import { buildSectionTree, getSections } from '.'
import { 
  contentReference,
  rawData, 
  sections 
} from './__fixtures__/get-sections.fixtures'

describe('utils', () => {

  describe('getSections', () => {

    it('returns empty object if page or entries are missing', () => {
      expect(getSections()).toEqual({})
    })

    it('returns correctly formatted sections', () => {
      const result = getSections(rawData.items[ 0 ], rawData.includes.Entry)
      expect(result).toEqual(expect.objectContaining(sections))
    })

  })
  
  describe('buildSectionTree', () => {

    it('returns empty array if content or entries are missing', () => {
      expect(buildSectionTree()).toEqual({})
    })

    it('returns a well formatted section tree', () => {
      const result = buildSectionTree(contentReference, rawData.includes.Entry)
      expect(result).toEqual(sections.MainMenu)
    })

  })
})
