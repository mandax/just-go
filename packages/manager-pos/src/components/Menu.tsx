import * as React from "react";
import Theme from "@justgo/ui/Theme";

import { navigate } from "hookrouter";
import { Children } from "@justgo/ui/types";
import { GetItems, Items, Item, NewItem } from "@justgo/api/items";

import { shadow } from "@justgo/ui/Theme/shadow";
import { container, containerTransparent } from "@justgo/ui/Theme/container"
import { titleSpacing, limitChar, font } from "@justgo/ui/Theme/font";
import { SideContent } from "@justgo/ui/Components/SideContent";
import { Card, CardImage } from "@justgo/ui/Components/Card";
import { Grid } from "@justgo/ui/Components/Grid";
import { Input } from "@justgo/ui/Components/Input";

export interface HeaderProps {
	children: Children
}

export interface MenuProps {
	id?: number
}

type MenuForm = Item | NewItem | null;

export const Header = (props: HeaderProps) =>
	(<div style={headerCSS}>{props.children}</div>)

export const Menu = (props: MenuProps): React.ReactElement => {

	const initialForm: MenuForm = null;
	const initialItems: Items = {};

	const [form, setForm] = React.useState(initialForm);
	const [items, setItems] = React.useState(initialItems);
	const [isContentOpen, setContentOpen] = React.useState(false);

	const openForm = (item: MenuForm) => {
		setForm(item);
		setContentOpen(true);
		navigate(`/${item.id}`);
	}

	const closeForm = () => {
		setForm(initialForm);
		setContentOpen(false);
		navigate('/');
	}

	const fetchData = async () => {
		const data = await GetItems();
		setItems(data as Items);

		if (props.id) {
			openForm(getItemById(props.id));
		}
	}

	const getItemById = (id: string | number) => Object
		.values(items).flat()
		.find((item) => item.id === Number(props.id));

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
									onDeselect={() => closeForm()}
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
				<button onClick={() => closeForm()}>Close</button>

				<>
					{!form ? '' :
						<>
							{['name', 'description', 'price', 'cost', 'max_discount']
								.map(input =>
									<Input
										type="text"
										label={input}
										placeholder={input}
										value={form[input] as string}
										onChange={(value) => setForm({ ...form, [input]: value })}
									/>
								)
							}

							{/* TODO: picture
							TODO: category */}
						</>
					}
				</>
			</SideContent>

		</div>
	)
};

const headerCSS: React.CSSProperties = {
	...container(),
	...shadow()
}

const contentCSS: React.CSSProperties = {
	...containerTransparent()
}