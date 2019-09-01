import { CSSProperties } from "react";
import theme from "./index";
import { px, Direction, walk } from "./utils";

export const container = (
  fontColor:string = theme.COLOR_DARK, 
  bgColor:string = theme.COLOR_LIGHT, 
  horizontalPadding:number = theme.DEFAULT_HORIZONTAL_PADDING,
  verticalPadding:number = theme.DEFAULT_VERTICAL_PADDING
):CSSProperties => ({
  color: fontColor,
  backgroundColor: bgColor,
  padding: `${verticalPadding} ${horizontalPadding}`
});

export const shadow = (
  blur:number = theme.SHADOW_BLUR,
  offsetX:number = 0,
  offsetY:number = 0
):CSSProperties => ({
  boxShadow: `${px(offsetX)} ${px(offsetY)} ${px(blur)} ${theme.SHADOW_COLOR}`
});

export const shadowOn = (direction:Direction, blur:number = theme.SHADOW_BLUR):CSSProperties => {
  const position = walk(direction, theme.SHADOW_OFFSET);
  return shadow(blur, position.x, position.y);
};