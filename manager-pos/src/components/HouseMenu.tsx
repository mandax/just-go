import * as React from "react";
import theme from "../theme";
import { Children, Item } from "../types";
import { container, containerTransparent } from "../theme/container"
import { shadow } from "../theme/shadow";
import { titleSpacing, limitChar, font } from "../theme/font";
import { Card, CardImage } from "./Card";
import { Grid } from "./Grid";
import { Sidenav } from "./Sidenav";

interface State {
	items: Item[]
}

const initialState: State = {
	items: [
		{
			id: 'SXs',
			created_at: new Date(),
			modified_by: new Date(),
			name: 'Comida 1',
			category: 'Food',
			picture: [''],
			max_discount: 0.1,
			price: 12,
			cost: 8
		}
	]
};

export interface HeaderProps {
	children: Children
}

const headerCSS:React.CSSProperties = {
	...container(),
	...shadow()
}

const contentCSS:React.CSSProperties = {
	...containerTransparent()
}

export const Header = (props:HeaderProps) => 
	(<div style={headerCSS}>{props.children}</div>)

export const HouseMenu = (): React.ReactElement => {
	return (
		<div>
			
			<Header>
				<h1>Menu</h1>
				<p>Manage your restaurant menu</p>
			</Header>

			<div style={contentCSS}>

				<h2 style={titleSpacing()}>Bebidas</h2>
				<Grid columns={8}>
					<Card>
						<CardImage src="https://static.olocdn.net/menu/chilis/a30644e222a6f6d261f13b5bf1f0b089.jpg" />
						<h4 style={titleSpacing(0.8, 0.4)}>Triple Dipper™</h4>
						<p style={font(0.8)}>{limitChar("Why choose one when you can choose three? Select three appetizers and enjoy! Served with dipping sauces.", theme.CARD_DESC_CHAR_LIMIT)}</p>
					</Card>
				</Grid>
			</div>

			<Sidenav fixed={true}>
				
			</Sidenav>

		</div>
	)
};