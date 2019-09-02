import { CSSProperties } from "react";
import theme from "./index";
import { rem, px, Direction, walk } from "./utils";

export const fontBase = (
  fontWeight:number = theme.FONT_DEFAULT_WEIGHT,
) => (
  size:number = theme.FONT_DEFAULT_SIZE,
  fontFamily:string = theme.FONT_PRIMARY
):React.CSSProperties => ({
  fontFamily,
  fontWeight,
  fontSize: rem(size)
})

export const font:(fontSize?:number, fontFamily?:string) => React.CSSProperties = fontBase(theme.FONT_DEFAULT_WEIGHT);
export const fontMedium:(fontSize?:number, fontFamily?:string) => React.CSSProperties = fontBase(theme.FONT_MEDIUM_WEIGHT);
export const fontStrong:(fontSize?:number, fontFamily?:string) => React.CSSProperties = fontBase(theme.FONT_STRONG_WEIGHT);

export const containerBase = (
  fontColor:string = theme.COLOR_DARK, 
  bgColor:string = theme.COLOR_LIGHT,
) => (
  hPadding:number = theme.DEFAULT_HORIZONTAL_PADDING,
  vPadding:number = theme.DEFAULT_VERTICAL_PADDING
):CSSProperties => ({
  ...font(),
  color: fontColor,
  backgroundColor: bgColor,
  padding: `${rem(vPadding)} ${rem(hPadding)}`
});

export const container:(hPadding?:number, vPadding?:number) => React.CSSProperties = containerBase();

export const shadow = (
  blur:number = theme.SHADOW_BLUR,
  offsetX:number = 0,
  offsetY:number = 0
):CSSProperties => ({
  boxShadow: `${px(offsetX)} ${px(offsetY)} ${px(blur)} ${theme.SHADOW_COLOR}`
});

export const shadowOn = (
  direction:Direction,
  blur:number = theme.SHADOW_BLUR
):CSSProperties => {
  const position = walk(direction, theme.SHADOW_OFFSET);
  return shadow(blur, position.x, position.y);
};

export const verticalCenter:React.CSSProperties = {
  position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)'
}