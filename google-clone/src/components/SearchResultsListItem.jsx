import React from 'react';

const SearchResultsListItem = (props) => {
  const { elem } = props;
  return (
    <li key={ elem.id }>
      <h2>{ elem.title }</h2>
      <p>{ elem.content }</p>
      <a
        href={elem.website}
        target="_blank"
        rel="noopener noreferrer"
      >{ elem.website }</a>
    </li>
  );
};

export default SearchResultsListItem;
