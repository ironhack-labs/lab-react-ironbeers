import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <Link to={"/beers"}>
                <img className="img-fluid col-12" src={Beers} alt={"Beers"} />
                <div className="container">
                    <h3 style={{ fontSize: "4rem", color: "black" }}>All Beers</h3>
                    <p className="fs-1 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dignissimos commodi quia ducimus? A facere dolore autem illum in tempora blanditiis</p>
                </div>
            </Link>
            <Link className="text-decoration-none" to={"/random-beer"}>
                <img className="img-fluid col-12" src={RandomBeer} alt={"Random Beer"} />
                <div className="container">
                    <h3 style={{ fontSize: "4rem", color: "black" }}>Random Beer</h3>
                    <p className="fs-1 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dignissimos commodi quia ducimus? A facere dolore autem illum in tempora blanditiis</p>
                </div>
            </Link>
            <Link className="text-decoration-none" to={"/new-beer"}>
                <img className="img-fluid col-12" src={NewBeer} alt={"New Beer"} />
                <div className="container">
                    <h3 style={{ fontSize: "4rem", color: "black" }}>New Beer</h3>
                    <p className="fs-1 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dignissimos commodi quia ducimus? A facere dolore autem illum in tempora blanditiis</p>
                </div>
            </Link>
        </>
    );
}

export default HomePage;
