import * as React from 'react';
import { input, inputContainer } from "../Theme/input";
import { Label } from "../Components/Label";

export interface InputProps {
  type: string,
  label?: string,
  focus?: boolean,
  value?: string | number,
  placeholder?: string,
  step?: number,
  min?: number,
  max?: number,
  onChange?: (value: string, isValid?: boolean) => any
}

export const Input = (props: InputProps) => {

  const [value, setValue] = React.useState(props.value);
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
    setValue(props.value);
  }, [props.value])

  return (
    <div style={inputContainer()}>
      <Label>{props.label}</Label>
      <input
        ref={inputRef}
        style={input()}
        value={value}
        onChange={makeChange}
        step={props.step}
        min={props.min}
        max={props.max}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};