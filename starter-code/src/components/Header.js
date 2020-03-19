import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homeIcon: {
    color: '#FFF'
  }
});

const Header = () => {
  const classes = useStyles();

  return(
    <AppBar position="static">
    <Toolbar style={{justifyContent: 'center'}}>
      <IconButton aria-label="menu">
        <Link to='/'><HomeIcon className={classes.homeIcon}/></Link>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}

export default Header;