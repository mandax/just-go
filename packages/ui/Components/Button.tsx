import * as React from "react";
import { IconType } from "react-icons";
import * as buttonGenerator from "../Theme/button";
import { em, rem, NumberToCSSUnit } from "../Theme/units";

export enum ButtonType {
  Default = 'button',
  Neutro = 'buttonNeutro',
  Accent = 'buttonAccent',
  Link = 'buttonLink'
}

export interface ButtonProps {
  loading?: boolean, // TODO: add loading state to the button
  children?: string,
  onClick: Function,
  type?: ButtonType,
  icon?: IconType,
  asBlock?: boolean,
  scalable?: boolean,
  style?: React.CSSProperties
}

export const Button = (props: ButtonProps) => {

  const [over, setOver] = React.useState(false);
  const scale: NumberToCSSUnit = props.scalable ? em : rem;
  const generator = props.type || ButtonType.Default;

  const buttonStyle = (): React.CSSProperties => ({
    ...buttonGenerator[generator](scale, over, props.asBlock),
    ...(props.style || {})
  })

  return (
    <button
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      onClick={() => props.onClick()}
      style={buttonStyle()}>

      {props.icon &&
        <span style={buttonGenerator.buttonIconCSS(scale, Boolean(props.children))}>
          <props.icon size={scale(1.2)} />
        </span>
      }

      {props.children}

    </button>
  );
};