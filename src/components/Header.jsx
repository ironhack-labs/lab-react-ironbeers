import { Link } from "react-router-dom";  
import headerHome from'../assets/headerironbeers.png';



const Header = ()=>{


return (
  
<Link to="/"><img src={headerHome} alt="" style={{width:'100%'}}/></Link>


)

}

export default Header;