import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeersImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';


function HomePage() {
    return (
        <div className="homepage col-auto">
            <Link to='/beers'>
                <div className="imagesHome">
                    <img src={beersImg} alt='allBeers' />
                    <div className="container">
                        <h2>All Beers</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nulla tortor. Vivamus suscipit bibendum leo a dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin elementum metus eget tristique maximus. Vestibulum efficitur ligula a quam laoreet, a tincidunt ante interdum. Aliquam id elit nec velit finibus pretium. </p>
                    </div>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div className="imagesHome">
                    <img src={randomBeersImg} alt='randomBeer' />
                    <div className="container">
                        <h2>Random beer</h2>
                        <p>Praesent tincidunt arcu vel est mollis, ut mattis ipsum pulvinar. Cras a augue eu nisl vestibulum fringilla vitae quis lectus. Vestibulum a dignissim enim. Nunc quis suscipit mauris. Etiam et odio sed odio volutpat congue quis nec eros. Ut et posuere metus, ac ultrices eros. Donec tincidunt ultrices quam, id mollis lorem pellentesque in. Nam pharetra mauris nulla, nec volutpat ante consectetur vel. </p>
                    </div>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div className="imagesHome">
                    <img src={newBeerImg} alt='newBeer' />
                    <div className="container">
                        <h2>New Beer</h2>
                        <p>Aliquam id enim sit amet magna malesuada tristique sed ornare dolor. Cras pellentesque at nisl eu finibus. Phasellus sed nibh quis sapien sodales aliquet et vel velit. Ut vel lectus orci. Vivamus odio mauris, placerat vitae mi eget, lobortis cursus elit. Aenean accumsan mi sed velit placerat posuere. Etiam sed tellus gravida sapien tempus semper at quis lorem.</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;