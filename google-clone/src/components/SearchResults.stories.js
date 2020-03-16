import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResults from './SearchResults';
import data from '../db/data';
import '../index.css';

storiesOf('SearchResults Component', module)
  .add('default render', () => {
    return (<SearchResults results={ data } />);
  });
