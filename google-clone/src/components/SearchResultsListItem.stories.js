import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResultsListItem from './SearchResultsListItem';
import data from '../db/data';

storiesOf('SearchResultsListItem', module)
  .add('default render', () => {
    return (<SearchResultsListItem elem={data[0]} /> );
  });
