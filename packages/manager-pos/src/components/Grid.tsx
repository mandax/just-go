import * as React from "react";
import theme from "../theme";
import { rem } from "../theme/units";
import { Children } from "../types";

const gridCSS = (columns: number = 2): React.CSSProperties => ({
	display: 'grid',
	gridGap: rem(theme.GRID_DEFAULT_GAP),
	gridTemplateColumns: `repeat(${columns}, 1fr)`
})

export interface GridProps {
	columns: number
	children: Children
}

export const Grid = (props: GridProps): React.ReactElement => (
	<div style={gridCSS(props.columns)}>
		{props.children}
	</div>
);