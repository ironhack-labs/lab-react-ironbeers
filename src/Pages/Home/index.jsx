import { Link } from "react-router-dom";
import Header from "../../Components/Header";

export default function HomePage() {

    return (
    <div>
    <h1>Home Page</h1>
    <Link to="/beers" style={{ textDecoration: 'none' }}>
    <div class="card mb-3">
        <img src="https://github.com/k-129/lab-react-ironbeers/blob/084f3dcc1eb3a06313374e1cb1e717b7ea8ffd6c/src/assets/beers.png?raw=true" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h2 class="card-title">All Beers</h2>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    </Link>
    <Link to="/random-beer" style={{ textDecoration: 'none' }}>
    <div class="card mb-3">
        <img src="https://github.com/k-129/lab-react-ironbeers/blob/084f3dcc1eb3a06313374e1cb1e717b7ea8ffd6c/src/assets/random-beer.png?raw=true" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h2 class="card-title">Random Beer</h2>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    </Link>
    <Link to="/new-beer" style={{ textDecoration: 'none' }}>
    <div class="card mb-3">
        <img src="https://github.com/k-129/lab-react-ironbeers/blob/084f3dcc1eb3a06313374e1cb1e717b7ea8ffd6c/src/assets/new-beer.png?raw=true" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h2 class="card-title">Add new Beer</h2>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    </Link>
     </div>
    )
  }