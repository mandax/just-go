import * as font from "../font";

describe('helper font', () => {
    
  it('should generate a default font config', () => {
    expect(font.fontBase()()).toMatchSnapshot()
  })
  
})