import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ShuffleOnRoundedIcon from '@mui/icons-material/ShuffleOnRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';

const iconStyle = { fontSize: '30px', color: '#fff' };
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#123456',
  padding: '5px',
  position: 'fixed',
  bottom: '0',
};

function Header() {
  return (
    <>
      <Container sx={containerStyle}>
        <Link to={'/'}>
          <HomeRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/AllBeers'}>
          <AllInclusiveRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/NewBeer'}>
          <AddCircleRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/RandomBeer'}>
          <ShuffleOnRoundedIcon sx={iconStyle} />
        </Link>
      </Container>

      <Outlet />
    </>
  );
}

export default Header;
