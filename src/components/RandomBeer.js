import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function RandomBeer() {
  const { Id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/random")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log("error getting Beer details by ID from API....", e);
      });
  }, [Id]);
  console.log(details);

  function renderDetails() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <div>
        <p className="text-lg mb-4">Random Beer</p>
        </div>
        <div className="container mx-auto bg-white  shadow-lg rounded-lg drop-shadow-sm hover:drop-shadow-xl pb-4 m-8">
          <div className="text-gray-700 text-base font-sans font-semiboild">
            
            <img
              className="w-32 h-128 rounded-lg shadow-lg mx-auto"
              src={details.image_url}
              alt={details.name}
            />
            <br />
            <div className="text-gray-700 text-base bg-slate-200 font-semibold rounded-xl mb-4 ml-6 mr-6 font-sans font-semiboild">
              <p>{details.name ?? ""}</p>
              <br />
              <p>{details.tagline ?? ""}</p>
              <p>First Brewed: {details.first_brewed ?? ""}</p>
              <p>Attenuation Level: {details.attenuation_level ?? ""}</p>
              <br />
              <p>Description</p>
              <br />
              <p>{details.description ?? ""}</p>
              <br />
              <p>Contributed by: </p>
              <p>{details.contributed_by ?? ""}</p>

              <Link
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-8 hover:subpixel-antialiased mt-6"
                to={"/beers"}>
                Back
              </Link>
            
            </div>
          </div>
        </div>
      </>
    );
  }
  return <>{details ? renderDetails() : "loading..."}</>;
}

export default RandomBeer;
