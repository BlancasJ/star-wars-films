import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { FilmsContext } from '../context/FilmsContext';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '345px',
    margin: '10px',
    maxHeight: '500px',
    height: '310px',
    width: '300px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const FilmCard = ( { film, image } ) => {
  const classes = useStyles();
  const { showDetails, setShowDetails, setCurrentCard } = useContext(FilmsContext)
  const { title, director } = film;

  const handleOnClick = (film) => {
    setShowDetails(!showDetails);
    const currentFilm = {
      id: film.episode_id,
      title: film.title,
      director: film.director,
      producer: film.producer,
      opening_crawl: film.opening_crawl
    };
    setCurrentCard(currentFilm);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={ title }
        subheader={ director }
      />
      <CardMedia
        className={classes.media}
        image={ image }
        title={ title }
      />
      <CardActions disableSpacing>
        <IconButton
          onClick={() => handleOnClick(film)}
          aria-label="See details"
        >
          {showDetails ? 
            <RemoveIcon /> :
            <AddIcon />
          }See details
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FilmCard;