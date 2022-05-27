// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';

// function NewBeer() {
//   const [name, setName] = useState('');
//   const [tagline, setTagline] = useState('');
//   const [description, setDescription] = useState('');
//   const [first_brewed, setFirst_brewed] = useState('');
//   const [brewers_tips, setBrewers_tips] = useState('');
//   const [attenuation_level, setAttenuation_level] = useState('');
//   const [contributed_by, setContributed_by] = useState('');

//   const handleName= (e) => setName(e.target.value);
//   const handleTagline = (e) => setTagline(e.target.value);
//   const handleDescription = (e) => setDescription(e.target.value);
//   const handleFirst_brewed = (e) => setFirstBrewed(e.target.value);
//   const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
//   const handleContributedBy = (e) => setContributedBy(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const body = { name, tagline, description };

//     axios
//       .post('http://localhost:5005/api/projects', body)
//       .then(() => {
//         setName('');
//         setTagline('');
//         setDescription("");

//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//         <Navbar/>

//         <h3>Add Project</h3>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="title" value={name} onChange={handleName} />

//         <label htmlFor="tagline">Tagline</label>
//         <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

//         <label htmlFor="description">Description</label>
//         <textarea
//           name="description"
//           cols="30"
//           rows="10"
//           value={description}
//           onChange={handleDescription}
//         ></textarea>

//         <button type="submit">Add Project</button>
//       </form>

//     </div>
//   )
// }

// export default NewBeer

import React, { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTagline = (e) => setTagline(e.tagline.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      firstBrewed,
      attenuationLevel,
      contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", body)
      .then(() => {
        setName("");
        setDescription("");
        setTagline("");
        setFirstBrewed("");
        setAttenuationLevel(0);
        setContributedBy("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="firstBrewed">First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="contributedBy">Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewBeer;
