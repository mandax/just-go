import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Card, CardImage } from '../Components/Card';
import { Grid } from '../Components/Grid';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { container } from '../Theme/container';
import { titleSpacing } from '../Theme/font';

storiesOf('Components|Grid', module)
	.addDecorator(withKnobs)
	.add('default', () => {

		let config = {
			range: true,
			min: 2,
			max: 8,
			step: 1,
		};

		let columns = number('columns', 4, config)
		let activeRows = boolean('use rows', false)
		let rows = number('rows', 2, config)
		let content = new Array(20).fill(
			<Card>
				<CardImage src="https://www.demilked.com/magazine/wp-content/uploads/2019/01/5c41e16e8c8f3-powder-dog-photography-animals-coverimage.jpg" />
				<h3 style={titleSpacing(1)}>Hello</h3>
				<div>his is a cool fancy card.</div>
			</Card>
		)

		return (
			<div style={container()}>
				<p>
					Rows is defined as 'auto' by default, it doesn't need to be set.
					Ps. This component is using css-grid properties, it will not work on older browsers.
        </p>
				<br />

				<Grid columns={columns} rows={activeRows ? rows : undefined}>
					{content}
				</Grid>
			</div>
		)
	})

