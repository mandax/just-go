import Theme from '../Theme';

export type UnitTransformer = (num: number) => number;

export type NumberToCSSUnit = (num: number) => string;

export const seconds: NumberToCSSUnit = (num: number): string => `${num}s`;

export const deg: NumberToCSSUnit = (num: number): string => `${num}deg`;

export const px: NumberToCSSUnit = (num: number): string => `${num}px`;

export const vw: NumberToCSSUnit = (num: number): string => `${num}vw`;

export const vh: NumberToCSSUnit = (num: number): string => `${num}vh`;

export const em: NumberToCSSUnit = (num: number): string => `${num}em`;

export const rem: NumberToCSSUnit = (num: number): string => `${num}rem`;

export const percent: NumberToCSSUnit = (num: number): string => `${num * 100}%`;

export const remToPx: UnitTransformer = (rem: number): number => rem * Theme.DEFAULT_REM_SIZE;
