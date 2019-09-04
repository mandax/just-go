import * as React from "react";
import theme from "../theme";
import { Children } from "../types";
import { px, rem, percent } from "../theme/units";
import { Direction } from "../theme/position";
import { roundedBorder } from "../theme/container"
import { shadowOn } from "../theme/shadow";

const cardCSS = (isSelected:boolean): React.CSSProperties => ({
	...roundedBorder(),
	...shadowOn(Direction.Down),

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
	
	const selectCard = () => {
		setSelected(true);
		props.onSelect;
	}

	const deselectCard = () => {
		setSelected(false);
		props.onDeselect;
	}

	const onClick = (event:React.MouseEvent) => {
		if (isSelected) {
			deselectCard();
		} else {
			selectCard();
		}
	}

	return (
		<div onClick={onClick} style={cardCSS(isSelected)}>
			<div>{props.children}</div>
		</div>
	);
}
