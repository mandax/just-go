import * as React from "react";
import theme from "../theme";
import { Children } from "../types";
import { px, rem, percent } from "../theme/units";
import { Direction } from "../theme/position";
import { roundedBorder } from "../theme/container"
import { shadowOn } from "../theme/shadow";

const cardCSS = (canSelect: boolean, isSelected: boolean): React.CSSProperties => ({
	...roundedBorder(),
	...shadowOn(Direction.Down),

	cursor: canSelect ? 'pointer' : 'normal',
	background: theme.COLOR_BASE,
	padding: rem(theme.CARD_PADDING),
	borderRadius: px(theme.CARD_RADIUS)
})

const cardImageCSS = (image: string): React.CSSProperties => ({
	...roundedBorder(theme.CARD_RADIUS),

	width: percent(1),
	margin: '0 auto',
	height: rem(theme.CARD_IMAGE_HEIGHT),
	backgroundImage: `url(${image})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center'
})

export interface CardImageProps {
	src: string
}

export const CardImage = (props: CardImageProps): React.ReactElement =>
	<div style={cardImageCSS(props.src)}></div>;


export interface CardProps {
	children: Children
	onSelect?: Function
	onDeselect?: Function
}

export const Card = (props: CardProps): React.ReactElement => {
	const [isSelected, setSelected] = React.useState(false);

	const selectCard = (event: React.MouseEvent) => {
		setSelected(true);
		props.onSelect && props.onSelect(event);
	}

	const deselectCard = (event: React.MouseEvent) => {
		setSelected(false);
		props.onDeselect && props.onDeselect(event);
	}

	const onClick = (event: React.MouseEvent) => {
		isSelected ? deselectCard(event) : selectCard(event);
	}

	return (
		<div onClick={onClick} style={cardCSS(Boolean(props.onSelect), isSelected)}>
			<div>{props.children}</div>
		</div>
	);
}
