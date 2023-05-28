import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";

function BeerDetailsPage() {
  const params = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  if (details === null) {
    return (
      <>
        <Header />
        ...loading
      </>
    );
  }
  return (
    <div>
      <Header />
      <BeerDetails details={details} />
    </div>
  );
}

export default BeerDetailsPage;
