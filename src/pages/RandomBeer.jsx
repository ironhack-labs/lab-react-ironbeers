import { useEffect, useState } from "react";

function RandomBeer(props) {
  const [randomBeer, setRandomBeer] = useState(null);
  const { beers } = props;

  useEffect(() => {
    setRandomBeer(beers[Math.floor(Math.random() * beers.length)]);
  }, []);

  const handleClick = (e) => {
    setRandomBeer(beers[Math.floor(Math.random() * beers.length)]);
  };

  return (
    <>
      {randomBeer && (
        <div className="flex flex-col w-full">
          <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <figure className="flex justify-center">
                  <img className="w-20" src={randomBeer.image_url} alt="beer" />
                </figure>
                <h1 className="text-5xl font-bold">{randomBeer.name}</h1>
                <h1 className="text-5xl font-bold">{randomBeer.title}</h1>
                <p className="py-6">{randomBeer.description}</p>
                <p className="py-6">
                  Beer ABV: {randomBeer.abv} - Beer IBU: {randomBeer.ibu}
                </p>
                <button className="btn btn-outline" onClick={handleClick}>
                  Load new beer!
                </button>
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomBeer;
