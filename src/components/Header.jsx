import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ShuffleOnRoundedIcon from '@mui/icons-material/ShuffleOnRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';

const iconStyle = { fontSize: '20px', color: '#fff', margin: '5px 10vw' };
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#123456',
  padding: '5px',
  minWidth: '100vw',
  position: 'sticky',
  top: '0',
};

function Header() {
  return (
    <>
      <Container sx={containerStyle}>
        <Link to={'/'}>
          <HomeRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/beers'}>
          <AllInclusiveRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/new-beer'}>
          <AddCircleRoundedIcon sx={iconStyle} />
        </Link>
        <Link to={'/random-beer'}>
          <ShuffleOnRoundedIcon sx={iconStyle} />
        </Link>
      </Container>

      <Outlet />
    </>
  );
}

export default Header;
