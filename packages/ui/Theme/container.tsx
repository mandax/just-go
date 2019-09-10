import { CSSProperties } from "react";
import theme from "./index";
import { rem } from "./units";
import { font } from "./font";

export type ContainerGenerator =
  (hPadding?: number, vPadding?: number) => React.CSSProperties

export const containerBase = (
  fontColor: string = theme.COLOR_PRIMARY,
  bgColor: string = theme.COLOR_BASE,
): ContainerGenerator => (
  hPadding: number = theme.DEFAULT_HORIZONTAL_PADDING,
  vPadding: number = theme.DEFAULT_VERTICAL_PADDING
): CSSProperties => ({
  ...font(),
  color: fontColor,
  backgroundColor: bgColor,
  padding: `${rem(vPadding)} ${rem(hPadding)}`
});

export const container: ContainerGenerator = containerBase();

export const containerTransparent: ContainerGenerator = 
  containerBase(theme.COLOR_PRIMARY, 'transparent');

export const containerAccent: ContainerGenerator = 
  containerBase(theme.COLOR_BASE, theme.COLOR_PRIMARY);

export const verticalCenter: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
};

export const horizontalCenter: React.CSSProperties = {
  margin: `0 auto`
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

