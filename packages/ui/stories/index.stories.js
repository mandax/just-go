import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from '../Components/Card';

storiesOf('Button', module)
  .add('with text', () => <Card onClick={action('clicked')}>Text</Card>);
