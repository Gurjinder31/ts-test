import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

type Props = {
  search: string;
};

const MoviesList: React.FC<Props> = ({ search }) => {
  interface IMovieData {
    Title: string;
    Poster: string;
    Type: string;
    Year: string;
    imdbID: string;
  }

  const [moviesList, setMoviesList] = useState<IMovieData[]>([]);
  const [hover, setHover] = useState<string>('');

  useEffect(() => {
    searchMoviesList();
  }, [search]);

  const searchMoviesList = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl: string = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
    const response = await axios.get(apiUrl);
    setMoviesList(response.data.Search);
  };

  const toggleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setHover(e.currentTarget.id);
  };

  if (moviesList === undefined) {
    return (
      <div className='empty-movies'>
        No movie 🎥 is listed under name of "{search}". Please try another name
      </div>
    );
  } else {
    return (
      <div className='movie-container'>
        {moviesList.map((movie, index) => (
          <div
            key={movie.imdbID}
            onMouseOver={toggleHover}
            onMouseOut={() => setHover('')}
            className='movie-card'
            id={movie.imdbID}
          >
            <img className='movie-poster' src={movie.Poster} alt='' />
            <div
              className={
                hover === movie.imdbID ? 'movie-details' : 'movie-details-hide'
              }
            >
              <p className='movie-title'>
                {movie.Title} <span>({movie.Year})</span>
              </p>
              <p className='movie-type'>
                Label <span className='movie-type-name'>{movie.Type}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default MoviesList;
