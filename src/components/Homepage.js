import beersImg from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { NavLink } from "react-router-dom";
import {container, card} from "bootstrap";



function Homepage(){

    return(
        <div className='container mt-10'>
            <div className="card card-class" >
                <NavLink to="/beers" className="links">
                    <img src={beersImg} className="img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">All Beers</h2>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </NavLink>
            </div>
            <div className="card card-class" >
                <NavLink to="/random-beer" className="links">
                    <img src={randomBeer} className="img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Random Beer</h2>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </NavLink>
            </div>
            <div className="card card-class" >
                <NavLink to="/new-beer" className="links">
                    <img src={newBeer} className="img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">New Beer</h2>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </NavLink>   
            </div>
        </div>
    )
}

export default Homepage;