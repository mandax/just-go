import * as React from "react";

import { fontMedium, fontStrong } from "../Theme/font";
import { shadow, Blur } from "../Theme/shadow";
import { container, roundedBorder } from "../Theme/container";
import { rem, px, seconds, NumberToCSSUnit, percent } from "../Theme/units";

import Theme from "../Theme";

export const buttonBase = (
  hoverColor: string = Theme.COLOR_BASE,
  bgHoverColor: string = Theme.COLOR_BRAND,
  color: string = Theme.COLOR_PRIMARY,
  bgColor: string = Theme.COLOR_BASE,
) => (
  scale: NumberToCSSUnit = rem,
  hover: boolean = false,
  asBlock: boolean = false,
  bordered: boolean = true
): React.CSSProperties => {

    const animationSpeed = seconds(Theme.ANIMATION_SPEED);

    const hoverProps = hover && {
      ...shadow(),

      backgroundColor: bgHoverColor,
      borderColor: bordered ? bgHoverColor : bgColor,
      color: hoverColor,
      cursor: 'pointer'
    }

    return {
      ...container(1, 0.5),
      ...roundedBorder(Theme.BUTTON_BORDER_RADIUS),
      ...fontMedium(1, Theme.FONT_CONDENSED),
      ...shadow(Blur.Small),

      width: asBlock ? percent(1) : 'auto',
      outline: 'none',
      marginRight: scale(0.5),
      display: asBlock ? 'block' : 'inline-block',
      lineHeight: scale(1.3),
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

export const buttonIconCSS = (
  scale: NumberToCSSUnit,
  hasText: boolean = false
): React.CSSProperties => ({
  marginRight: hasText ? scale(0.5) : 0,
  display: 'inline-block',
  verticalAlign: 'middle'
});

export const button = buttonBase();

export const buttonNeutro = buttonBase(Theme.COLOR_PRIMARY, Theme.COLOR_BASE_3);

export const buttonAccent = buttonBase(Theme.COLOR_BASE, Theme.COLOR_ACCENT);

export const buttonLink = (
  scale: NumberToCSSUnit = rem,
  hover: boolean = false,
  bordered: boolean = false,
  asBlock: boolean = false
): React.CSSProperties => ({
  ...buttonBase(Theme.COLOR_BASE, Theme.COLOR_BRAND)(scale, hover, bordered, asBlock),
  ...container(0.2, 0),
  ...fontStrong(),
  
  boxShadow: 'none',
  textAlign: 'left',
  backgroundColor: Theme.COLOR_BASE,
  color: hover ? Theme.COLOR_BRAND : Theme.COLOR_PRIMARY
});