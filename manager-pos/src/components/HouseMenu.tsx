import * as React from "react";
import { Sidenav } from "./Sidenav";
import { containerAccent } from "../theme/mixins";

const houseMenuCSS:React.CSSProperties = {
	position: 'relative',
	height: '100vh',
	maxHeight: '100%'
}

export const HouseMenu = ():React.ReactElement => {
	return (
		<div style={houseMenuCSS}>
			<Sidenav alwaysOpen={true} container={containerAccent}>
				<div>asdasd</div>
			</Sidenav>
		</div>
	)
};