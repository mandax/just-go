import * as React from "react";
import Theme from "@justgo/ui/Theme";

import { navigate } from "hookrouter";
import { GetItems, Items, Item, NewItem } from "@justgo/api/items";

import { containerTransparent } from "@justgo/ui/Theme/container"
import { titleSpacing, limitChar, font } from "@justgo/ui/Theme/font";
import { SideContent } from "@justgo/ui/Components/SideContent";
import { Card, CardImage } from "@justgo/ui/Components/Card";
import { Grid } from "@justgo/ui/Components/Grid";
import { Input } from "@justgo/ui/Components/Input";
import { Header } from "@justgo/ui/Components/Header";
import { Button, ButtonType } from "@justgo/ui/Components/Button";

export interface MenuProps {
	id?: number
}

type MenuForm = Item | NewItem | null;

export const Menu = (props: MenuProps): React.ReactElement => {

	const initialForm: MenuForm = null;
	const initialItems: Items = {};

	const [form, setForm] = React.useState(initialForm);
	const [items, setItems] = React.useState(initialItems);
	const [isContentOpen, setContentOpen] = React.useState(false);

	const openForm = (item: MenuForm) => {
		setForm(item);
		setContentOpen(true);
		navigate(`/menu/${item.id}`);
	}

	const closeForm = () => {
		setForm(initialForm);
		setContentOpen(false);
		navigate('/menu');
	}

	const fetchData = async () => {
		const data = await GetItems() as Items;
		setItems(data);

		if (props.id) {
			openForm(getItemById(Number(props.id), data));
		}
	}

	const getItemById = (id: number, data: Items) =>
		Object.values(data).flat()
			.find((item) => item.id === id);

	const isSelected = (item: Item): boolean => form && form.id === item.id;

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
									selected={isSelected(item)}
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

			<SideContent
				width={20}
				open={isContentOpen} >

				<Button type={ButtonType.Accent} onClick={() => closeForm()}>Save</Button>

				<Button onClick={() => closeForm()}>Close</Button>

				<div style={formCSS}>
					{form &&
						<>
							<Input
								type="text"
								label="name"
								focus={true}
								placeholder="name"
								value={form.name as string}
								onChange={(value) => setForm({ ...form, name: value })}
							/>
							<Input
								type="text"
								label="description"
								placeholder="description"
								value={form.description as string}
								onChange={(value) => setForm({ ...form, description: value })}
							/>
							<Input
								type="text"
								label="price"
								placeholder="price"
								value={form.price as string}
								onChange={(value) => setForm({ ...form, price: value })}
							/>
							<Input
								type="text"
								label="cost"
								placeholder="cost"
								value={form.cost as string}
								onChange={(value) => setForm({ ...form, cost: value })}
							/>
							<Input
								type="text"
								label="max_discount"
								placeholder="max_discount"
								value={form.max_discount as string}
								onChange={(value) => setForm({ ...form, max_discount: value })}
							/>

							{/* TODO: picture
							TODO: category */}
						</>
					}
				</div>
			</SideContent>

		</div>
	)
};

const formCSS: React.CSSProperties = {

}

const contentCSS: React.CSSProperties = {
	...containerTransparent()
}