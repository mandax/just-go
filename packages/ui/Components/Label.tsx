import * as React from 'react';
import { label } from "../Theme/input";

export interface LabelProps {
  children?: string
}

export const Label = (props: LabelProps) => 
  (props.children ? <label style={label()}>{props.children}</label> : <></>);
