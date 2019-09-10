import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../Components/Header';

storiesOf('Components|Header', module)
  .add('default', () => {
    return (
      <Header>
				<h1>Hello this is a header</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et justo vitae eros ultrices facilisis. </p>
			</Header>
    )
  })
  
