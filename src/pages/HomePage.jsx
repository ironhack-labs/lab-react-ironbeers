import { Link } from 'react-router-dom'
import beersImage from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png'

function HomePage() {

    return (
        <div>
            <div>
                <img src={beersImage} alt="Beers"/>
                <Link to={'/beers'}>
                    <h1>All Beers</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna. Pellentesque ornare imperdiet nibh sit amet mollis. Nam ac consequat ex, cursus molestie magna. Aliquam vitae efficitur lorem, vel tristique nunc. Integer ac pellentesque enim, fermentum aliquet nisl. Fusce ipsum lacus, aliquet ut tempus ut, lacinia nec leo. Pellentesque eget metus semper, faucibus lacus id, vulputate neque. Nulla eget nulla non diam fermentum rutrum et et turpis.</p>
            </div>
            <div>
                <img src={randomBeer} alt="RandomBeer"/>
                <Link to={'random-beer'}>
                    <h1>Random Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna. Pellentesque ornare imperdiet nibh sit amet mollis. Nam ac consequat ex, cursus molestie magna. Aliquam vitae efficitur lorem, vel tristique nunc. Integer ac pellentesque enim, fermentum aliquet nisl. Fusce ipsum lacus, aliquet ut tempus ut, lacinia nec leo. Pellentesque eget metus semper, faucibus lacus id, vulputate neque. Nulla eget nulla non diam fermentum rutrum et et turpis.</p>
            </div>
            <div>
                <img src={newBeer} alt="NewBeer"/>
                <Link to={'/new-beer'}>
                    <h1>New Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna. Pellentesque ornare imperdiet nibh sit amet mollis. Nam ac consequat ex, cursus molestie magna. Aliquam vitae efficitur lorem, vel tristique nunc. Integer ac pellentesque enim, fermentum aliquet nisl. Fusce ipsum lacus, aliquet ut tempus ut, lacinia nec leo. Pellentesque eget metus semper, faucibus lacus id, vulputate neque. Nulla eget nulla non diam fermentum rutrum et et turpis.</p>
            </div>
        </div>

    )
}

export default HomePage;
