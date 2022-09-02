import React, { useState } from 'react';

import './App.css';
import MovieSearchInput from './components/MovieSearchInput';
import MoviesList from './components/MoviesList';

function App() {
  const [search, setSearch] = useState<string>('comedy');

  return (
    <div className='App'>
      <MovieSearchInput setSearch={setSearch} />
      <MoviesList search={search} />
    </div>
  );
}

export default App;
