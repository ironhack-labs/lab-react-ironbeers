import { Link } from "react-router-dom";
import allBeersCover from "../../assets/beers.png";
import randomBeerCover from "../../assets/random-beer.png";
import newBeerCover from "../../assets/new-beer.png";

const Home = ( ) => {
    const allBeersData={
      title:"All Beers",
      anchor:"/beers",
      description:"Take a look at all the beers"
    }
    const randomBeerData={
      "title":"Random Beer",
      anchor:"/random-beer",
      description:"Take a look at a random beer"
    }
    const newBeerData={ 
    title:"New Beer",
    anchor:"/new-beer",
    description:"Submit your own beer"
  }

  return (
    <div className="App">
        {/* ALL BEERS */}
        <div className='card-container' >
                    <img 
                    src={allBeersCover} 
                    alt={allBeersData.title} 
                    style={{ width: 100, height: 100 }}
                    />
                    <Link to={allBeersData.anchor}>
                    <h2>{allBeersData.title}</h2>
                    <p>{allBeersData.description}</p>
                </Link>
            </div>
        {/* RANDOM BEER*/}
        <div className='card-container' >
                    <img 
                    src={randomBeerCover} 
                    alt={randomBeerData.title} 
                    style={{ width: 100, height: 100 }}
                    />
                    <Link to={randomBeerData.anchor}>
                    <h2>{randomBeerData.title}</h2>
                    <p>{randomBeerData.description}</p>
                </Link>
            </div>
         {/* NEW BEER */}
        <div className='card-container' >
                    <img 
                    src={newBeerCover} 
                    alt={newBeerData.title} 
                    style={{ width: 100, height: 100 }}
                    />
                    <Link to={newBeerData.anchor}>
                    <h2>{newBeerData.title}</h2>
                    <p>{newBeerData.description}</p>
                </Link>
            </div>
    </div>
  );
}

export default Home;
