import { AllBeers, NewBeer, RandomBeer } from '../../components';

const HomePage = () => {
    return(
        <div>
            <AllBeers />
            <RandomBeer />
            <NewBeer />
        </div>
    );
};

export default HomePage;