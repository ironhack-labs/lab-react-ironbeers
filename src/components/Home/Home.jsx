import React from "react"
import AllBeers from "../../assets/beers.png"
import RandomBeer from "../../assets/random-beer.png"
import NewBeer from "../../assets/new-beer.png"
import { NavLink } from "react-router-dom";
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div>
                <NavLink to="/beers" className="Home__Navlink">
                    <img className="Home__img"
                    src={AllBeers}
                    alt=""
                    />
                    <h1 className="Home__Data">All Beers</h1>
                    <p className="Home__Data">Lorem fistrum ese pedazo de officia qué dise usteer caballo blanco caballo negroorl occaecat sed velit papaar papaar ahorarr reprehenderit. Duis consectetur ahorarr no te digo trigo por no llamarte Rodrigor condemor. </p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/random-beer" className="Home__Navlink">
                <img className="Home__img"
                src={RandomBeer}
                alt=""
                />
                <h1 className="Home__Data">Random Beer</h1>
                <p className="Home__Data">Lorem fistrum ese que llega llevame al sircoo de la pradera a peich. Caballo blanco caballo negroorl no puedor ese hombree caballo blanco caballo negroorl mamaar torpedo a gramenawer la caidita ese hombree caballo blanco caballo negroorl ahorarr.</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/new-beer" className="Home__Navlink">
                <img className="Home__img"
                src={NewBeer}
                alt=""
                />
                <h1 className="Home__Data">New Beer</h1>
                <p className="Home__Data">Lorem fistrum ese pedazo de apetecan ese pedazo de te va a hasé pupitaa caballo blanco caballo negroorl.</p>
                </NavLink>
            </div>
        </div>
    );
  }