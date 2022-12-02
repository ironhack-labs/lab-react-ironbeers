import { Link }         from "react-router-dom";
import { useEffect }    from "react";    

function HomePage( { setShowNav } ) {
    useEffect(() => {
        setShowNav(false);
    }, [setShowNav]);

    return (
        <div>
            <Link to={ "/beers" }>
                <p>All Beers</p>
            </Link>
            <img
                src="/src/assets/beers.png" alt="Beers"
            />
            <Link to={ "/random-beer" }>
                <p>Random Beer</p>
            </Link>
            <img
                src="/src/assets/random-beer.png" alt="Random beer"
            />
            <Link to={ "/new-beer" }>
                <p>New Beer</p>
            </Link>
            <img
                src="/src/assets/new-beer.png" alt="New beer"
            />
        </div>
    )
}

export default HomePage;