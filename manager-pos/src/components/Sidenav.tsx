import * as React from "react";
import { IconType } from "react-icons";
import theme from "../theme";
import { primaryColorBase } from "../theme/mixins";
import { rem } from "../theme/utils";

const sidenavCSS = (isOpen: boolean): React.CSSProperties => ({
	top: 0,
	left: `${rem(theme.SIDENAV_CLOSE_WIDTH - theme.SIDENAV_FULL_WIDTH)}`,
	width: rem(theme.SIDENAV_FULL_WIDTH),
	transform: isOpen ? `translateX(${rem(theme.SIDENAV_FULL_WIDTH - theme.SIDENAV_CLOSE_WIDTH)})` : `translateX(0)`,
	height: '100%',
	position: 'fixed',
	padding: '2rem 0',
	transition: '300ms transform ease-in-out',
	...primaryColorBase()
})

const linksCSS = (isOpen: boolean): React.CSSProperties => ({
	transform: isOpen ? 'translateX(2rem)' : 'translateX(13.5rem)',
	transition: '300ms transform ease-in-out'
})

const SidenavContext = React.createContext(false);

export interface SidenavProps {
	children: React.ReactElement
}

export const Sidenav = (props: SidenavProps) => {

	const [isOpen, setOpenState] = React.useState(false);

	return (
		<SidenavContext.Provider value={isOpen}>
			<div id="comp_sidenav" style={sidenavCSS(isOpen)}
				onMouseOver={() => setOpenState(true)}
				onMouseOut={() => setOpenState(false)}>

				<div style={linksCSS(isOpen)}>
					{props.children}
				</div>

			</div>
		</SidenavContext.Provider>
	);
}

const iconCSS = (isOpen: boolean): React.CSSProperties => ({
	fontSize: rem(theme.SIDENAV_ICON_SIZE)
})

export interface SidenavLinkProps {
	to: string
	icon: IconType
	children: string
}

export const SidenavLink = (props: SidenavLinkProps) => {

	const isOpen = React.useContext(SidenavContext);

	return (
		<div id="comp_sidenav_link">
			<span style={iconCSS(isOpen)}><props.icon /></span>
			<span>{props.children}</span>
		</div>
	);
} 