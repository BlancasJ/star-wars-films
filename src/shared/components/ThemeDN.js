import React, {useContext} from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import IconButton from '@material-ui/core/IconButton';
import {ThemeContext} from '../context/ThemeContext';

const ThemeDN = () => {
  const {isDay, setIsDay, theme, setTheme, themes} = useContext(ThemeContext);
  const handleTheme = () => {
    setIsDay(!isDay);
    if(!isDay){
      setTheme(themes.day);
      return;
    }
    setTheme(themes.night);
  };
  return (
    <React.Fragment>
      {isDay ?
        <IconButton
        onClick={handleTheme}
        aria-label="Day"
        >
          <Brightness4Icon style={{ color: theme.color }}/>
      </IconButton> : 
      <IconButton
      onClick={handleTheme}
      aria-label="Night"
      >
        <Brightness3Icon style={{ color: theme.color }} />
      </IconButton>
      }
    </React.Fragment>
  )
};

export default ThemeDN;
