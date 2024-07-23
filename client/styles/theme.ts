import { neutral, brand, danger, warning, success, background } from "./color";
import { typography } from "./typography";
import { boxShadow } from "./shadow";

const defaultShade = 500;

export const colors = {
  neutral,
  brand,
  danger,
  warning,
  success,
  background,
};

export const getThemeColors = (
  color: Record<number, string>,
  shade: number = defaultShade
) => ({
  DEFAULT: color[shade],
  ...color,
});

export const getFontSizeAndConfig = (
  fontSize: string,
  lineHeight: string = typography.lineHeight[1],
  letterSpacing: string = typography.letterSpacing.normal
): [string, Partial<{ lineHeight: string; letterSpacing: string }>] => [
  fontSize,
  { lineHeight, letterSpacing },
];

export { typography, boxShadow };