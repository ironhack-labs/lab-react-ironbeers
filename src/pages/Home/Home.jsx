import { Link } from "react-router-dom";
import "./Home.css"
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
                    />
                    <Link to={allBeersData.anchor} className="link">
                    <h2>{allBeersData.title}</h2>
                    <p>{allBeersData.description}</p>
                </Link>
            </div>
        {/* RANDOM BEER*/}
        <div className='card-container' >
                    <img 
                    src={randomBeerCover} 
                    alt={randomBeerData.title} 
                    />
                    <Link to={randomBeerData.anchor} className="link">
                    <h2>{randomBeerData.title}</h2>
                    <p>{randomBeerData.description}</p>
                </Link>
            </div>
         {/* NEW BEER */}
        <div className='card-container' >
                    <img 
                    src={newBeerCover} 
                    alt={newBeerData.title} 
                    />
                    <Link to={newBeerData.anchor} className="link">
                    <h2>{newBeerData.title}</h2>
                    <p>{newBeerData.description}</p>
                </Link>
            </div>
    </div>
  );
}

export default Home;
