import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <main>
        <Link className="Section" to='/beers'>
            <section>
                <img src={logo} alt="logo" width="200px"/>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis, nisi ut facilisis rhoncus, ipsum metus tincidunt tellus, ac cursus nibh leo eget augue. Nullam tincidunt iaculis dapibus. Sed consequat erat ipsum, eu elementum lorem sagittis mattis. Ut convallis posuere dui, consectetur vehicula leo ultrices vulputate. Pellentesque in felis et lacus tincidunt pharetra condimentum nec erat. In neque mauris, interdum sed velit eu, vulputate pharetra mauris. Phasellus at est imperdiet, dignissim ex vel, euismod magna. Vestibulum efficitur eu neque at sollicitudin. Fusce nunc tortor, ultrices vel metus nec, tempor venenatis arcu. Ut sodales dolor eget est fringilla, vitae consequat est fermentum. Cras id cursus ante. Nam malesuada consectetur dolor at euismod. Duis ut arcu eu elit lobortis vulputate. Donec ac consequat sem, non tincidunt enim.</p>
            </section>
        </Link>
        <Link className="Section" to='/random-beer'>
            <section>
                <img src={logo} alt="logo" width="200px"/>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis, nisi ut facilisis rhoncus, ipsum metus tincidunt tellus, ac cursus nibh leo eget augue. Nullam tincidunt iaculis dapibus. Sed consequat erat ipsum, eu elementum lorem sagittis mattis. Ut convallis posuere dui, consectetur vehicula leo ultrices vulputate. Pellentesque in felis et lacus tincidunt pharetra condimentum nec erat. In neque mauris, interdum sed velit eu, vulputate pharetra mauris. Phasellus at est imperdiet, dignissim ex vel, euismod magna. Vestibulum efficitur eu neque at sollicitudin. Fusce nunc tortor, ultrices vel metus nec, tempor venenatis arcu. Ut sodales dolor eget est fringilla, vitae consequat est fermentum. Cras id cursus ante. Nam malesuada consectetur dolor at euismod. Duis ut arcu eu elit lobortis vulputate. Donec ac consequat sem, non tincidunt enim.</p>
            </section>
        </Link>
        <Link className="Section" to='/new-beer'>
            <section>
                <img src={logo} alt="logo" width="200px"/>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis, nisi ut facilisis rhoncus, ipsum metus tincidunt tellus, ac cursus nibh leo eget augue. Nullam tincidunt iaculis dapibus. Sed consequat erat ipsum, eu elementum lorem sagittis mattis. Ut convallis posuere dui, consectetur vehicula leo ultrices vulputate. Pellentesque in felis et lacus tincidunt pharetra condimentum nec erat. In neque mauris, interdum sed velit eu, vulputate pharetra mauris. Phasellus at est imperdiet, dignissim ex vel, euismod magna. Vestibulum efficitur eu neque at sollicitudin. Fusce nunc tortor, ultrices vel metus nec, tempor venenatis arcu. Ut sodales dolor eget est fringilla, vitae consequat est fermentum. Cras id cursus ante. Nam malesuada consectetur dolor at euismod. Duis ut arcu eu elit lobortis vulputate. Donec ac consequat sem, non tincidunt enim.</p>
            </section>
        </Link>
    </main>
  )
}

export default home;