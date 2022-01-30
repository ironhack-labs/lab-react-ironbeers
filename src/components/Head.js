import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const Head = () =>{
    return(
        <div className="header">
        <Link to="/">
            <AiTwotoneHome className="home-logo"
            size={50}
            color="#fff"
            />
        </Link>
        </div>
    )
   

  
    
}
export default Head;