import * as React from "react";
import theme from "../Theme";
import { px, rem, percent, seconds } from "../Theme/units";
import { Direction } from "../Theme/position";
import { roundedBorder } from "../Theme/container"
import { shadowOn, Blur } from "../Theme/shadow";

export const cardCSS = (canSelect: boolean, isSelected: boolean): React.CSSProperties => {

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
};

export const cardImageCSS = (image: string): React.CSSProperties => ({
	...roundedBorder(theme.CARD_RADIUS),

	width: percent(1),
	margin: '0 auto',
	height: rem(theme.CARD_IMAGE_HEIGHT),
	backgroundImage: `url(${image})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center'
});