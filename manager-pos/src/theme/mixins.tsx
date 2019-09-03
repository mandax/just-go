import { CSSProperties } from "react";
import theme from "./index";
import { rem, px, percent, Direction, walk } from "./utils";

export type FontConstructor =
  (fontSize?: number, fontFamily?: string) => React.CSSProperties

export const fontBase = (
  fontWeight: number = theme.FONT_DEFAULT_WEIGHT,
): FontConstructor => (
  size: number = theme.FONT_DEFAULT_SIZE,
  fontFamily: string = theme.FONT_PRIMARY
): React.CSSProperties => ({
  fontFamily,
  fontWeight,
  fontSize: rem(size)
})

export const font: FontConstructor = fontBase(theme.FONT_DEFAULT_WEIGHT);

export const fontMedium: FontConstructor = fontBase(theme.FONT_MEDIUM_WEIGHT);

export const fontStrong: FontConstructor = fontBase(theme.FONT_STRONG_WEIGHT);

export const colorByState = (state: boolean):React.CSSProperties => ({
  color: state ? theme.COLOR_PRIMARY : theme.COLOR_DARK
})

export type ContainerConstructor =
  (hPadding?: number, vPadding?: number) => React.CSSProperties

export const containerBase = (
  fontColor: string = theme.COLOR_DARK,
  bgColor: string = theme.COLOR_LIGHT,
): ContainerConstructor => (
  hPadding: number = theme.DEFAULT_HORIZONTAL_PADDING,
  vPadding: number = theme.DEFAULT_VERTICAL_PADDING
): CSSProperties => ({
  ...font(),
  color: fontColor,
  backgroundColor: bgColor,
  padding: `${rem(vPadding)} ${rem(hPadding)}`
});

export const container: ContainerConstructor = containerBase();

export const containerAccent: ContainerConstructor = containerBase(theme.COLOR_LIGHT, theme.COLOR_PRIMARY);

export const content: React.CSSProperties = {
  width: percent(0.6),
}

export const shadow = (
  blur: number = theme.SHADOW_BLUR,
  offsetX: number = 0,
  offsetY: number = 0
): CSSProperties => ({
  boxShadow: `${px(offsetX)} ${px(offsetY)} ${px(blur)} ${theme.SHADOW_COLOR}`
});

export const shadowOn = (
  direction: Direction,
  blur: number = theme.SHADOW_BLUR
): CSSProperties => {
  const position = walk(direction, theme.SHADOW_OFFSET);
  return shadow(blur, position.x, position.y);
};

export const verticalCenter: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
};

export const roundedBorder = (
  defaultOrtopLeftBorder: number = theme.ROUNDED_BORDER,
  topRightBorder?: number,
  bottomLeftBorder?: number,
  bottomRightBorder?: number
):React.CSSProperties => {
  let css:React.CSSProperties = {
    borderRadius: defaultOrtopLeftBorder
  };
  if (topRightBorder || bottomLeftBorder || bottomRightBorder) {
    css = {
      borderTopLeftRadius: defaultOrtopLeftBorder,
      borderTopRightRadius: topRightBorder,
      borderBottomLeftRadius: bottomLeftBorder,
      borderBottomRightRadius: bottomRightBorder
    }
  }
  return css;
};

export const titleSpacing = (
  marginTop: number = theme.TITLE_SPACING_TOP,
  marginBottom: number = theme.TITLE_SPACING_BOTTOM
): React.CSSProperties => ({
  marginTop: rem(marginTop), 
  marginBottom: rem(marginBottom)
});
