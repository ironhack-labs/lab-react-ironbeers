import { useState } from "react";

// Iteration 4
function CreateBeer(props) {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      title: title,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    // update list of Beers in local
    // props.setBeers((prevBeers) => {
    //   return [newBeer, ...prevBeers];
    // });

    // update list of Beers in API!!!!!!!!
    props.createBeer(newBeer);

    // clear form
    // setTitle("");
    // setTagline("");
    // setDescription("");
    // setFirstBrewed("");
    // setBrewersTips("");
    // setAttenuationLevel(0);
    // setContributedBy("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Add Beer Details</div>
      <br />
      <label>Title</label>

      {
        <input
          type="text"
          value={title}
          name="title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      }
      <br />
      <label>Tagline</label>
      {
        <input
          type="text"
          value={tagline}
          name="tagline"
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
      }
      <br />
      <label>Description</label>
      {
        <input
          type="text"
          value={description}
          name="description"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      }
      <br />
      <label>First Brewed</label>
      {
        <input
          type="text"
          value={firstBrewed}
          name="first_brewed"
          required
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
      }
      <br />
      <label>Brewer's Tips</label>
      {
        <input
          type="text"
          value={brewersTips}
          name="brewers_tips"
          required
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
      }
      <br />
      <label>Attenuation Level</label>
      {
        <input
          type="number"
          value={attenuationLevel}
          name="attenuation_level"
          required
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />
      }
      <br />
      <label>Contributed by</label>
      {
        <input
          type="text"
          value={contributedBy}
          name="contributed_by"
          required
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
      }
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateBeer;
