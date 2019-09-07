import * as React from 'react';
import Theme from '../Theme';

import { roundedBorder } from '../Theme/container';
import { font, fontStrong } from '../Theme/font';
import { em, rem, px, percent } from '../Theme/units';

export interface InputProps {
  type: string,
  label?: string,
  focus?: boolean,
  value?: string | number,
  placeholder?: string,
  onChange?: (value: string, isValid?: boolean) => any
}

export const Input = (props: InputProps) => {

  const [value, setValue] = React.useState();
  const inputRef = React.useRef(null);

  const makeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.value);
  };

  React.useEffect(() => {
    if (props.focus) {
      inputRef.current.focus();
    }
  }, [])

  React.useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value])

  return (
    <div style={wrapperCSS()}>
      {props.label ? <label style={labelCSS()}>{props.label}</label> : ''}
      <input
        ref={inputRef}
        style={inputCSS()}
        value={value}
        onChange={makeChange}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const wrapperCSS = (): React.CSSProperties => ({
  fontSize: px(Theme.DEFAULT_REM_SIZE * Theme.FORM_SCALE),
  width: percent(1),  
})

const labelCSS = (): React.CSSProperties => ({
  ...font(1, Theme.FONT_CONDENSED),

  fontSize: em(1),  
  padding: `0 ${rem(Theme.INPUT_SIDE_PADDING)}`,
  display: 'block',
  textTransform: 'capitalize'
})

const inputCSS = (): React.CSSProperties => ({
  ...roundedBorder(5),
  ...fontStrong(),

  width: percent(1),  
  fontSize: em(1),
  padding: `${em(Theme.INPUT_TOP_BOTTOM_PADDING)} ${em(Theme.INPUT_SIDE_PADDING)}`,
  marginBottom: em(Theme.INPUT_BOTTOM_MARGIN),
  borderWidth: px(Theme.INPUT_BORDER_WIDTH),
  borderStyle: 'solid',
  borderColor: Theme.COLOR_BASE,
  background: Theme.COLOR_BASE
});