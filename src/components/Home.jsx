import React from 'react';
import '../assets/css/config.css'
import '../assets/css/Home.css'
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="j-flex j-fd-col j-jc-center">
      <h1>Home</h1>
      <section className="">
        <img className='' src={beers} alt="beers" />
        <Link to="/list-beers"><h2>All beers</h2></Link>
        <p className='col-8'>
          Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
          usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan. Te
          va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer sexuarl
          tiene musho peligro no te digo trigo por no llamarte Rodrigor torpedo
          ahorarr no puedor. Hasta luego Lucas jarl me cago en tus muelas
          llevame al sircoo fistro tiene musho peligro a wan papaar papaar. A
          wan condemor condemor condemor por la gloria de mi madre te va a hasé
          pupitaa diodenoo papaar papaar qué dise usteer. Torpedo mamaar
          apetecan jarl diodeno ahorarr a gramenawer a gramenawer amatomaa
          torpedo. Diodenoo la caidita apetecan diodeno se calle ustée papaar
          papaar mamaar amatomaa.
        </p>
      </section>
      <section>
        <img src={randomBeer} alt="beers" />
        <Link to="/ramdon-beer"><h2>Ramdon beer</h2></Link>
        <p>
          Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
          usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan. Te
          va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer sexuarl
          tiene musho peligro no te digo trigo por no llamarte Rodrigor torpedo
          ahorarr no puedor. Hasta luego Lucas jarl me cago en tus muelas
          llevame al sircoo fistro tiene musho peligro a wan papaar papaar. A
          wan condemor condemor condemor por la gloria de mi madre te va a hasé
          pupitaa diodenoo papaar papaar qué dise usteer. Torpedo mamaar
          apetecan jarl diodeno ahorarr a gramenawer a gramenawer amatomaa
          torpedo. Diodenoo la caidita apetecan diodeno se calle ustée papaar
          papaar mamaar amatomaa.
        </p>
      </section>
      <section>
        <img src={newBeer} alt="beers" />
        <Link to="/new-beer"><h2>New beer</h2></Link>
        <p>
          Lorem fistrum qué dise usteer jarl pecador amatomaa papaar papaar va
          usté muy cargadoo por la gloria de mi madre al ataquerl jarl a wan. Te
          va a hasé pupitaa pupita ese pedazo de jarl qué dise usteer sexuarl
          tiene musho peligro no te digo trigo por no llamarte Rodrigor torpedo
          ahorarr no puedor. Hasta luego Lucas jarl me cago en tus muelas
          llevame al sircoo fistro tiene musho peligro a wan papaar papaar. A
          wan condemor condemor condemor por la gloria de mi madre te va a hasé
          pupitaa diodenoo papaar papaar qué dise usteer. Torpedo mamaar
          apetecan jarl diodeno ahorarr a gramenawer a gramenawer amatomaa
          torpedo. Diodenoo la caidita apetecan diodeno se calle ustée papaar
          papaar mamaar amatomaa.
        </p>
      </section>
    </div>
  );
};

export default Home;
