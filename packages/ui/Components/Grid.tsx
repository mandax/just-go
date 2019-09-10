import * as React from "react";
import { Children } from "../types";
import { gridCSS } from "../Theme/grid";

export type RowType = number | string;

export interface GridProps {
	columns: number,
	rows?: RowType,
	children: Children
}

export const Grid = (props: GridProps): React.ReactElement => (
	<div style={gridCSS(props.columns, props.rows)}>
		{props.children}
	</div>
);
