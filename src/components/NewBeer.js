import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import NavBar from "./NavBar";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmitCreateBeer = (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    console.log(newBeer);

    axios
      .post(`${process.env.REACT_APP_APIURL}/new`, newBeer)
      .then(() => {
        navigate("/beers");
      })
      .catch((error) => console.log("Getting error during post...", error));
  };
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="container mx-auto bg-white  shadow-lg rounded-lg drop-shadow-lg hover:drop-shadow-2xl pb-4 m-12">
        <div className="text-gray-700 text-base font-sans font-semiboild">
          <div className="font-bold text-2xl mb-6 pt-4">
            <h1>Create a new beer!</h1>
          </div>
          <form onSubmit={handleSubmitCreateBeer}>
            <label>Name</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <br />
            <label>Tagline</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="text"
              name="tagline"
              value={tagline}
              onChange={(event) => setTagline(event.target.value)}
            />
            <br />
            <label>Description</label>
            <br />
            <textarea
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="text"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <br />
            <label>First Brewed</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="date"
              name="firstBrewed"
              value={firstBrewed}
              onChange={(event) => setFirstBrewed(event.target.value)}
            />

            <br />
            <label>Brewers Tips</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="text"
              name="brewersTips"
              value={brewersTips}
              onChange={(event) => setBrewersTips(event.target.value)}
            />
            <br />
            <label>Attenuation Level</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="number"
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={(event) => setAttenuationLevel(event.target.value)}
            />
            <br />
            <label>Contributed By</label>
            <br />
            <input
              className="rounded-xl mb-4 ml-6 mr-6 font-sans drop-shadow-lg font-semiboild"
              type="text"
              name="contributedBy"
              value={contributedBy}
              onChange={(event) => setContributedBy(event.target.value)}
            />
            <br />
            <button className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mb-8 hover:subpixel-antialiased mt-6">
              ADD NEW
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default NewBeer;
