import { Link } from "react-router-dom";
import styled from '@emotion/styled'

function Navbar() {
  const NavBarStyle = styled.div`
  padding: 32px;
  background-color: #3DC4FC;
  font-size: 24px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-align: center;
  a{
    text-decoration : none;
  }
  `

  return (
    <div>
    <NavBarStyle>
      <Link to="/"> Home Page</Link>
    </NavBarStyle>
      
    </div>
  );
}

export default Navbar;
