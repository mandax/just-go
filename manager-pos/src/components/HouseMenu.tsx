import * as React from "react";
import theme from "../theme";
import { FiPlusCircle } from "react-icons/fi";
import { Children, Item, NewItem } from "../types";
import { container, containerTransparent } from "../theme/container"
import { shadow } from "../theme/shadow";
import { titleSpacing, limitChar, font } from "../theme/font";
import { Card, CardImage } from "./Card";
import { Grid } from "./Grid";
import { SideContent } from "./SideContent";
import { rem } from "../theme/units";
import { GetItems } from "../api/items";

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

type MenuForm = Item | NewItem | null;

const emptyForm: NewItem = {
	name: '',
	description: '',
	category: '',
	picture: '',
	max_discount: 0,
	price: 0,
	cost: 0
};

export const HouseMenu = (): React.ReactElement => {

	const initialForm: MenuForm = null;
	const initialItems: Item[] = [];

	const [form, setForm] = React.useState(initialForm);
	const [items, setItems] = React.useState(initialItems);
	const [isContentOpen, setContentOpen] = React.useState(false);

	const openForm = (item: MenuForm) => {
		setForm(item);
		setContentOpen(true);
	}

	const fetchData = async () => {
		const res = await GetItems();
		const json = await res.json();
		setItems(json.data);
		// setItems(
		// 	json.data.reduce((acc, item: Item) => {
		// 		acc[item.category] = [ ...acc[item.category], item ];
		// 		return acc;
		// 	}, {})
		// );
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>

			<Header>
				<h1>Menu</h1>
				<p>Manage your restaurant menu</p>
			</Header>

			<div style={contentCSS}>

				<h2 style={titleSpacing()}>Bebidas</h2>

				<Grid columns={6}>

					<Card
						key="new_item"
						selected={form === emptyForm}
						onDeselect={() => setContentOpen(false)}
						onSelect={() => openForm(emptyForm)}>

						<FiPlusCircle size={rem(theme.CARD_IMAGE_HEIGHT * 0.8)} />

						<h4 style={titleSpacing(0.8, 0.4)}>New Item</h4>
						<p style={font(theme.CARD_DESCRIPTION_SIZE)}>
							Add new item to your menu
						</p>
					</Card>

					<>
						{items.map((item, index) =>
							<Card
								key={`item_${index}`}
								selected={form === item}
								onDeselect={() => setContentOpen(false)}
								onSelect={() => openForm(item)}>
								<CardImage src={item.picture} />
								<h4 style={titleSpacing(0.8, 0.4)}>{item.name}</h4>
								<p style={font(theme.CARD_DESCRIPTION_SIZE)}>
									{limitChar(item.description, theme.CARD_DESCRIPTION_LIMIT)}
								</p>
							</Card>
						)}
					</>

				</Grid>
			</div>

			<SideContent open={isContentOpen} >
				<button onClick={() => setContentOpen(false)}>Close</button>

				<>
					{!form ? '' :
						<>
							<h3>{form.category}</h3>
							<h2>{form.name}</h2>
							<p>{form.max_discount}</p>
							<p>{form.price} / {form.cost}</p>
							<p>{form.description}</p>
						</>
					}
				</>
			</SideContent>

		</div>
	)
};