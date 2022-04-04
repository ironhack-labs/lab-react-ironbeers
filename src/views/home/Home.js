import React from 'react';
import { Link } from 'react-router-dom';
import SectionCard from '../../components/sectionCard/SectionCard';
import image1 from '../../assets/beers.png';
import image2 from '../../assets/random-beer.png';
import image3 from '../../assets/new-beer.png';

const Home = () => {
    const description = "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.";

    return(
        <div>
            <h1>Wellcome to IronBeers... Other time!!!</h1>
            <Link to='/allProducts'>
                <SectionCard 
                    img={image1} 
                    tittle="All beers"
                    description={description}
                />
            </Link>
            <Link to='/random'>
                <SectionCard 
                    img={image2} 
                    tittle="Random beers"
                    description={description}
                />
            </Link>
            <Link to='/product/newProduct'>
                <SectionCard 
                    img={image3} 
                    tittle="New beers"
                    description={description}
                />
            </Link>
        </div>
    );
}

export default Home;