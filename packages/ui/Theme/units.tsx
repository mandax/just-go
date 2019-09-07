import Theme from '../Theme';

export const seconds = (num: number): string => `${num}s`;

export const px = (num: number): string => `${num}px`;

export const vw = (num: number): string => `${num}vw`;

export const vh = (num: number): string => `${num}vh`;

export const em = (num: number): string => `${num}em`;

export const rem = (num: number): string => `${num}rem`;

export const percent = (num: number): string => `${num * 100}%`;

export const remToPx = (rem: number): number => rem * Theme.DEFAULT_REM_SIZE;
