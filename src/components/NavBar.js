import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <Link to={"/"}><h1>Home</h1></Link>
        </header>
    );
}

export default NavBar;