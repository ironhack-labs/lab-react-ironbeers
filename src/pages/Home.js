import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    return ( 
    <div className="App">


        <nav className="nav">
      <NavLink  to="/Beers"><button>All beers</button></NavLink>
      <NavLink to="/Random-beer"><button>Random beer</button></NavLink>
      <NavLink to="/New-beer"><button>New beer</button></NavLink>
        </nav>

    </div>
     );
}

export default Home;