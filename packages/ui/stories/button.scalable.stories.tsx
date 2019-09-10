import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonType } from '../Components/Button';
import { container } from '../Theme/container';
import { font } from '../Theme/font';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('scalable', () => {

    let scalable = boolean('Can Scale', true);
    let parentFontSize = number('Scale', 1.5, {
      range: true,
      min: 1,
      max: 3,
      step: 0.01,
    });

    return (
      <div style={{ ...container(), ...font(parentFontSize) }}>
        <p>
          The button scale is relative to the parent font-size css property.
        </p>
        <br />
        <Button scalable={scalable} onClick={action('clicked')}>Default Button</Button>
        <Button scalable={scalable} type={ButtonType.Accent} onClick={action('clicked')}>Accent Button</Button>
        <Button scalable={scalable} type={ButtonType.Neutro} onClick={action('clicked')}>Neutro Button</Button>
      </div>
    )
  })
