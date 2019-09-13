import * as React from "react";
import Theme from "@justgo/ui/Theme";

import { navigate } from "hookrouter";
import { GetItems, Items, Item, NewItem, UpdateItem, NewEmptyItem, CreateItem } from "@justgo/api/items";
import { GetCategories, Category } from "@justgo/api/categories";
import { FiPlusCircle } from "react-icons/fi";

import { containerTransparent } from "@justgo/ui/Theme/container"
import { titleSpacing, limitChar, font } from "@justgo/ui/Theme/font";
import { SideContent } from "@justgo/ui/Components/SideContent";
import { Card, CardImage } from "@justgo/ui/Components/Card";
import { Grid } from "@justgo/ui/Components/Grid";
import { Input } from "@justgo/ui/Components/Input";
import { Header } from "@justgo/ui/Components/Header";
import { TextArea } from "@justgo/ui/Components/TextArea";
import { Button, ButtonType } from "@justgo/ui/Components/Button";
import { rem } from "@justgo/ui/Theme/units";
import { Select, Option, Selected } from "@justgo/ui/Components/Select";

export interface MenuProps {
	id?: number
}

type MenuForm = Item | NewItem | null;

// TODO: Extract responsive rules to helpers
const getColumnsByResolution = () => {
	const xSize = window.innerWidth;
	if (xSize < 600) return 1;
	if (xSize < 800) return 2;
	if (xSize < 1180) return 4;
	if (xSize < 1600) return 5;
	if (xSize < 1800) return 6;
	return 7;
}

const getContentWidthByResolution = () => {
	const xSize = window.innerWidth;
	if (xSize < 600) return 75;
	if (xSize < 800) return 80;
	if (xSize < 1200) return 50;
	return 30;
}


export const Menu = (props: MenuProps): React.ReactElement => {

	const initialForm: MenuForm = null;
	const initialItems: Items = {};

	const [form, setForm] = React.useState(initialForm);
	const [items, setItems] = React.useState(initialItems);
	const [categories, setCategories] = React.useState([]);
	const [isContentOpen, setContentOpen] = React.useState(false);
	const [columns, setColumns] = React.useState(getColumnsByResolution());

	const openForm = (item: MenuForm) => {
		setForm(item);
		setContentOpen(true);
		item.id && navigate(`/menu/${item.id}`);
	}

	const closeForm = async () => {
		setForm(initialForm);
		setContentOpen(false);
		navigate('/menu');
	}

	const fetchData = async (preventOpenForm?: boolean) => {
		const itemsData = await GetItems() as Items;
		const categoriesData = await GetCategories() as Category[];
		setItems(itemsData);
		setCategories(categoriesData);

		if (props.id && !preventOpenForm) {
			openForm(getItemById(Number(props.id), itemsData));
		}
	}

	const getItemById = (id: number, data: Items) =>
		Object.values(data).flat()
			.find((item) => item.id === id);

	const isSelected = (item: Item): boolean => form && form.id === item.id;

	const submit = async () => {
		let newItem;

		if (form.id) {
			newItem = await UpdateItem(Number(form.id), form as Item);
		} else {
			newItem = await CreateItem(form as NewItem);
		}
		
		if (!newItem.error) {
			closeForm();
			fetchData(true);
		}
	}

	const onChangeCategory = (selected: Selected<number>) => 
		setForm({ ...form, category_name: selected.name, category_id: selected.value })

	const addNewDish = async () => {
		await closeForm();
		openForm(NewEmptyItem);
	}

	React.useEffect(() => {
		fetchData();
		window.addEventListener('resize', () => setColumns(getColumnsByResolution()))
	}, []);

	return (
		<div>

			<Header>
				<h1>Menu</h1>
				<p>Manage your restaurant menu</p>
			</Header>

			<div style={contentCSS}>

				<Button type={ButtonType.Accent} onClick={addNewDish} icon={FiPlusCircle}>Dish</Button>

				{categories.map((category, ci) => (
					<>
						<h2 style={titleSpacing(4, 2)} key={`cat_${ci}`}>{category.name}</h2>

						<Grid columns={columns}>
							{items[category.id].map((item: Item, i: number) =>
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
				width={getContentWidthByResolution()}
				open={isContentOpen} >

				<Button type={ButtonType.Accent} onClick={() => submit()}>Save</Button>
				<Button onClick={() => closeForm()}>Close</Button>

				<div style={formCSS}>
					{form && [
						<Input
							type="text"
							label="Name"
							focus={true}
							placeholder="Type the name of the Dish"
							value={form.name as string}
							onChange={(value: string) => setForm({ ...form, name: value })} />,

						<Select<number>
							label="Category"
							onChange={onChangeCategory} 
							value={{ name: form.category_name, value: form.category_id}}>
							{categories.map((category, i) => 
								<Option key={`cat_${i}`} value={category.id}>{category.name}</Option>
							)}
						</Select>,
						
						<TextArea
							label="Description"
							placeholder="Describe how good it is!"
							onChange={(value: string) => setForm({ ...form, description: value })}>
							{form.description}
						</TextArea>,

						<Input
							type="number"
							label="Price"
							placeholder="20"
							step={0.01} min={0}
							value={form.price as string}
							onChange={(value: string) => setForm({ ...form, price: value })} />,
						
						<Input
							type="number"
							label="Cost"
							step={0.01} min={0}
							placeholder="10"
							value={form.cost as string}
							onChange={(value: string) => setForm({ ...form, cost: value })} />,
						
						<Input
							type="number"
							min={0} max={100}
							label="Max discount allowed (%)"
							placeholder="5"
							value={form.max_discount as string}
							onChange={(value: string) => setForm({ ...form, max_discount: value })} />
					]}
				</div>
			</SideContent>

		</div>
	)
};

const formCSS: React.CSSProperties = {
	paddingTop: rem(2)
}

const contentCSS: React.CSSProperties = {
	...containerTransparent()
}