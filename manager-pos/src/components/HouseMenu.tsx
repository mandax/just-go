import * as React from "react";
import { Children } from "../types";
import { container, containerTransparent } from "../theme/container"
import { shadow } from "../theme/shadow";
import { titleSpacing } from "../theme/font";
import { Card, CardImage } from "./Card";
import { Grid } from "./Grid";

interface Item {
	id: string
	created_at: Date
	modified_by: Date
	name: string
	category: string
	picture: string[]
	max_discount: number
	price: number
	cost: number
}

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
						<h4>Triple Dipper™</h4>
						<p>Why choose one when you can choose three? Select three appetizers and enjoy! Served with dipping sauces.</p>
					</Card>
				</Grid>
			</div>

		</div>
	)
};