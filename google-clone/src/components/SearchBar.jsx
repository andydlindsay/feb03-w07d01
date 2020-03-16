import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmission = (event) => {
    event.preventDefault();
    props.onSubmit(searchTerm);
  };
  
  return(
    <form className="search-bar" onSubmit={ handleSubmission }>
      <label htmlFor="search-input">Search:</label>
      <input
        type="text"
        id="search-input"
        value={ searchTerm }
        onChange={ event => setSearchTerm(event.target.value) }
      />
      <button className="submit-button" type="submit">Search!</button>
    </form>
  );
};

export default SearchBar;
