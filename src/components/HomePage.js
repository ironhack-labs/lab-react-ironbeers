import { NavLink } from "react-router-dom";

function HomePage (props){
    console.log("this is working")



    return(
    <div className="HomeContainer">
        <div>
        <NavLink to="/beers"> Beers List </NavLink>
        <NavLink to="/random-beer"> Random Beer </NavLink>
        <NavLink to="/new-beer"> Create a Beer </NavLink>
        </div>
    </div>
)}

export default HomePage;