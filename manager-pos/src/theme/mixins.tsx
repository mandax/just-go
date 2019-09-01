import { CSSProperties } from 'react';
import theme from './index';

export const primaryColorBase = ():CSSProperties => ({
  color: theme.COLOR_LIGHT,
  backgroundColor: theme.COLOR_PRIMARY
})