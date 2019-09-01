import * as React from "react";
import { IconType } from "react-icons";

const sidenavCSS = (isOpen:boolean):React.CSSProperties => ({
	top: 0,
	left: 0,
	width: '18rem',
	transform: isOpen ? 'translateX(0)' : 'translateX(-12rem)',
	height: '100%',
	position: 'fixed',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	transition: '300ms transform ease-in'
})

const linksCSS = (isOpen:boolean):React.CSSProperties => ({
	transform: isOpen ? 'translateX(0)' : 'translateX(8rem)',
	transition: '250ms transform ease-in'
})

export interface SidenavProps { 
	children:React.ReactElement 
}

export const Sidenav = (props:SidenavProps) => {

	const [isOpen, setOpenState] = React.useState(false);

	return (
		<div style={sidenavCSS(isOpen)} 
			onMouseOver={() => setOpenState(true)}
			onMouseOut={() => setOpenState(false)}>

			<div style={linksCSS(isOpen)}>
				{props.children}
			</div>

		</div>
	);
}

export interface SidenavLinkProps {
	to: string
	icon: IconType
	children: string
}

export const SidenavLink = (props:SidenavLinkProps) => 
	<div>
		<span>{props.icon}</span>
		<span>{props.children}</span>
	</div>;