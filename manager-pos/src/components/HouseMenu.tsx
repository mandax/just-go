import * as React from "react";
import { IconType } from "react-icons";
import theme from "../theme"
import * as css from "../theme/mixins";
import { px, rem, percent } from "../theme/utils";

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

const initialState:State = {
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

const containerCSS:React.CSSProperties = {
	...css.container(),
	...css.content,
	...css.font()
}

const cardCSS:React.CSSProperties = {
	...css.shadow(theme.SHADOW_BLUR_MEDIUM),
	...css.roundedBorder(),
	borderRadius: px(theme.CARD_BORDER_RADIUS)
}

const cardImageCSS = (image:string):React.CSSProperties => ({
	...css.roundedBorder(theme.CARD_BORDER_RADIUS, theme.CARD_BORDER_RADIUS),
	width: percent(1),
	height: rem(theme.CARD_IMAGE_HEIGHT),
	backgroundImage: `url(${image})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center'
})

export interface CardAction {
	name: string
	icon: IconType
	action: Function
}

export interface CardProps {
	title: string
	image: string
	children?: React.ReactElement | HTMLElement
	actions?: CardAction[]
}

export const Card = (props:CardProps):React.ReactElement => {
	return (
		<div style={cardCSS}>
			<div style={cardImageCSS(props.image)}></div>
			<h4>{props.title}</h4>
			<div>{props.children}</div>
			<div>{props.actions ? props.actions.map(CardAction) : ''}</div>
		</div>
	);
}

export const CardAction = (action:CardAction):React.ReactElement =>
<button onClick={() => action.action()}>{action.icon}</button>


const gridCSS = (columns: number = 2):React.CSSProperties => ({
	display: 'grid',
	gridGap: rem(theme.GRID_DEFAULT_GAP),
	gridTemplateColumns: `repeat(${columns}, 1fr)`
})

export interface GridProps {
	columns: number
	children: React.ReactElement | HTMLElement | React.ReactElement[] | HTMLElement[]
}

export const Grid = (props:GridProps):React.ReactElement => (
	<div style={gridCSS(props.columns)}>
		{props.children}
	</div>
);

export const HouseMenu = ():React.ReactElement => {

	return (
		<div style={containerCSS}>

			<h1>Menu</h1>
			<p>Manage your restaurant menu</p>

			<div>
				<h2 style={css.titleSpacing(3)}>Bebidas</h2>
				<Grid columns={4}>
					<Card
						title="teste"
						image="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"
					/>
				</Grid>
			</div>
		
		</div>
	)
};