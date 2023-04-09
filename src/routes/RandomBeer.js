import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BeerDetails from "../components/BeerDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const RandomBeer = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(process.env.REACT_APP_API + "/random")
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      {details ? <BeerDetails beer={details} /> : <Spinner />}
      <Link
        className="py-2 px-4 mt-4 bg-gray-500 text-gray-50 rounded font-semibold text-sm uppercase tracking-wide inline-block right-4 absolute"
        to="/beers/"
      >
        Back to beers
      </Link>
    </>
  );
};

export default RandomBeer;
