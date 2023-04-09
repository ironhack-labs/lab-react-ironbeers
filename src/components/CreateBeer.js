import { useState } from "react";

function CreateBeer() {
  const [name, setName] = useState("");
  function handleForm(e) {
    e.preventDefault();
    console.log(name);

    // Here we would create a new Object out of the values provided and then pass it as
    // second argument to axios.post.
  }
  return (
    <form onSubmit={handleForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default CreateBeer;
