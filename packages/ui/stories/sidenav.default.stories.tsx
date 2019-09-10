import * as React from 'react';

import theme from '../Theme';
import { storiesOf } from '@storybook/react';
import { Sidenav, SidenavLink } from '../Components/Sidenav';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FiCrosshair, FiDatabase, FiFeather, FiHeart } from 'react-icons/fi';
import { container, horizontalCenter, containerTransparent, containerAccent, ContainerGenerator } from '../Theme/container';

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
		];

		interface ContainerOptions {
			[key: string]: ContainerGenerator
		}

		const containerOptions: ContainerOptions = {
			container,
			containerTransparent,
			containerAccent
		};

		const fixed = boolean('Fixed position', true);
		const alwaysOpen = boolean('Always open', false);
		const centerContent = boolean('Vertical center links', true);
		const containerStyle = select('Container style', Object.keys(containerOptions), 'container');
		const parentContainer: React.CSSProperties = {
			...container(),
			...horizontalCenter,
			border: '1px solid rgba(0, 0, 0, 0.3)',
			width: '400px',
			height: '600px',
			position: 'relative'
		}
		return (
			<div style={container(theme.SIDENAV_CLOSE_WIDTH + 2)}>
				<p>
					Fixed position false can be used to set the Sidenav inside a limited box
				</p>
				<br /><br />
				<div style={parentContainer}>
					<Sidenav 
						fixed={fixed} 
						alwaysOpen={alwaysOpen} 
						verticalCenter={centerContent}
						container={containerOptions[containerStyle]}>
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
				</div>
			</div>
		)
	}))

