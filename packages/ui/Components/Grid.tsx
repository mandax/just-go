import * as React from "react";
import theme from "../Theme";
import { rem } from "../Theme/units";
import { Children } from "../types";

export interface GridProps {
	columns: number
	children: Children
}

export const Grid = (props: GridProps): React.ReactElement => {
	console.log(props.columns);
	return (
		<div style={gridCSS(props.columns)}>
			{props.children}
		</div>
	)
};

const gridCSS = (columns: number = 2): React.CSSProperties => ({
	display: 'grid',
	gridGap: rem(theme.GRID_DEFAULT_GAP),
	gridTemplateColumns: `repeat(${columns}, 1fr)`
})
