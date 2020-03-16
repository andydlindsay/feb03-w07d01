import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from './HelloWorld';

storiesOf('HelloWorld Component', module)
  .add('default render', () => {
    return (<HelloWorld />);
  })
  .add('with "Google Clone" as title', () => {
    return (<HelloWorld title="Google Clone" />);
  });
