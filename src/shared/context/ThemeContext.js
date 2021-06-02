import React, { createContext, useState } from 'react';

const themes = {
  day: {
    backgroundColor: 'whitesmoke',
    color: 'black',
  },
  night: {
    backgroundColor: '#282c34',
    color: 'whitesmoke',
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ( { children } ) => {
  const [isDay, setIsDay] = useState(true);
  const [theme, setTheme] = useState(themes.day);
  return (
    <ThemeContext.Provider value={ { isDay, setIsDay, theme, setTheme, themes } }>
      { children }
    </ThemeContext.Provider>
  )
};