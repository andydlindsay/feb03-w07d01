import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBar';

storiesOf('SearchBar Component', module)
  .add('default render', () => {
    return (<SearchBar onSubmit={ action('search form submitted') } />);
  });
