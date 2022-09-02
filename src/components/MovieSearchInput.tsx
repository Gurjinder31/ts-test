import React, { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

type Props = {
  setSearch: (val: string) => void;
};

const MovieSearchInput: React.FC<Props> = ({ setSearch }) => {
  const [input, setInput] = useState('comedy');

  const submitSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearch(input);
  };
  return (
    <div className='movieSearchInput'>
      <form>
        <div className='input-box'>
          <input
            onChange={(e) => setInput(e.target.value)}
            type='text'
            name='search'
            id='movie-search'
            required
          />
          <button onClick={submitSearch}>
            <FiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieSearchInput;
