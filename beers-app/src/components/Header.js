import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <Navbar bg="dark">
        <Navbar.Brand href="/">
          <img src="https://img.icons8.com/officel/2x/home.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    )
}

export default Header