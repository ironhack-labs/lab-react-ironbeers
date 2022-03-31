import React from 'react';
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className='upper-home'>
                <Link to={'/beers'}>
                    <img src={beers} alt="All Beers" />
                </Link>
                <h2>All Beers</h2>
                <p className='home-paragraph'>
                Lorem fistrum no te digo trigo por no llamarte Rodrigor a peich no te digo trigo por no llamarte Rodrigor mamaar amatomaa fistro tiene musho peligro. A peich ese que llega a gramenawer llevame al sircoo mamaar. Pupita va usté muy cargadoo te va a hasé pupitaa torpedo jarl no puedor pecador a peich jarl diodeno. Jarl quietooor va usté muy cargadoo llevame al sircoo va usté muy cargadoo diodeno te voy a borrar el cerito caballo blanco caballo negroorl ese que llega qué dise usteer. Diodeno jarl ese que llega al ataquerl va usté muy cargadoo hasta luego Lucas a gramenawer quietooor va usté muy cargadoo jarl. Está la cosa muy malar ese pedazo de quietooor fistro a gramenawer torpedo benemeritaar. Ese hombree sexuarl ese hombree te voy a borrar el cerito. Papaar papaar te va a hasé pupitaa ese hombree mamaar jarl ahorarr quietooor llevame al sircoo.
                </p> 
            </div>
            <div>
                <Link to={'/random-Beer'}>
                    <img src={randomBeer} alt="Random Beer" />
                </Link>

                <h2>Random Beer</h2>
                <p className='home-paragraph'>
                Lorem fistrum no te digo trigo por no llamarte Rodrigor a peich no te digo trigo por no llamarte Rodrigor mamaar amatomaa fistro tiene musho peligro. A peich ese que llega a gramenawer llevame al sircoo mamaar. Pupita va usté muy cargadoo te va a hasé pupitaa torpedo jarl no puedor pecador a peich jarl diodeno. Jarl quietooor va usté muy cargadoo llevame al sircoo va usté muy cargadoo diodeno te voy a borrar el cerito caballo blanco caballo negroorl ese que llega qué dise usteer. Diodeno jarl ese que llega al ataquerl va usté muy cargadoo hasta luego Lucas a gramenawer quietooor va usté muy cargadoo jarl. Está la cosa muy malar ese pedazo de quietooor fistro a gramenawer torpedo benemeritaar. Ese hombree sexuarl ese hombree te voy a borrar el cerito. Papaar papaar te va a hasé pupitaa ese hombree mamaar jarl ahorarr quietooor llevame al sircoo.
                </p> 
            </div>
            <div>
                <Link to={'/new-Beer'}>
                    <img src={newBeer} alt="New Beer" />
                </Link>

                <h2>New Beer</h2>
                <p className='home-paragraph'>
                Lorem fistrum no te digo trigo por no llamarte Rodrigor a peich no te digo trigo por no llamarte Rodrigor mamaar amatomaa fistro tiene musho peligro. A peich ese que llega a gramenawer llevame al sircoo mamaar. Pupita va usté muy cargadoo te va a hasé pupitaa torpedo jarl no puedor pecador a peich jarl diodeno. Jarl quietooor va usté muy cargadoo llevame al sircoo va usté muy cargadoo diodeno te voy a borrar el cerito caballo blanco caballo negroorl ese que llega qué dise usteer. Diodeno jarl ese que llega al ataquerl va usté muy cargadoo hasta luego Lucas a gramenawer quietooor va usté muy cargadoo jarl. Está la cosa muy malar ese pedazo de quietooor fistro a gramenawer torpedo benemeritaar. Ese hombree sexuarl ese hombree te voy a borrar el cerito. Papaar papaar te va a hasé pupitaa ese hombree mamaar jarl ahorarr quietooor llevame al sircoo.
                </p> 
            </div>
        </div>
    );
};

export default Home;