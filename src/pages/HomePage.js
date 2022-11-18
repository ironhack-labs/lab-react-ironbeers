import React from 'react'
import {Link} from 'react-router-dom';
import  beers from '../assets/beers.png';
import random from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function HomePage() {
  return (
    <div>
    <img src={beers}/>
    <Link to="/beers"><h1>Beers</h1></Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim tincidunt lorem at finibus. Aliquam mi purus, pulvinar id odio eu, blandit dignissim ipsum. Integer finibus nulla id felis tempus vehicula. Quisque aliquet neque ac dapibus aliquam. Cras egestas fermentum sapien ac dictum. Quisque vel arcu odio. Maecenas elementum commodo ligula, id placerat enim congue id.</p>
    
    <img src={random}/>
    <Link to="/random-beer"><h1>Random Beer</h1></Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim tincidunt lorem at finibus. Aliquam mi purus, pulvinar id odio eu, blandit dignissim ipsum. Integer finibus nulla id felis tempus vehicula. Quisque aliquet neque ac dapibus aliquam. Cras egestas fermentum sapien ac dictum. Quisque vel arcu odio. Maecenas elementum commodo ligula, id placerat enim congue id.</p>

    
    <img src={newBeer}/>
    <Link to="/new-beer"><h1>New Beer</h1></Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim tincidunt lorem at finibus. Aliquam mi purus, pulvinar id odio eu, blandit dignissim ipsum. Integer finibus nulla id felis tempus vehicula. Quisque aliquet neque ac dapibus aliquam. Cras egestas fermentum sapien ac dictum. Quisque vel arcu odio. Maecenas elementum commodo ligula, id placerat enim congue id.</p>

    
    </div>
  )
}

export default HomePage