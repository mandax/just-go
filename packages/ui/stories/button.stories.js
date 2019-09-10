import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonType } from '../Components/Button';
import { container } from '../Theme/container';
import { FiAlertTriangle, FiPhoneIncoming, FiSave, FiTrash2 } from 'react-icons/fi';
import { font } from '../Theme/font';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

storiesOf('Components|Button', module)
  .add('default', () =>
    <div style={container()}>
      <Button onClick={action('clicked')}>Default Button</Button>
      <Button type={ButtonType.Accent} onClick={action('clicked')}>Accent Button</Button>
      <Button type={ButtonType.Neutro} onClick={action('clicked')}>Neutro Button</Button>
    </div>)
  .add('using icons', () =>
    <div style={container()}>
      <p>
        Use <a href="https://react-icons.netlify.com" target="_blank">React Icons</a> components.
      </p>
      <br />
      <Button icon={FiSave} type={ButtonType.Accent} onClick={action('clicked')}>Save</Button>
      <Button icon={FiAlertTriangle} onClick={action('clicked')}>Be Careful</Button>
      <Button icon={FiPhoneIncoming} type={ButtonType.Accent} onClick={action('clicked')}>Answer</Button>
      <Button icon={FiTrash2} type={ButtonType.Neutro} onClick={action('clicked')}>Remove</Button>
      <br /><br />
      <Button icon={FiSave} type={ButtonType.Accent} onClick={action('clicked')} />
      <Button icon={FiAlertTriangle} onClick={action('clicked')} />
      <Button icon={FiPhoneIncoming} type={ButtonType.Accent} onClick={action('clicked')} />
      <Button icon={FiTrash2} type={ButtonType.Neutro} onClick={action('clicked')} />
    </div>)
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
