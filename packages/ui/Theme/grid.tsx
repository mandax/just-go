import theme from "../Theme";
import { rem } from "../Theme/units";
import { RowType } from "../Components/Grid";

export const gridCSS = (
	columns: number = 2,
	rows: RowType = 'auto'
): React.CSSProperties => {

	const isRowString = typeof rows === 'string';
 
	return ({
		display: 'grid',
		gridGap: rem(theme.GRID_DEFAULT_GAP),
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gridTemplateRows: isRowString ? rows : `repeat(${columns}, 1fr)`
	})
}