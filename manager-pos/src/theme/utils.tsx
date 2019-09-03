
export const seconds = (num:number):string => `${num}s`;

export const px = (num:number):string => `${num}px`;

export const em = (num:number):string => `${num}em`;

export const rem = (num:number):string => `${num}rem`;

export const percent = (num:number):string => `${num * 100}%`;

export enum Direction {
	Up = -1,
	Down = 1,
	Left = -1,
	Right = 1
}

export interface position {
	x: number,
	y: number
}

export const walkDirection = (directions:Direction[], dir:Direction, offset:number) =>
	directions.includes(dir) ? offset * dir : 0;

export const walk = (dir:Direction, offset:number):position => ({
	x: walkDirection([Direction.Left, Direction.Right], dir, offset),
	y: walkDirection([Direction.Up, Direction.Down], dir, offset)
});