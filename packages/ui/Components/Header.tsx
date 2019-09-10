import * as React from "react";
import { Children } from "../types";
import { container } from "../Theme/container";
import { shadow } from "../Theme/shadow";

export interface HeaderProps {
  children: Children
}

export const Header = (props: HeaderProps) =>
  <div style={headerCSS}>{props.children}</div>;

const headerCSS: React.CSSProperties = {
  ...container(),
  ...shadow()
};