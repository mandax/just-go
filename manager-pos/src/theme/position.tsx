
export enum Direction {
	Up = -1,
	Down = 1,
	Left = -1,
	Right = 1
}

export interface Position {
	x: number
	y: number
}

// export const dirToCssString = (dir: Direction) => ({
// 	[Direction.Up]: 'top',
// 	[Direction.Down]: 'bottom',
// 	[Direction.Left]: 'left',
// 	[Direction.Right]: 'right'
// }[dir])

export const walkDirection = (directions: Direction[], dir: Direction, offset: number) =>
	directions.includes(dir) ? offset * dir : 0;

export const walk = (dir: Direction, offset: number): Position => ({
	x: walkDirection([Direction.Left, Direction.Right], dir, offset),
	y: walkDirection([Direction.Up, Direction.Down], dir, offset)
});