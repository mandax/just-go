import theme from "./index";
import { rem } from "./units";

export type FontConstructor =
  (fontSize?: number, fontFamily?: string) => React.CSSProperties;

export const fontBase = (
  fontWeight: number = theme.FONT_DEFAULT_WEIGHT,
): FontConstructor => (
  size: number = theme.FONT_DEFAULT_SIZE,
  fontFamily: string = theme.FONT_PRIMARY
): React.CSSProperties => ({
  fontFamily,
  fontWeight,
  fontSize: rem(size)
});

export const font: FontConstructor = fontBase(theme.FONT_DEFAULT_WEIGHT);

export const fontMedium: FontConstructor = fontBase(theme.FONT_MEDIUM_WEIGHT);

export const fontStrong: FontConstructor = fontBase(theme.FONT_STRONG_WEIGHT);

export const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);

export const limitChar = (text: string, limit: number): string => {
  if (text.length > limit) {
    text = `${text.substring(0, limit)}...`;
  }
  return text;
}

export const colorByState = (state: boolean): React.CSSProperties => ({
  color: state ? theme.COLOR_BRAND : theme.COLOR_PRIMARY
});

export const titleSpacing = (
  marginTop: number = theme.TITLE_SPACING_TOP,
  marginBottom: number = theme.TITLE_SPACING_BOTTOM
): React.CSSProperties => ({
  marginTop: rem(marginTop),
  marginBottom: rem(marginBottom)
});