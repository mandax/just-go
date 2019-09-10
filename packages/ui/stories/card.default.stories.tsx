import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Card, CardImage } from '../Components/Card';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { container, horizontalCenter } from '../Theme/container';
import { titleSpacing } from '../Theme/font';

storiesOf('Components|Card', module)
  .addDecorator(withKnobs)
  .add('default', () => {

    let selected = boolean('is selected', false)
    let image = text('image URL', 'https://www.demilked.com/magazine/wp-content/uploads/2019/01/5c41e16e8c8f3-powder-dog-photography-animals-coverimage.jpg')

    return (
      <div style={container()}>
        <p>
          The Card will fill the available width, to set a size you must set it on the parent width or use a Grid Component.
        </p>
        <br />

        <div style={{ ...horizontalCenter, maxWidth: '300px' }}>
          <Card selected={selected}>
            <CardImage src={image} />
            <h3 style={titleSpacing(1)}>Hello</h3>
            <div>
              This is a cool fancy card.
            </div>
          </Card>
        </div>
      </div>
    )
  })
  
