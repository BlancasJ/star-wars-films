import React, { useContext } from 'react';
import FilmCard from './FilmCard';
import { FilmsContext } from '../context/FilmsContext';

const Cards = () => {
  const { films, images } = useContext(FilmsContext);
  return (
    <React.Fragment>
      {films.map( film => {
        return <FilmCard 
        key={film.episode_id}
        film={film}
        image={images[film.episode_id-1]}
      />
      })}
    </React.Fragment>
  )
};

export default Cards;
