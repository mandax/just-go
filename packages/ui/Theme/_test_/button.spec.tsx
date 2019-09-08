import * as button from "../button";

describe('helper button', () => {
    
  it('should generate a default button', () => {
    expect(button.buttonBase()()).toMatchSnapshot()
  })

  it('should generate a new color button', () => {
    expect(button.buttonBase('blue', 'green', 'yellow', 'red')())
      .toMatchSnapshot();
  })

  it('should generate a button css with new scale function', () => {
    const scaleFunc = (a: number) => a.toString();
    expect(button.buttonBase()(scaleFunc)).toMatchSnapshot();
  })

  it('should generate a button css hovered', () => {
    expect(button.buttonBase()(undefined, true)).toMatchSnapshot();
  })

  it('should generate a button css without border', () => {
    expect(button.buttonBase()(undefined, undefined, false)).toMatchSnapshot();
  })

  it('should return a default css button', () => {
    expect(button.button()).toMatchSnapshot();
  })

  it('should return an accent css button', () => {
    expect(button.buttonAccent()).toMatchSnapshot();
  })

  it('should return a neutro css button', () => {
    expect(button.buttonNeutro()).toMatchSnapshot();
  })
})