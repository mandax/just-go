import * as base from "../base";

describe('Api Base', () => {

  it('should build api Uri', () => {
    expect(base.apiUrl('/foo')).toBe('http://localhost:3000/foo')
  })

})