import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Link to={'/beers'}>
                <img src={AllBeers} alt="" />
                <h3>All Beers</h3>
            </Link>

            <Link to={'/random-beer'}>
                <img src={RandomBeer} alt="" />
                <h3>Random Beer</h3>
            </Link>

            <Link to={'/new-beer'}>
                <img src={NewBeer} alt="" />
                <h3>New Beer</h3>
            </Link>

        </div >

    )


}

export default HomePage;
