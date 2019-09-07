import * as React from "react";
import theme from "../Theme";

import { Children } from "../types";
import { seconds, percent, vw } from "../Theme/units";
import { Direction } from "../Theme/position";
import { shadowOn, Blur } from "../Theme/shadow";

import {
  container as containerConstructor,
  ContainerConstructor,
} from "../Theme/container";

const sideContentCSS = (
  isOpen: boolean,
  container: ContainerConstructor = containerConstructor
): React.CSSProperties => {

  return {
    ...container(),
    ...shadowOn(Direction.Left, Blur.Medium),

    width: vw(50),
    right: `${vw(-(theme.SIDECONTENT_WIDTH + theme.DEFAULT_HORIZONTAL_PADDING * 2))}`,
    top: 0,
    zIndex: 51,
    height: percent(1),
    position: 'fixed',
    transform: `translateX(${isOpen ? vw(-theme.SIDECONTENT_WIDTH) : 0})`,
    transition: `${seconds(theme.ANIMATION_SPEED)} transform ease-in-out`
  }
}

export interface SideContentProps {
  children: Children
  open: boolean
  container?: ContainerConstructor
}

export const SideContent = (props: SideContentProps) => {

  const [isOpen, setOpen] = React.useState(false);
  const { children, container } = props;

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open])

  return (
    <div style={sideContentCSS(isOpen, container)}>
      {children}
    </div>
  );
}