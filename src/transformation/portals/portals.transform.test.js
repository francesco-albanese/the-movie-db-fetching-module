import { transformPortalResponse } from './portals.transform'
import { data } from './__fixtures__/portals.transform.fixtures'

describe('transformPortalResponse', () => {
  it('returns an empty array if data is missing', () => {
    expect(transformPortalResponse()).toEqual([])
  })

  it('returns transformed pages', () => {
    const result = transformPortalResponse(data)
    expect(result).toMatchSnapshot()
  })
})