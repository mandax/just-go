import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonType } from '../Components/Button';
import { container } from '../Theme/container';

storiesOf('Components|Button', module)
  .add('default', () =>
    <div style={container()}>
      <Button onClick={action('clicked')}>Default Button</Button>
      <Button type={ButtonType.Accent} onClick={action('clicked')}>Accent Button</Button>
      <Button type={ButtonType.Neutro} onClick={action('clicked')}>Neutro Button</Button>
    </div>)
