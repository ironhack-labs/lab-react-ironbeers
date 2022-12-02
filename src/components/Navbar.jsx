import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <Wrapper>
      <div className='navbar'>
        <NavLink to='/'>
          <i className='fa-solid fa-house'></i>
        </NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .navbar {
    width: 100vw;
    height: 12vh;
    background-color: #56382d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    color: #fff;
    font-size: 40px;
  }
`;

export default Navbar;
