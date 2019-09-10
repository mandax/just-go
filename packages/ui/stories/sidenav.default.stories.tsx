import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Sidenav, SidenavLink } from '../Components/Sidenav';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FiCrosshair, FiDatabase, FiFeather, FiHeart } from 'react-icons/fi';

storiesOf('Components|Sidenav', module)
	.addDecorator(withKnobs)
	.add('default', () => React.createElement(() => {

		const [activeLinkIndex, setActiveLinkIndex] = React.useState(0);
		const onClick = (i: number) => (event: React.MouseEvent) => {
			setActiveLinkIndex(i);
			action('onClick')(event);
		}
		const links = [
			{ icon: FiCrosshair, onClick: onClick(0), name: 'Target' },
			{ icon: FiDatabase, onClick: onClick(1), name: 'Database' },
			{ icon: FiFeather, onClick: onClick(2), name: 'Feather' },
			{ icon: FiHeart, onClick: onClick(3), name: 'Like' }
		]

		return (
			<Sidenav fixed={true}>
				{links.map((link, i) =>
					<SidenavLink
						idx={i}
						icon={link.icon}
						isActive={activeLinkIndex === i}
						onClick={link.onClick}>
						{link.name}
					</SidenavLink>
				)}
			</Sidenav>
		)
	}))

