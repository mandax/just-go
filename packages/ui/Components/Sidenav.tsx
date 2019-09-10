import * as React from "react";
import theme from "../Theme";
import { Children } from "../types";

import { IconType } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import { rem } from "../Theme/units";
import { ContainerGenerator } from "../Theme/container";
import { sidenavCSS, iconCSS, buttonCSS, activeBarCSS, textCSS, contentCSS } from "../Theme/sidenav";

const SidenavContext = React.createContext([]);

export interface SidenavProps {
	children: Children
	fixed?: boolean
	alwaysOpen?: boolean
	verticalCenter?: boolean
	container?: ContainerGenerator
}

export const Sidenav = (props: SidenavProps) => {

	const [isOpen, setOpenState] = React.useState(props.alwaysOpen);
	const { children, fixed, container } = props;
	const canClose = () => !props.alwaysOpen;

	const toggleSidenav = () => {
		if (canClose()) {
			setOpenState(!isOpen);
		}
	}

	return (
		<SidenavContext.Provider value={[isOpen, toggleSidenav]}>
			<div style={sidenavCSS(isOpen, fixed, container)}>

				{canClose() && <SidenavLink
					icon={isOpen ? FiX : FiMenu}
					onClick={() => toggleSidenav()}>
					Close
				</SidenavLink>}

				<div style={contentCSS(props.verticalCenter)}>
					{children}
				</div>
			</div>
		</SidenavContext.Provider>
	);
}

export interface SidenavLinkProps {
	idx?: number
	onClick?: Function
	isActive?: boolean
	icon: IconType
	children?: string
}

export const SidenavLink = (props: SidenavLinkProps) => {

	const [isOpen, toggleSidenav] = React.useContext(SidenavContext);
	const [isActive, setActive] = React.useState(props.isActive);

	const onClickEvent = () => {
		props.onClick && props.onClick();
		isOpen && toggleSidenav();
	}

	React.useEffect(() => {
		setActive(props.isActive);
	}, [props.isActive])

	return (
		<button
			onClick={onClickEvent}
			style={buttonCSS}>
			<div style={activeBarCSS(isActive)}></div>
			<div style={iconCSS(isOpen, isActive)}><props.icon size={rem(theme.SIDENAV_ICON_SIZE)} /></div>
			<div style={textCSS(isOpen, isActive, props.idx)}>{props.children}</div>
		</button>
	);
};
