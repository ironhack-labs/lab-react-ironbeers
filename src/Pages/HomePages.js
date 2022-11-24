import { Link } from "react-router-dom";




const HomePage = () => {


    return(
        <div>
            <h1>Home Page</h1>
            <h2><Link to="/AllBeers">All Beers</Link></h2>
            <h2><Link to="/NewBeer">Create</Link></h2>
            <h2><Link to="/random-beer">Random one</Link></h2>
        </div>
    )
}

export default HomePage;