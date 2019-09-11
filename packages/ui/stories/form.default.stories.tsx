import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { container } from '../Theme/container';
import { Input } from '../Components/Input';
import { action } from '@storybook/addon-actions';

storiesOf('Components|Form', module)
	.addDecorator(withKnobs)
	.add('default', () => React.createElement(() => {

		const [form, setForm] = React.useState({
			text: 'foo',
			number: 22
		});

		const onChangeInput = (key:string) => (value: string | number) => {
			setForm({ ...form, [key]: value })
			action('onchange')(value);
		}

		return (
			<div style={container()}>
				<Input
					type="text"
					label="Text"
					focus={true}
					value={form.text}
					placeholder="Lorem"
					onChange={onChangeInput('text')} />
				<Input
					type="number"
					label="Number"
					value={form.number}
					min={0}
					max={100}
					step={1}
					onChange={onChangeInput('number')} />
			</div>
		)
	}))

