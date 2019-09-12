import * as React from 'react';

import Theme from '../Theme';
import { input } from "../Theme/input";
import { shadowOn } from "../Theme/shadow";
import { Direction } from '../Theme/position';
import { containerTransparent } from '../Theme/container';
import { px, rem, seconds, deg, percent } from '../Theme/units';

export const selectIconCSS = (isOpen: boolean): React.CSSProperties => ({
  display: 'inline-block',
  position: 'relative',
  top: rem(0.2),
  transform: isOpen ? 
    `rotate(0deg) translate(${percent(0.2)}, 0)`:
    `rotate(${deg(-450)}) translate(${percent(0.2)}, ${percent(0.3)})`,
  transition: `transform ${seconds(Theme.ANIMATION_SPEED)} ease-in-out`
});

export const selectInputCSS = (): React.CSSProperties => ({
  ...input(),
  width: 'auto',
  display: 'inline-block',
  cursor: 'pointer'
});

export const optionsCSS = (isOpen: boolean): React.CSSProperties => {
  const open = {
    transform: `translate(0, ${rem(-0.5)}) scale(1)`
  }
  return {
    ...shadowOn(Direction.Down),

    position: 'absolute',
    minWidth: rem(15),
    transform: `translate(0, ${rem(-0.5)}) scale(0)`,
    transformOrigin: 'left top',
    transition: `transform ${seconds(Theme.ANIMATION_SPEED / 2)} ease-in-out`,

    ...(isOpen ? open : {})
  }
};

export const optionCSS = (): React.CSSProperties => ({
  ...containerTransparent(0.5, 0.5),
  borderBottom: `${px(1)} solid ${Theme.COLOR_BASE_2}`
});