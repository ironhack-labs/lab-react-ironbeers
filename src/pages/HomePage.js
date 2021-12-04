import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeersImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';


function HomePage() {
    return (
        <div className="homepage col-auto">
            <Link to='/beers'>
                <div>
                    <img src={beersImg} alt='allBeers' />
                    <h2>All Beers</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nulla tortor. Vivamus suscipit bibendum leo a dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin elementum metus eget tristique maximus. Vestibulum efficitur ligula a quam laoreet, a tincidunt ante interdum. Aliquam id elit nec velit finibus pretium. Vivamus pretium, tellus nec congue placerat, urna dolor euismod sem, sit amet rhoncus ligula sem nec libero. Maecenas ut sapien eu nibh condimentum consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut egestas lorem, sed tincidunt nunc. Vestibulum quis rutrum dui. Donec ac justo gravida, mollis quam at, luctus dolor. In et nibh id felis faucibus rutrum et et nibh. Nunc vitae neque a enim tincidunt malesuada. Mauris efficitur placerat ipsum vel tincidunt.</p>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div>
                    <img src={randomBeersImg} alt='randomBeer' />
                    <h2>Random beer</h2>
                    <p>Praesent tincidunt arcu vel est mollis, ut mattis ipsum pulvinar. Cras a augue eu nisl vestibulum fringilla vitae quis lectus. Vestibulum a dignissim enim. Nunc quis suscipit mauris. Etiam et odio sed odio volutpat congue quis nec eros. Ut et posuere metus, ac ultrices eros. Donec tincidunt ultrices quam, id mollis lorem pellentesque in. Nam pharetra mauris nulla, nec volutpat ante consectetur vel. Duis tincidunt purus eget aliquet elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet ultricies dui, id vestibulum enim egestas sit amet. Cras tincidunt diam leo, lobortis suscipit nibh volutpat vitae.</p>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div>
                    <img src={newBeerImg} alt='newBeer' />
                    <h2>New Beer</h2>
                    <p>Aliquam id enim sit amet magna malesuada tristique sed ornare dolor. Cras pellentesque at nisl eu finibus. Phasellus sed nibh quis sapien sodales aliquet et vel velit. Ut vel lectus orci. Vivamus odio mauris, placerat vitae mi eget, lobortis cursus elit. Aenean accumsan mi sed velit placerat posuere. Etiam sed tellus gravida sapien tempus semper at quis lorem.</p>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;