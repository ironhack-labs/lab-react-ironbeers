import axios from "axios";
import React, { useEffect, useState } from "react";

const NewBeer = ({ baseUrl }) => {
  const [values, setValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);

    axios({
      method: "POST",
      url: `${baseUrl}/new`,

      data: values,
    }).then(() => {
      console.log(`you did it!`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        value={name}
        type="text"
        name="name"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Tagline</label>
      <input
        value={tagline}
        type="text"
        name="tagline"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Description</label>
      <input
        value={description}
        type="text"
        name="description"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>First Brewed</label>
      <input
        value={first_brewed}
        type="text"
        name="first_brewed"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      <label>Brewers Tips</label>
      <input
        value={brewers_tips}
        type="text"
        name="brewers_tips"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Attenuation Level</label>
      <input
        value={attenuation_level}
        type="number"
        name="attenuation_level"
        min={0}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label>Contributed By</label>
      <input
        value={contributed_by}
        type="text"
        name="contributed_by"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default NewBeer;
