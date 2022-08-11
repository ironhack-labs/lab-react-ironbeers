import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";
import { createNewBeer } from "../services/calls";
import { Children } from "react";

const NewBeer = () => {
  const [Name, setName] = useState("");
  const [Tagline, setTagline] = useState("");
  const [Description, setDescription] = useState("");
  const [FirstBrewed, setFirstBrewed] = useState("");
  const [BrewersTips, setBrewersTips] = useState("");
  const [AttenuationLevel, setAttenuationLevel] = useState(0);
  const [ContributedBy, setContributedBy] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "tagline":
        setTagline(value);
        break;
      case "firstBrewed":
        setFirstBrewed(value);
        break;
      case "brewersTips":
        setBrewersTips(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "attenuationLevel":
        setAttenuationLevel(value);
        break;
      case "contributedBy":
        setContributedBy(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async() => {
    const isCreated = await createNewBeer({
      Name,
      Tagline,
      Description,
      FirstBrewed,
      BrewersTips,
      AttenuationLevel : parseInt(AttenuationLevel),
      ContributedBy
    });
    console.log(isCreated)
  };

  return (
    <>
      <Header />
      <h1>Add a beer</h1>
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            label="Name"
            type="text"
            name="name"
            value={Name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Tagline"
            type="text"
            name="tagline"
            value={Tagline}
            onChange={(e) => handleChange(e)}
          />

          <label>
            Description
            <textarea
              name="description"
              value={Description}
              cols="20"
              rows="10"
              type="text"
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>

          <Input
            label="First Brewed"
            type="text"
            name="firstBrewed"
            value={FirstBrewed}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Brewers Tips"
            type="text"
            name="brewersTips"
            value={BrewersTips}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Attenuation Level"
            type="number"
            name="attenuationLevel"
            value={AttenuationLevel}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Contributed By"
            type="text"
            name="contributedBy"
            value={ContributedBy}
            onChange={(e) => handleChange(e)}
          />
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NewBeer;
