import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonType } from '../Components/Button';

storiesOf('UI|Button', module)
  .add('all', () => <div>
    <Button onClick={action('clicked')}>Default Button</Button>
    <Button type={ButtonType.Accent} onClick={action('clicked')}>Accent Button</Button>
    <Button type={ButtonType.Neutro} onClick={action('clicked')}>Neutro Button</Button>
  </div>);
