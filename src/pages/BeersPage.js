import { Link } from "react-router-dom";

const imgURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

function BeersPage() {
    return ( 
       <header>
        <Link to="/"> <img src={imgURL} alt="header" style={{width: "100vw"}} /></Link>
       </header>
     );
}

export default BeersPage;