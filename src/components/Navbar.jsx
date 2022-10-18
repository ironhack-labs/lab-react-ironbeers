import { AiFillHome } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <IoMdArrowRoundBack onClick={() => navigate(-1)} />
      <Link to="/">
        <AiFillHome />
      </Link>
      
    </nav>
  );
};

export default Navbar;