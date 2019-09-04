import { CSSProperties } from "react";
import theme  from "./index";
import { px } from "./units";
import { Direction, walk } from "./position";

export enum Blur {
  Small = 0.5,
  Default = 1,
  Medium = 4,
  Large = 8
}

export const calcBlur = (intesity:Blur = Blur.Default) => 
  theme.SHADOW_BLUR * intesity;

export const shadow = (
  blur?: Blur,
  offsetX: number = 0,
  offsetY: number = 0
): CSSProperties => (theme.SHADOWS_ENABLED ? {
  boxShadow: `${px(offsetX)} ${px(offsetY)} ${px(calcBlur(blur))} ${theme.SHADOW_COLOR}`
} : {});

export const shadowOn = (
  direction: Direction,
  blur?: Blur
): CSSProperties => {
  const position = walk(direction, theme.SHADOW_OFFSET);
  return shadow(blur, position.x, position.y);
};