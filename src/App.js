import './App.css';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from './shared/context/ThemeContext';
import { FilmsContext } from './shared/context/FilmsContext';
import Cards from './shared/components/Cards';
import Button from '@material-ui/core/Button';
import ThemeDN from './shared/components/ThemeDN';

const App = () => {
  const { theme } = useContext( ThemeContext );
  const { charactersg, images, currentCard, setCurrentCard, showDetails, setShowDetails } = useContext(FilmsContext);

  const useStyles = makeStyles(() => ({
    home: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    container: {
      minHeight: '100vh',
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontSize: '26px',
      textAlign: 'center',
      margin: 0,
      padding: '10px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    images: {
      width: '20%',
      height: '20%',
    },
    author: {
      fontSize: '12px',
    },
    closeButton: {
      margin: '10px',
    },
    paragraphText: {
      fontSize: '14px',
      width: '400px',
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
    textColor: {
      color: theme.color,
    }
  }));

  const classes = useStyles();

  const handleClose = () => {
    setShowDetails(!showDetails)
    setCurrentCard({});
  };
  return (
    <React.Fragment>
      {showDetails ? 
        <div className={`${classes.container} ${classes.details}`}>
          <h1 className={`${classes.title} ${classes.textColor}`} >{ currentCard.title }</h1>
          <p className={`${classes.author} ${classes.textColor}`}>Directed by {currentCard.director} and produced by {currentCard.producer}</p>
          <img className={`${classes.images} ${classes.textColor}`} src={images[currentCard.id-1]} alt={currentCard.title} />
          <h3 className={classes.textColor} >Plot:</h3>
          <p className={`${classes.paragraphText} ${classes.textColor}`}>{currentCard.opening_crawl}</p>
          <h3 className={classes.textColor}>Characters:</h3>
          <p className={`${classes.paragraphText} ${classes.textColor}`}>{charactersg[currentCard.id-1]}</p>
          <Button className={classes.closeButton} variant="contained" color="primary" onClick={handleClose}>Close</Button>
          <ThemeDN />
        </div> :
        <div className={classes.container}>
          <h1 className={`${classes.title} ${classes.textColor}`}>Star-Wars movies: </h1>
          <div className={classes.home} >
            <Cards />
          </div>
          <ThemeDN />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
