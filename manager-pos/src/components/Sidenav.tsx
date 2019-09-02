import * as React from "react";
import theme from "../theme";

import { IconType } from "react-icons";
import { FiMenu, FiX, FiPercent } from "react-icons/fi";
import { Link } from "react-router-dom";
import { container, shadowOn, verticalCenter } from "../theme/mixins";
import { rem, seconds, Direction } from "../theme/utils";

const sidenavCSS = (isOpen: boolean): React.CSSProperties => ({
	...container()(0, 1.5),
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

const SidenavContext = React.createContext(false);

export interface SidenavProps {
	children: React.ReactElement[]
}

export const Sidenav = (props: SidenavProps) => {

	const [isOpen, setOpenState] = React.useState(false);

	return (
		<SidenavContext.Provider value={isOpen}>
			<div id="comp_sidenav" style={sidenavCSS(isOpen)}>

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

const linkCSS:React.CSSProperties = {
	display: 'block',
	margin: '1.5rem 0',
	cursor: 'pointer',
	position: 'relative',
	color: theme.COLOR_DARK
}

const activeBarCSS = (isActive: boolean): React.CSSProperties => ({
	position: 'absolute',
	top: 0,
	right: 0,
	width: rem(0.5),
	opacity: isActive ? 1 : 0,
	height: rem(theme.SIDENAV_ICON_SIZE),
	backgroundColor: theme.COLOR_PRIMARY,
	transitionProperty: 'opacity transform',
	transition: `${theme.ANIMATION_SPEED} ease-in-out`,
	transform: `scaleX(${isActive ? 1 : 0})`
})

const textCSS = (isOpen: boolean): React.CSSProperties => ({
	display: 'inline-block',
	opacity: isOpen ? 1 : 0,
	pointerEvents: isOpen ? 'auto' : 'none',
	fontSize: rem(theme.SIDENAV_FONT_SIZE),
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

	const isOpen = React.useContext(SidenavContext);

	return (
		<Link
			to={props.to}
			onClick={() => props.onClick && props.onClick()}
			style={linkCSS}>
			<div style={activeBarCSS(window.location.pathname === props.to)}></div>
			<div style={iconCSS(isOpen)}><props.icon size={rem(theme.SIDENAV_ICON_SIZE)} /></div>
			<div style={textCSS(isOpen)}>{props.children}</div>
		</Link>
	);
} 