import * as React from "react";
import { IconType } from "react-icons";
import * as buttonGenerator from "../Theme/button";
import { em, rem, NumberToCSSUnit } from "../Theme/units";

export enum ButtonType {
  Default = 'button',
  Neutro = 'buttonNeutro',
  Accent = 'buttonAccent'
}

export interface ButtonProps {
  loading?: boolean,
  children: string,
  onClick: Function,
  type?: ButtonType,
  icon?: IconType,
  scalable?: boolean
}

export const Button = (props: ButtonProps) => {

  const [over, setOver] = React.useState(false);
  const scale: NumberToCSSUnit = props.scalable ? em : rem;
  const generator = props.type || ButtonType.Default;

  return (
    <button
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      onClick={() => props.onClick()}
      style={buttonGenerator[generator](scale, over)}>

      {props.icon &&
        <span style={iconCSS(scale)}>
          <props.icon size={scale(2)} />
        </span>
      }

      {props.children}

    </button>
  );
};

const iconCSS = (
  scale: NumberToCSSUnit
): React.CSSProperties => ({
  marginRight: scale(0.5)
});