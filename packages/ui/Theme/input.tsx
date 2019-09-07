import * as React from 'react';
import Theme from '../Theme';

import { roundedBorder } from '../Theme/container';
import { font, fontStrong } from '../Theme/font';
import { rem, em, px, percent } from '../Theme/units';

export const inputContainer = (): React.CSSProperties => ({
  fontSize: px(Theme.DEFAULT_REM_SIZE * Theme.FORM_SCALE),
  width: percent(1),  
})

export const input = (): React.CSSProperties => ({
  ...roundedBorder(5),
  ...fontStrong(),

  width: percent(1),  
  fontSize: em(1),
  padding: `${em(Theme.INPUT_TOP_BOTTOM_PADDING)} ${em(Theme.INPUT_SIDE_PADDING)}`,
  marginBottom: em(Theme.INPUT_BOTTOM_MARGIN),
  borderWidth: px(Theme.INPUT_BORDER_WIDTH),
  borderStyle: 'solid',
  borderColor: Theme.COLOR_BASE,
  background: Theme.COLOR_BASE
});


export const label = (): React.CSSProperties => ({
  ...font(1, Theme.FONT_CONDENSED),

  fontSize: em(1),  
  padding: `0 ${rem(Theme.INPUT_SIDE_PADDING)}`,
  display: 'block',
  textTransform: 'capitalize'
});