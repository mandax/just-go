import * as ctnr from "../container";

describe('helper container', () => {
    
  it('should generate a default container', () => {
    expect(ctnr.containerBase()()).toMatchSnapshot()
  })
   
  it('should generate a new color container', () => {
    expect(ctnr.containerBase('red', 'blue')()).toMatchSnapshot()
  })
   
  it('should generate a new top/bottom padding container', () => {
    expect(ctnr.containerBase()(undefined, 2)).toMatchSnapshot()
  })
  
  it('should generate a new side padding container', () => {
    expect(ctnr.containerBase()(2)).toMatchSnapshot()
  })

  it('should return a default css container', () => {
    expect(ctnr.container()).toMatchSnapshot()
  })
  
  it('should return a transparent background css container', () => {
    expect(ctnr.containerTransparent()).toMatchSnapshot()
  })
  
  it('should return a accent css container', () => {
    expect(ctnr.containerAccent()).toMatchSnapshot()
  })

  it('should return a vertical centralized container css', () => {
    expect(ctnr.verticalCenter).toMatchSnapshot()
  })
  
  it('should return a horizontal centralized container css', () => {
    expect(ctnr.horizontalCenter).toMatchSnapshot()
  })
  
  it('should return a rounded border css container', () => {
    expect(ctnr.roundedBorder()).toMatchSnapshot()
  })

  it('should return only top left rounded border css container', () => {
    expect(ctnr.roundedBorder(10)).toMatchSnapshot()
  })
  
  it('should return only top right rounded border css container', () => {
    expect(ctnr.roundedBorder(undefined, 10)).toMatchSnapshot()
  })
  
  it('should return only bottom left rounded border css container', () => {
    expect(ctnr.roundedBorder(undefined, undefined, 10)).toMatchSnapshot()
  })

  it('should return only bottom right rounded border css container', () => {
    expect(ctnr.roundedBorder(undefined, undefined, undefined, 10)).toMatchSnapshot()
  })
})