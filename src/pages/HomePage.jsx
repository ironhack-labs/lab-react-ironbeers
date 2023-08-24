import { Link } from "react-router-dom";


function HomePage() {

    return (
        <div className="container">
            <Link to="/beers">
                <img src="/src/assets/beers.png" alt="beers" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet! Quaerat, veritatis minus fugiat molestias vel magnam provident. Eius delectus molestiae perspiciatis sequi exercitationem id totam odio voluptatem unde necessitatibus!</p>
            </Link>
            < Link to="/random-beer" >
                <img src="/src/assets/random-beer.png" alt="radom" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet! Quaerat, veritatis minus fugiat molestias vel magnam provident. Eius delectus molestiae perspiciatis sequi exercitationem id totam odio voluptatem unde necessitatibus!</p>
            </Link >
            < Link to="/new-beer" >
                <img src="/src/assets/new-beer.png" alt="new" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet! Quaerat, veritatis minus fugiat molestias vel magnam provident. Eius delectus molestiae perspiciatis sequi exercitationem id totam odio voluptatem unde necessitatibus!</p>
            </Link >
        </div>
    )
}

export default HomePage;
