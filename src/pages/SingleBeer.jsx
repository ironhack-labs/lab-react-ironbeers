import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BeerContext } from '../context/beer.context';
import SingleBeerComponent from './SingleBeerComponent';
import GridLoader from 'react-spinners/GridLoader';

function SingleBeer() {
  const { beers, loading } = useContext(BeerContext);
  const { beerId } = useParams();

  const selectedBeer = beers.find((beer) => {
    return beer._id === beerId;
  });

  // setSelectedBeer(
  //   beers.find((beer) => {
  //     return beer._id === beerId;
  //   })
  // );

  // const findBeer = (beerId) => {
  //   if (!loading) {
  //     beers.find((beer) => {
  //       return beer._id === beerId;
  //     });
  //   }
  // };

  // async function oneBeer() {
  //   beers.find((beer) => {
  //     return beer._id === beerId;
  //   });
  // }

  return (
    <>
      {loading && (
        <div className="flex">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      {!loading && <SingleBeerComponent aBeer={selectedBeer} />}
    </>
  );
}
export default SingleBeer;

// const [selectedBeer, setSelectedBeer] = useState();
// const [loading, setLoading] = useState();

// useEffect(() => {
//   // if (beerId) {
//   async function fetchOneBeer() {
//     const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
//     const response = await fetch(apiURL);
//     const data = await response.json();
//     setSelectedBeer(data);
//     setLoading(false);
//     console.log(data);
//   }
//   fetchOneBeer();
//   // }
//   return function () {
//     setSelectedBeer({});
//   };
// }, [beerId]);
