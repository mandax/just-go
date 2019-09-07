import * as React from 'react';
import Theme from '../Theme';

import { roundedBorder } from '../Theme/container';
import { font, fontStrong } from '../Theme/font';
import { rem, px, percent } from '../Theme/units';

export interface InputProps {
  type: string,
  label?: string,
  value?: string | number,
  placeholder?: string,
  onChange?: (value: string, isValid?: boolean) => any
}

export const Input = (props: InputProps) => {

  const [value, setValue] = React.useState();

  const makeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.value);
  };

  React.useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value])

  return (
    <div style={wrapperCSS()}>
      {props.label ? <label style={labelCSS()}>{props.label}</label> : ''}
      <input
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
  fontSize: px(16 * Theme.FORM_SCALE),
  width: percent(1),  
})

const labelCSS = (): React.CSSProperties => ({
  ...font(1, Theme.FONT_CONDENSED),

  padding: `0 ${rem(Theme.INPUT_SIDE_PADDING)}`,
  display: 'block',
  textTransform: 'capitalize'
})

const inputCSS = (): React.CSSProperties => ({
  ...roundedBorder(5),
  ...fontStrong(),

  width: percent(1),  
  padding: `${rem(Theme.INPUT_TOP_BOTTOM_PADDING)} ${rem(Theme.INPUT_SIDE_PADDING)}`,
  borderWidth: px(1),
  borderStyle: 'solid',
  borderColor: Theme.COLOR_BASE,
  background: Theme.COLOR_BASE
});