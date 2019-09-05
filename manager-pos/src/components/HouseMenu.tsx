import * as React from "react";
import theme from "../theme";
import { Children, Item, NewItem } from "../types";
import { container, containerTransparent } from "../theme/container"
import { shadow } from "../theme/shadow";
import { titleSpacing, limitChar, font } from "../theme/font";
import { Card, CardImage } from "./Card";
import { Grid } from "./Grid";
import { SideContent } from "./SideContent";

interface State {
	items: Item[]
}

const initialState: State = {
	items: [
		{
			id: 'SXs',
			created_at: new Date(),
			modified_by: new Date(),
			name: 'Triple Dipper™',
			description: 'Why choose one when you can choose three? Select three appetizers and enjoy! Served with dipping sauces.',
			category: 'Food',
			pictures: ['https://static.olocdn.net/menu/chilis/a30644e222a6f6d261f13b5bf1f0b089.jpg'],
			max_discount: 0.1,
			price: 12,
			cost: 8
		}
	]
};

export interface HeaderProps {
	children: Children
}

const headerCSS: React.CSSProperties = {
	...container(),
	...shadow()
}

const contentCSS: React.CSSProperties = {
	...containerTransparent()
}

export const Header = (props: HeaderProps) =>
	(<div style={headerCSS}>{props.children}</div>)

type MenuForm = Item | NewItem;

const emptyForm: NewItem = {
	name: '',
	description: '',
	category: '',
	pictures: [],
	max_discount: 0,
	price: 0,
	cost: 0
};

export const HouseMenu = (): React.ReactElement => {

	const initialForm: MenuForm = emptyForm;
	
	const [form, setForm] = React.useState(initialForm);
	const [isContentOpen, setContentOpen] = React.useState(false);

	const state = initialState;

	const openForm = (item: Item) => {
		setForm(item);
		setContentOpen(true);
	}

	return (
		<div>

			<Header>
				<h1>Menu</h1>
				<p>Manage your restaurant menu</p>
			</Header>

			<div style={contentCSS}>

				<h2 style={titleSpacing()}>Bebidas</h2>

				<Grid columns={8}>

					{state.items.map((item) => 	
						<Card 
							onDeselect={() => setContentOpen(false)}
							onSelect={() => openForm(item)}>
								
							<CardImage src={item.pictures[0]} />

							<h4 style={titleSpacing(0.8, 0.4)}>{item.name}</h4>
							<p style={font(theme.CARD_DESCRIPTION_SIZE)}>
								{limitChar(item.description, theme.CARD_DESCRIPTION_LIMIT)}
							</p>
						</Card>
					)}
				</Grid>
			</div>

			<SideContent open={isContentOpen} >
				<button onClick={() => setContentOpen(false)}>Close</button>
				<h3>{form.category}</h3>
				<h2>{form.name}</h2>
				<p>{form.max_discount}</p>
				<p>{form.price} / {form.cost}</p>
				<p>{form.description}</p>
			</SideContent>

		</div>
	)
};