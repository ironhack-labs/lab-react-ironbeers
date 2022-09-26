import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header"> 
        <Link to={"/"}>
            <img className='homeIcon' src="https://cdn-icons-png.flaticon.com/512/18/18625.png" alt="altHome"/>
        </Link>
    </div>
   
    
  )
}

export default Header