import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BeerDetails from "../components/BeerDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axios
      .get(process.env.REACT_APP_API + "/" + id)
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
        className="py-2 px-4 mb-8 text-gray-500 font-semibold text-sm inline-block right-0 absolute"
        to="/beers/"
      >
        Back to beers
      </Link>
    </>
  );
};

export default SingleBeer;
