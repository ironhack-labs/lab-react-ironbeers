import { Link } from 'react-router-dom';
import icono from './../assets/home-icon.png'


function Navbar() {
    return (
        <>
            <div className="Navbar">
                <Link to={'/'}><img src={icono} alt="" /></Link>
            </div>
        </>
    )

}


export default Navbar;



