import React, { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import data from './db/data';

function App() {
  const [results, setResults] = useState(data);

  const updateResults = (val) => {
    const filtered = data.filter(datum => datum.content.includes(val));
    setResults(filtered);
  };

  return (
    <div className="App">
      <HelloWorld title="Google Clone" />
      <SearchBar onSubmit={ updateResults } />
      <p>Returned { results.length } results</p>
      <SearchResults results={ results } />
    </div>
  );
}

export default App;
