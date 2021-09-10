import React from "react"
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div>
                <img
                src="../../assets/beers.png"
                alt=""
                />
                <h1 className="Home__Data">All Beers</h1>
                <p className="Home__Data">Lorem fistrum ese pedazo de officia qué dise usteer caballo blanco caballo negroorl occaecat sed velit papaar papaar ahorarr reprehenderit. Duis consectetur ahorarr no te digo trigo por no llamarte Rodrigor condemor. </p>
            </div>
            <div>
                <img
                src="../../assets/random-beer.png"
                alt=""
                />
                <h1 className="Home__Data">Random Beer</h1>
                <p className="Home__Data">Lorem fistrum ese que llega llevame al sircoo de la pradera a peich. Caballo blanco caballo negroorl no puedor ese hombree caballo blanco caballo negroorl mamaar torpedo a gramenawer la caidita ese hombree caballo blanco caballo negroorl ahorarr.</p>
            </div>
            <div>
                <img
                src="../../assets/new-beer.png"
                alt=""
                />
                <h1 className="Home__Data">New Beer</h1>
                <p className="Home__Data">Lorem fistrum ese pedazo de apetecan ese pedazo de te va a hasé pupitaa caballo blanco caballo negroorl.</p>
            </div>
        </div>
    );
  }