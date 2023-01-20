import homeHeader from '../assets/home-header.png'
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();   
    function headerClick(){
        navigate('/');
    }
    return(
        <div id='homepage'>
                <img src={homeHeader} alt='home-header' onClick={headerClick} id='headerClick'/>
        </div>
    )
}

export default Header;