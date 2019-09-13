import * as React from 'react';
import { Label } from "../Components/Label";
import { input, inputContainer } from '../Theme/input';

export interface TextAreaProps {
  label?: string,
  placeholder?: string,
  children: string,
  rows?: number,
  onChange?: (value: string, isValid?: boolean) => any
}

export const TextArea = (props: TextAreaProps) => {

  const makeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(event.target.value);
  };

  return (
    <div style={inputContainer()}>
      <Label>{props.label}</Label>
      <textarea
        style={input()}
        onChange={makeChange}
        rows={props.rows || 4}
        placeholder={props.placeholder}>
        {props.children}
      </textarea>
    </div>
  );
};