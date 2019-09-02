import * as React from "react";
import { container } from "../theme/mixins"

interface Item {
	id: string
	created_at: Date
	modified_by: Date
	name: string
	category: string
	picture: string[]
	max_discount: number
	price: number
	cost: number
}

interface State {
	items: Item[]
}

const initialState:State = {
	items: [
		{
			id: 'SXs',
			created_at: new Date(),
			modified_by: new Date(),
			name: 'Comida 1',
			category: 'Food',
			picture: [''],
			max_discount: 0.1,
			price: 12,
			cost: 8
		}
	]
};



export const HouseMenu = ():React.ReactElement => {

	return (
		<div style={container()}>
			
			<div>

			</div>
		
		</div>
	)
};