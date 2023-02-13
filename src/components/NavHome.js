import { Link } from "react-router-dom";
import homeIcon from './../assets/home.png'

function NavHome() {

    return (
        <>
            <div style={{backgroundColor : '#00BFFF', padding: '30px'}}>
                <Link to="/">
                    <img style={{color:'white', width: '50px'}} src={homeIcon} alt='homeIcon' />
                </Link>
            </div>
        </>
    )
}

export default NavHome;