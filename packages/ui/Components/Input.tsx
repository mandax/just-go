import * as React from 'react';
import Theme from '../Theme';
import { roundedBorder } from '../Theme/container';

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
    setValue(event.target.value);
    props.onChange && props.onChange(value);
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

})

const labelCSS = (): React.CSSProperties => ({
  fontStyle: 'capitalize'
})

const inputCSS = (): React.CSSProperties => ({
  ...roundedBorder(),

  background: Theme.COLOR_BASE
})