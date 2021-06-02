import img_1 from '../images/1.jpg';
import img_2 from '../images/2.jpg';
import img_3 from '../images/3.jpg';
import img_4 from '../images/4.jpg';
import img_5 from '../images/5.jpg';
import img_6 from '../images/6.jpg';

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const FilmsContext = createContext();

export const FilmsProvider = ( { children } ) => {

  const [ films, setFilms ] = useState([]);
  const [ charactersg, setCharacters ] = useState([]);
  const [ images, setImages ] = useState([img_1, img_2, img_3, img_4, img_5, img_6]);
  const [ currentCard, setCurrentCard ] = useState({});
  const [ showDetails, setShowDetails ] = useState(false);

  useEffect( () => {
    const getData = async () => {
      const { data: { results } } = await axios.get("https://swapi.dev/api/films/");
      setFilms(results);
      const tempChars = [];
      for(const result of results){
        const chars = await result.characters.reduce(async (previousPromise, link) => {
          let character = await previousPromise;
      
          const { data: { name } } = await axios.get(link);
      
          character += `${name}, `
      
          return character;
        }, Promise.resolve(''));
        tempChars.push(chars);
      }
      setCharacters(tempChars);
    }
    getData();
  }, []);

  return (<FilmsContext.Provider value={ { films, setFilms, charactersg, setCharacters, images, setImages, currentCard, setCurrentCard, showDetails, setShowDetails } }>
    { children }
  </FilmsContext.Provider>);
};