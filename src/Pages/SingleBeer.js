import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SingleBeerDetails from "../components/SingleBeerDetails";

function SingleBeer(props) {
  const { beerId } = useParams();
  console.log(beerId);
  const myBeer = props.beers.find((oneBeer) => {
    return oneBeer._id === beerId;
  });

  console.log(myBeer);

  return (
    <div>
      <Navbar />
      <SingleBeerDetails beer={myBeer} />
    </div>
  );
}

export default SingleBeer;
