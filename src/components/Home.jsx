import React from 'react';
import '../assets/css/Home.css';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className=" __cont __flex __fd-col __jc-center __ta-c">
        <section className="row">
          <Link to="/list-beers">
            <img className="col-12 __mb-1" src={beers} alt="beers" />
            <h2 className="__mb-2">All beers</h2>
          </Link>
          <p className="">
            Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
            usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan.
            Te va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer
            sexuarl tiene musho peligro no te digo trigo por no llamarte
            Rodrigor torpedo ahorarr no puedor. Hasta luego Lucas jarl me cago
            en tus muelas llevame al sircoo fistro tiene musho peligro a wan
            papaar papaar. A wan condemor condemor condemor por la gloria de mi
            madre te va a hasé pupitaa diodenoo papaar papaar qué dise usteer.
            Torpedo mamaar apetecan jarl diodeno ahorarr a gramenawer a
            gramenawer amatomaa torpedo. Diodenoo la caidita apetecan diodeno se
            calle ustée papaar papaar mamaar amatomaa.
          </p>
        </section>
        <section className="row">
          <Link to="/ramdon-beer">
            <img className="col-12 __mb-1" src={randomBeer} alt="beers" />
            <h2 className="__mb-2">Ramdon beer</h2>
          </Link>
          <p>
            Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
            usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan.
            Te va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer
            sexuarl tiene musho peligro no te digo trigo por no llamarte
            Rodrigor torpedo ahorarr no puedor. Hasta luego Lucas jarl me cago
            en tus muelas llevame al sircoo fistro tiene musho peligro a wan
            papaar papaar. A wan condemor condemor condemor por la gloria de mi
            madre te va a hasé pupitaa diodenoo papaar papaar qué dise usteer.
            Torpedo mamaar apetecan jarl diodeno ahorarr a gramenawer a
            gramenawer amatomaa torpedo. Diodenoo la caidita apetecan diodeno se
            calle ustée papaar papaar mamaar amatomaa.
          </p>
        </section>
        <section className="row">
          <Link to="/new-beer">
            <img className="col-12 __mb-1" src={newBeer} alt="beers" />
            <h2 className="__mb-2">New beer</h2>
          </Link>
          <p>
            Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
            usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan.
            Te va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer
            sexuarl tiene musho peligro no te digo trigo por no llamarte
            Rodrigor torpedo ahorarr no puedor. Hasta luego Lucas jarl me cago
            en tus muelas llevame al sircoo fistro tiene musho peligro a wan
            papaar papaar. A wan condemor condemor condemor por la gloria de mi
            madre te va a hasé pupitaa diodenoo papaar papaar qué dise usteer.
            Torpedo mamaar apetecan jarl diodeno ahorarr a gramenawer a
            gramenawer amatomaa torpedo. Diodenoo la caidita apetecan diodeno se
            calle ustée papaar papaar mamaar amatomaa.
          </p>
        </section>
      </div>
    );
}

export default Home;
