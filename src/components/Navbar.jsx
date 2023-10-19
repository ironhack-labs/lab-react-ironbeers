import { Link } from "react-router-dom";
import Image from "../assets/home-icon.png"

function Navbar() {

  return(
    <nav className="py-4 my-1 bg-primary d-flex justify-content-center ">
      <Link to={"/"}>
        <img src={Image} alt="" />
      </Link>
    </nav>
  )


}

export default Navbar;
