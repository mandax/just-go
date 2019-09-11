import * as React from "react";
import theme from "../Theme";

import { Children } from "../types";
import { seconds, percent, vw, rem } from "../Theme/units";
import { Direction } from "../Theme/position";
import { shadowOn, Blur } from "../Theme/shadow";

import {
  container as containerGenerator,
  ContainerGenerator,
} from "../Theme/container";

export interface SideContentProps {
  children: Children
  open: boolean
  width?: number
  container?: ContainerGenerator
}

export const SideContent = (props: SideContentProps) => {

  const [isOpen, setOpen] = React.useState(false);
  const { children, container } = props;

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open])

  return (
    <div style={sideContentCSS(props.width, isOpen, container)}>
      {children}
    </div>
  );
}

const sideContentCSS = (
  width: number = theme.SIDECONTENT_WIDTH,
  isOpen: boolean,
  container: ContainerGenerator = containerGenerator
): React.CSSProperties => {

  const xTranslationOpen = `calc(${vw(-width)} - ${rem(theme.DEFAULT_HORIZONTAL_PADDING * 2)})`;

  return {
    ...container(),
    ...shadowOn(Direction.Left, Blur.Medium),

    width: vw(width),
    left: percent(1),
    top: 0,
    zIndex: 51,
    height: percent(1),
    position: 'fixed',
    transform: `translateX(${isOpen ? xTranslationOpen : 0})`,
    transition: `${seconds(theme.ANIMATION_SPEED)} transform ease-in-out`,
  }
}