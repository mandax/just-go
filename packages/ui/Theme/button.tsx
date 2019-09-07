import * as React from "react";
import { fontMedium } from "../Theme/font";
import { shadow, Blur } from "../Theme/shadow";
import { container, roundedBorder } from "../Theme/container";
import { px, seconds, NumberToCSSUnit } from "../Theme/units";

import Theme from "../Theme";

const buttonBase = (
  hoverColor: string = Theme.COLOR_BASE,
  bgHoverColor: string = Theme.COLOR_BRAND,
  color: string = Theme.COLOR_PRIMARY,
  bgColor: string = Theme.COLOR_BASE,
) => (
  scale: NumberToCSSUnit,
  hover: boolean,
  bordered: boolean = true
): React.CSSProperties => {

  const animationSpeed = seconds(Theme.ANIMATION_SPEED);

  const hoverProps = hover && {
    ...shadow(),

    backgroundColor: bgHoverColor,
    borderColor: bgHoverColor,
    color: hoverColor,
    cursor: 'pointer'
  }

  return {
  ...container(1, 0.5),
  ...roundedBorder(Theme.BUTTON_BORDER_RADIUS),
  ...fontMedium(1, Theme.FONT_CONDENSED),
  ...shadow(Blur.Small),

  marginRight: scale(0.5),
  display: 'inline-block',
  fontSize: scale(Theme.BUTTON_FONT_SIZE),
  borderWidth: px(Theme.BUTTON_BORDER_SIZE),
  borderStyle: 'solid',
  borderColor: bordered ? color : bgColor,
  backgroundColor: bgColor,

  transition: `
    color ${animationSpeed} ease,
    border-color ${animationSpeed} ease,
    box-shadow ${animationSpeed} ease,
    background-color ${animationSpeed} ease
  `,

  ...hoverProps
  }
};

export const button = buttonBase();

export const buttonNeutro = buttonBase(Theme.COLOR_PRIMARY, Theme.COLOR_BASE_3);

export const buttonAccent = buttonBase(Theme.COLOR_BASE, Theme.COLOR_ACCENT);