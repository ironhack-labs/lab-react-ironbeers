import { Link } from "react-router-dom";


function HomePage() {

    return(
        <>
        <Link  to="/beers">All Beers</Link > <br />
        <Link  to="/random-beer">Random Beer</Link ><br />
        <Link  to="/new-beer">New Beer</Link >
    </>
    )

}

export default HomePage;
