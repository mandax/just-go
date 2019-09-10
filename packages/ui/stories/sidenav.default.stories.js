import React from 'react';

import { storiesOf } from '@storybook/react';
import { Sidenav, SidenavLink } from '../Components/Sidenav';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FiCrosshair, FiDatabase, FiFeather, FiHeart } from 'react-icons/fi';

storiesOf('Components|Sidenav', module)
	.addDecorator(withKnobs)
	.add('default', () => {

		let activeLink = 0;

		const onClick = (i) => (event) => {
			activeLink = i;
			action('onClick')(event);
		}
		const links = [
			{ icon: FiCrosshair, onClick: onClick(0), name: 'Foo' },
			{ icon: FiDatabase, onClick: onClick(1), name: 'Foo' },
			{ icon: FiFeather, onClick: onClick(2), name: 'Foo' },
			{ icon: FiHeart, onClick: onClick(3), name: 'Foo' }
		]

		return (
			<Sidenav fixed={true}>
				{links.map((link, i) => 
					<SidenavLink
						idx={i}
						icon={link.icon}
						isActive={activeLink === i}
						onClick={link.onClick}>
						{link.name}
					</SidenavLink>
				)}
			</Sidenav>
		)
	})

