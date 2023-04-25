import headerPic from "../assets/headerPic.png"
import { Link } from "react-router-dom"

function HeaderLink() {
  return (
    <div>
        <Link to="/">
          <img src={headerPic} alt="headerPic" style={{width: '100%'}}/>
        </Link>
        
    </div>
  )
}

export default HeaderLink