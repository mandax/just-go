import * as React from "react";
import Theme from "@justgo/ui/Theme";
import { Children } from "@justgo/ui/types";
import { container, containerTransparent } from "@justgo/ui/Theme/container"
import { shadow } from "@justgo/ui/Theme/shadow";
import { titleSpacing, limitChar, font } from "@justgo/ui/Theme/font";
import { Card, CardImage } from "@justgo/ui/Components/Card";
import { Grid } from "@justgo/ui/Components/Grid";
import { SideContent } from "@justgo/ui/Components/SideContent";
import { GetItems, Items, Item, NewItem } from "@justgo/api/items";

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
	picture: '',
	category_id: 0,
	max_discount: 0,
	price: '0',
	cost: '0'
};

export const Menu = (): React.ReactElement => {

	const initialForm: MenuForm = null;
	const initialItems: Items = {};

	const [form, setForm] = React.useState(initialForm);
	const [items, setItems] = React.useState(initialItems);
	const [isContentOpen, setContentOpen] = React.useState(false);

	const openForm = (item: MenuForm) => {
		setForm(item);
		setContentOpen(true);
	}

	const fetchData = async () => {
		const data = await GetItems();
		setItems(data as Items);
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

				{Object.keys(items).map((category, ci) => (
					<>
						<h2 style={titleSpacing(4, 2)} key={`cat_${ci}`}>{category}</h2>
						
						<Grid columns={6}>
							{items[category].map((item, i) => 
								<Card
									key={`item_${i}`}
									selected={form === item}
									onDeselect={() => setContentOpen(false)}
									onSelect={() => openForm(item)}>
									
									<CardImage src={item.picture} />

									<h4 style={titleSpacing(0.8, 0.4)}>{item.name}</h4>
									<p style={font(Theme.CARD_DESCRIPTION_SIZE)}>
										{limitChar(item.description, Theme.CARD_DESCRIPTION_LIMIT)}
									</p>
								</Card>
							)}
						</Grid>
					</>
				))}

			</div>

			<SideContent open={isContentOpen} >
				<button onClick={() => setContentOpen(false)}>Close</button>

				<>
					{!form ? '' :
						<>
							<input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
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