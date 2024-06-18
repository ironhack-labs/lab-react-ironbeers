import { Link } from "react-router-dom";


function HomePage() {
    return(
        <>
<Link to={"/beers"} className="btn btn-primary"><div className="card" >
    <img src={"../src/assets/beers.png"} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h2 className="card-title">All Beers</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus velit ac tellus mollis varius. Donec vel sapien nec justo luctus fringilla. Integer ultrices.</p>
    </div>
    </div>
    </Link>
    <Link to={"/random-beer"} className="btn btn-primary"><div className="card" >
    <img src={"../src/assets/random-beer.png"} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h2 className="card-title">Random Beer</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus velit ac tellus mollis varius. Donec vel sapien nec justo luctus fringilla. Integer ultrices.</p>
    </div>
    </div>
    </Link>
    <Link to={"/new-beer"} className="btn btn-primary"><div className="card" >
    <img src={"../src/assets/new-beer.png"} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h2 className="card-title">New Beer</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus velit ac tellus mollis varius. Donec vel sapien nec justo luctus fringilla. Integer ultrices.</p>
    </div>
    </div>
    </Link>
    </>
    )
}

export default HomePage;
