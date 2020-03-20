import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import {getAllBeers} from './../services/beerService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const ListBeersPage = () => {
  const classes = useStyles();
  const [beers, setBeers] = useState([]); 

  useEffect(()=> {
    getAllBeers().then(beers => setBeers(beers));
  }, []);

  return(
    <div>
      <Header/>
      {
        beers.map( beer => {
          return(
            <List className={classes.root} key={beer._id}>
              <Link to={beer._id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar variant="square"  alt={beer.name}  src={beer.image_url} />
                  </ListItemAvatar>
                  <ListItemText primary={beer.name} 
                  secondary={beer.tagline
/*                     <div>
                      <div>{beer.tagline}</div>
                      <div>Created by: {beer.contributed_by}</div>
                    </div> */
                  }/>
                </ListItem>
              </Link>  
            </List>
          );
        })}
    </div>
  );
}

export default ListBeersPage;