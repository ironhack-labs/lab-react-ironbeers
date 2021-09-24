import axios from "axios";
import React,{ useState } from "react";

function NewBeer() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tagline, setTagline] = useState(undefined);
  
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer= { name:name, image_url:image, tagline:tagline};

    console.log("New Food:", newBeer);

    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
    .then((result)=>{
    
    setName("");
    setImage("");
    setTagline("");

    })

    
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} type="text" onChange={handleNameInput} />
      <label>Image</label>
      <input value={image} type="text" onChange={handleImageInput} />
      <label>Tagname</label>
      <input value={tagline} type="text" onChange={handleTaglineInput} />
      <button type="submit">Create New Beer</button>
    </form>
  );
}

export default NewBeer;
