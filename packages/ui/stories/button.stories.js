import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonType } from '../Components/Button';
import { container } from '../Theme/container';
import { FiAlertTriangle, FiPhoneIncoming, FiSave, FiTrash2 } from 'react-icons/fi';

storiesOf('Components|Button', module)
  .add('default', () => <div style={container()}>
    <Button onClick={action('clicked')}>Default Button</Button>
    <Button type={ButtonType.Accent} onClick={action('clicked')}>Accent Button</Button>
    <Button type={ButtonType.Neutro} onClick={action('clicked')}>Neutro Button</Button>
  </div>)
  .add('using icons', () => <div style={container()}>
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
