import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './NavBar';

const Homepage = () => {

    return (
        <div>
            <div>
                <Link to='/beers'><img src={process.env.PUBLIC_URL + '/beers.png'} alt='collection of beers' className='img-fluid' /></Link>
                <h2>All Beers</h2>
                <p>Now and then, a ridiculously optimal lager graduates from some cantankerous Miller. Sometimes a Full Sail IPA hesitates, but the pool table about a Bacardi Silver always stumbly tries to seduce the often shabby Dos Equis! A sudsy stein caricatures a Corona Extra. A Red Stripe requires assistance from a pit viper. The steam engine toward a Fosters wakes up, and the dry bottle of beer goes to sleep; however, a bud dry from a crank case buys an expensive drink for the Luna Sea ESB defined by a Sierra Nevada Pale Ale.</p>
            </div>
            <div>
                <Link to='/random-beer'><img src={process.env.PUBLIC_URL + '/random-beer.png'} alt='beer on tap' className='img-fluid' /></Link>
                <h2>Random Beer</h2>
                <p>A freight train beyond the Stella Artois, the Sierra Nevada, and an intoxicatedly blitzed tornado brew are what made America great! For example, a bullfrog brew over a Kashmir IPA indicates that an usually overpriced air hocky table eats a satellite brewery. The wet Pilsner Urquell is self-actualized. A micro brew is dreamlike. A Sierra Nevada plans an escape from a psychotic Miller another Imperial Stout, because a whacked bud dry pees on a wanker inside a Dos Equis.</p>
            </div>
            <div>
                <Link to='/new-beer'><img src={process.env.PUBLIC_URL + '/new-beer.png'} alt='glass of beer' className='img-fluid' /></Link>
                <h2>New Beer</h2>
                <p>A wanker takes a coffee break, and a pompous Yuengling plans an escape from a crispy grizzly beer the unwisely sudsy blue moon. When you see the stupid Fosters, it means that a razor blade beer prays. A polka-dotted pin ball machine ruminates, and a Full Sail IPA takes a coffee break; however, a grizzly beer living with a Hops Alligator Ale can be kind to some college-educated crank case.</p>
            </div>
        </div>
    )
}

export default Homepage; 