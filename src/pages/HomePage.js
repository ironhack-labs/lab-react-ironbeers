import { Link } from "react-router-dom"
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";


function HomePage () {
    return (
        <div className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}>
            <Link to="/beers">
                <div className="card-box" style={{ width: "20rem"}}>
                    <img src={beersImg} className="card-box-img-top" alt="..." />
                    <div className="card-box-body">
                        <h4 className="card-box-title">All Beers</h4>
                        <p className="card-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue. Facilisis gravida neque convallis a cras semper. Tempus urna et pharetra pharetra massa massa ultricies mi. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. 
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/random-beer">
            <div className="card-box" style={{ width: "20rem"}}>
                    <img src={randomBeerImg} className="card-box-img-top" alt="..." />
                    <div className="card-box-body">
                        <h4 className="card-box-title">Random Beer</h4>
                        <p className="card-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue. Facilisis gravida neque convallis a cras semper. Tempus urna et pharetra pharetra massa massa ultricies mi. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. 
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/new-beer">
            <div className="card-box" style={{ width: "20rem"}}>
                    <img src={newBeerImg} className="card-box-img-top" alt="..." />
                    <div className="card-box-body">
                        <h4 className="card-box-title">New Beer</h4>
                        <p className="card-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue. Facilisis gravida neque convallis a cras semper. Tempus urna et pharetra pharetra massa massa ultricies mi. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. 
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default HomePage;