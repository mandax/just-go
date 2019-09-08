import * as helpers from "../helpers";

describe('Api Base', () => {

  it('should build Json request config', () => {
    expect(helpers.buildJsonRequest('DELETE', { foo: 'bar' }))
      .toMatchObject({
        method: 'DELETE',
        body: '{"foo":"bar"}',
        headers: {
          'Content-Type': 'application/json'
        }
      })
  })

})