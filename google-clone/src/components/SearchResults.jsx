import React from 'react';
import SearchResultsListItem from './SearchResultsListItem';

const SearchResults = (props) => {
  const results = props.results || [];

  return (
    <ul className="search-results">
      { results.map(elem => {
        return (
          <SearchResultsListItem key={ elem.id } elem={ elem }/>
        );
      }) }
    </ul>
  );
};

export default SearchResults;
