import React from "react";
import useForm from "./useForm";
import axios from "axios";

function NewBeer(props) {
  const [form, handleInput] = useForm();

  const createBeer = () => {
    axios
      .post(`https://ih-beer-api.herokuapp.com/beers/new`, form)
      .then(({ data }) => {
        console.log(data);

        props.history.push(`/foods/${data.beer._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => handleInput(e)}
        />
      </p>
      <p>
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={e => handleInput(e)}
        />
      </p>
      <p>
        <label>Food pairing</label>
        <input
          type="text"
          name="food pairing"
          placeholder="food pairing"
          onChange={e => handleInput(e)}
        />
      </p>
      <p>
        <label>Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          placeholder="contributed by"
          onChange={e => handleInput(e)}
        />
      </p>
      <button onClick={createBeer}>Create</button>
    </div>
  );
}

export default NewBeer;
