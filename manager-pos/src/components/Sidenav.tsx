import * as React from "react";
import theme from "../theme";

import { A } from "hookrouter";
import { IconType } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import { container, shadowOn, verticalCenter, fontMedium } from "../theme/mixins";
import { rem, seconds, Direction, px } from "../theme/utils";

const sidenavCSS = (isOpen: boolean): React.CSSProperties => ({
	...container(0, 0),
	...shadowOn(Direction.Right, theme.SHADOW_BLUR_LARGE),

	top: 0,
	left: `${rem(theme.SIDENAV_CLOSE_WIDTH - theme.SIDENAV_FULL_WIDTH)}`,
	width: rem(theme.SIDENAV_FULL_WIDTH),
	transform: isOpen ? `translateX(${rem(theme.SIDENAV_FULL_WIDTH - theme.SIDENAV_CLOSE_WIDTH)})` : `translateX(0)`,
	height: '100%',
	position: 'fixed',
	transition: '300ms transform ease-in-out'
})

const sidenavContentCSS: React.CSSProperties = {
	...verticalCenter,
	width: '100%'
}

const SidenavContext = React.createContext([]);

export interface SidenavProps {
	children: React.ReactElement[]
}

export const Sidenav = (props: SidenavProps) => {

	const [isOpen, setOpenState] = React.useState(false);

	return (
		<SidenavContext.Provider value={[isOpen, setOpenState]}>
			<div style={sidenavCSS(isOpen)}>

				<SidenavLink
					icon={isOpen ? FiX : FiMenu}
					onClick={() => setOpenState(!isOpen)}>
					Close
				</SidenavLink>

				<div style={sidenavContentCSS}>
					{props.children}
				</div>
			</div>
		</SidenavContext.Provider>
	);
}

const linkCSS: React.CSSProperties = {
	display: 'block',
	margin: '1.5rem 0',
	cursor: 'pointer',
	position: 'relative',
	color: theme.COLOR_DARK
}

const activeBarCSS = (isActive: boolean): React.CSSProperties => ({
	position: 'absolute',
	zIndex: -1,
	top: rem(-theme.SIDENAV_FONT_SIZE / 1.7),
	right: 0,
	width: rem(0.2),
	opacity: isActive ? 1 : 0,
	height: rem(theme.SIDENAV_ICON_SIZE * 2),
	backgroundColor: theme.COLOR_PRIMARY,
	borderRadius: px(10),
	transitionProperty: 'opacity transform',
	transition: `${seconds(theme.ANIMATION_SPEED)} ease-in-out`,
	transform: `scaleY(${isActive ? 1 : 0})`
})

const textCSS = (isOpen: boolean): React.CSSProperties => ({
	...fontMedium(theme.SIDENAV_FONT_SIZE, theme.FONT_CONDENSED),

	display: 'inline-block',
	opacity: isOpen ? 1 : 0,
	pointerEvents: isOpen ? 'auto' : 'none',
	marginLeft: rem(theme.DEFAULT_HORIZONTAL_PADDING / 1.4),
	transitionDelay: seconds(theme.ANIMATION_SPEED / 2),
	transition: `${seconds(theme.ANIMATION_SPEED * 2)} opacity ease-in-out`
})

const iconCSS = (isOpen: boolean): React.CSSProperties => ({
	verticalAlign: 'middle',
	display: 'inline-block',
	transform: isOpen ? 'translateX(1rem)' : `translateX(${rem(theme.SIDENAV_FULL_WIDTH - theme.SIDENAV_CLOSE_WIDTH / 1.5)})`,
	transition: `${seconds(theme.ANIMATION_SPEED)} transform ease-in-out`
})

export interface SidenavLinkProps {
	to?: string
	onClick?: Function
	icon: IconType
	children?: string
}

export const SidenavLink = (props: SidenavLinkProps) => {

	const [isOpen, setOpenState] = React.useContext(SidenavContext);
	const isActive = window.location.pathname === props.to;

	const onClickEvent = () => {
		props.onClick && props.onClick();
		isOpen && setOpenState(false);
	}

	return (
		<A href={props.to || ''}
			onClick={onClickEvent}
			style={linkCSS}>
			<div style={activeBarCSS(isActive)}></div>
			<div style={iconCSS(isOpen)}><props.icon size={rem(theme.SIDENAV_ICON_SIZE)} /></div>
			<div style={textCSS(isOpen)}>{props.children}</div>
		</A>
	);
} 