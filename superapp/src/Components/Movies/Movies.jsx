import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';

const Movies = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',

      headers: {
        'X-RapidAPI-Key': '4cda4b65a6msh1664629c8a9b813p13d6c2jsnbd44fc8b9898',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
    const movieSelect = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
        options
      )
        .then((res) => res.json())
        .then((res) => setMovies(res.results.splice(4, 4)));
    };
    movieSelect();
  }, [genre]);

  return (
    <>
      <p className={styles.movHeading}>{genre}</p>
      <div className={styles.movieBoxes}>
        {movies.map((movie, index) => {
          return (
            <div key={index} className={styles.movieNames}>
              <img
                src={movie.primaryImage?.url}
                className={styles.movieImgages}
                alt="MovieImg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
