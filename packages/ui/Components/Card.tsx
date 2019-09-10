import * as React from "react";
import { Children } from "../types";
import { cardCSS, cardImageCSS } from "../Theme/card";

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
