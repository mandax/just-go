import * as React from "react";
import theme from "../Theme";
import { Children } from "../types";
import { px, rem, percent, seconds } from "../Theme/units";
import { Direction } from "../Theme/position";
import { roundedBorder } from "../Theme/container"
import { shadowOn, Blur } from "../Theme/shadow";

export interface CardImageProps {
	src: string
}

export const CardImage = (props: CardImageProps): React.ReactElement =>
	<div style={cardImageCSS(props.src)}></div>;


export interface CardProps {
	children: Children
	selected?: boolean
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

	React.useEffect(() => {
		setSelected(props.selected);
	}, [props.selected]);

	return (
		<div onClick={onClick} style={cardCSS(Boolean(props.onSelect), isSelected)}>
			<div>{props.children}</div>
		</div>
	);
}

const cardCSS = (canSelect: boolean, isSelected: boolean): React.CSSProperties => {

	const animationSpeed = seconds(theme.ANIMATION_SPEED * 0.6);
	const selectedCard: React.CSSProperties = {
		...shadowOn(Direction.Down, Blur.Large),
		
		transform: `scale(${theme.CARD_SELECTED_EXPAND})`,
		borderColor: theme.COLOR_BRAND
	}
	
	return {
		...roundedBorder(),
		...shadowOn(Direction.Down),
		
		borderWidth: px(theme.CARD_SELECTED_BORDER_SIZE),
		borderStyle: 'solid',
		borderColor: theme.COLOR_BASE,
		cursor: canSelect ? 'pointer' : 'normal',
		background: theme.COLOR_BASE,
		padding: rem(theme.CARD_PADDING),
		borderRadius: px(theme.CARD_RADIUS),
		transition: `
			transform ${animationSpeed} ease-in-out,
			border ${animationSpeed} ease-in-out,
			box-shadow ${animationSpeed} ease-in-out
		`,

		...( isSelected ? selectedCard : {} )
	}
}

const cardImageCSS = (image: string): React.CSSProperties => ({
	...roundedBorder(theme.CARD_RADIUS),

	width: percent(1),
	margin: '0 auto',
	height: rem(theme.CARD_IMAGE_HEIGHT),
	backgroundImage: `url(${image})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center'
})
