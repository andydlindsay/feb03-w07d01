import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';
import data from './db/data';

storiesOf('App Component', module)
  .add('default render', () => {
    return (<App/>);
  });
