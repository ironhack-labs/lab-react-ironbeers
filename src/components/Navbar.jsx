
import homeIcon from './../assets/home-icon.png';
import { Link } from 'react-router-dom';



function Navbar() {

    return(
        <>
            <Nav>
                <Link to={'/'}>
                    <img src={homeIcon} alt='Home Icon'/>
                </Link>
            </Nav>

        </>
    )



}

export default Navbar;
