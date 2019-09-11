import * as React from 'react';
import { input, label, inputContainer } from "../Theme/input";
import { Children } from "../types";

export interface SelectProps {
  label?: string,
  value?: string | number,
	placeholder?: string,
	children: React.ReactElement,
  onChange?: (value: string, isValid?: boolean) => any
}

export const Select = (props: SelectProps) => {

  const [value, setValue] = React.useState();

  const makeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.value);
  };

  React.useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value])

  return (
    <div style={inputContainer()}>
      {props.label ? <label style={label()}>{props.label}</label> : ''}
			<select>
				{props.children}
			</select>
      />
    </div>
  );
};

export interface OptionProps {
  children: Children,
  name: string,
  value: string
}

export const Option = (props: OptionProps)