import * as React from "react";
import theme from "./index";

import { rem, seconds, px } from "../Theme/units";
import { Direction } from "../Theme/position";
import { colorByState, fontMedium } from "../Theme/font";
import { shadowOn, Blur } from "../Theme/shadow";
import { verticalCenter, container as containerGenerator, ContainerGenerator } from "../Theme/container";

export const sidenavCSS = (
	isOpen: boolean,
	fixed: boolean = false,
	container: ContainerGenerator = containerGenerator
): React.CSSProperties => {

	const xTranslation = (theme.SIDENAV_FULL_WIDTH - theme.SIDENAV_CLOSE_WIDTH);

	return {
		...container(0, 0),
		...shadowOn(Direction.Right, Blur.Medium),

		left: `${rem(theme.SIDENAV_CLOSE_WIDTH - theme.SIDENAV_FULL_WIDTH)}`,
		transform: `translateX(${isOpen ? rem(xTranslation) : 0})`,
		top: 0,
		zIndex: fixed ? 50 : 'auto',
		minWidth: rem(theme.SIDENAV_FULL_WIDTH),
		height: '100%',
		position: fixed ? 'fixed' : 'absolute',
		transition: `${seconds(theme.ANIMATION_SPEED)} transform ease-in-out`
	}
}

export const contentCSS: React.CSSProperties = {
	...verticalCenter,
	width: '100%'
}

export const buttonCSS: React.CSSProperties = {
	display: 'block',
	margin: '1.5rem 0',
	cursor: 'pointer',
	color: theme.COLOR_PRIMARY
}

export const activeBarCSS = (isActive: boolean): React.CSSProperties => ({
	position: 'absolute',
	zIndex: -1,
	marginTop: rem(-theme.SIDENAV_FONT_SIZE / 1.7),
	right: 0,
	width: rem(0.2),
	opacity: isActive ? 1 : 0,
	height: rem(theme.SIDENAV_ICON_SIZE * 2),
	backgroundColor: theme.COLOR_BRAND,
	borderRadius: px(10),
	transition: `
		opacity ${seconds(theme.ANIMATION_SPEED)} ease-in-out,
		transform ${seconds(theme.ANIMATION_SPEED)} ease-in-out
	`,
	transform: `scaleY(${isActive ? 1 : 0})`
})

export const textCSS = (
	isOpen: boolean,
	isActive: boolean,
	idx: number = 0
): React.CSSProperties => {
	const delay = seconds((theme.ANIMATION_SPEED / 4) * idx);
	const duration = seconds(theme.ANIMATION_SPEED * 1.5);

	return {
		...fontMedium(theme.SIDENAV_FONT_SIZE, theme.FONT_CONDENSED),
		...colorByState(isActive),

		display: 'inline-block',
		opacity: isOpen ? 1 : 0,
		pointerEvents: isOpen ? 'auto' : 'none',
		marginLeft: rem(theme.DEFAULT_HORIZONTAL_PADDING * 0.4),
		transition: `
			opacity ${duration} ease-out ${delay},
			transform ${duration} ease-out ${delay}
		`,
		transform: `translateX(${isOpen ? rem(1) : rem(-theme.SIDENAV_FULL_WIDTH)})`
	}
}

export const iconCSS = (isOpen: boolean, isActive: boolean): React.CSSProperties => {
	const translateVal = rem(theme.SIDENAV_FULL_WIDTH - theme.SIDENAV_CLOSE_WIDTH / 1.5);
	return {
		...colorByState(isActive),

		verticalAlign: 'middle',
		display: 'inline-block',
		transform: `translateX(${isOpen ? rem(1) : translateVal})`,
		transition: `
			transform ${seconds(theme.ANIMATION_SPEED)} ease-in-out,
			color ${seconds(theme.ANIMATION_SPEED)} ease-in-out
		`
	}
};