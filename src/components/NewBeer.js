import React, {useState, useEffect} from 'react'

const initialState = {
    name : "",
    tagline : "",
    description : "",
    first_brewed : "",
    brewers_tips : "",
    attenuation_level: 0,
    contributed_by :""
  };

const NewBeerForm = () => {
    const [allValues, setAllValues] = useState(initialState);

    
   /*  useEffect(() => {
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`)
        .then(selectedBeer => {
            console.log(object);
            setBeerState(selectedBeer.data)
        })
        .catch((error)=> "Error while fetching the beer from API") */
       }
       //)

function NewBeer() {
    return (
     /*    <div>
      <form onSubmit={handleFormSubmission} className="add-new-beer">
        <label>Name:</label>
        <input
          type="text"
          name="title"
          value={allValues.title}
          onChange={inputChangeHandler}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={allValues.director}
          onChange={inputChangeHandler}
        />

        <label>Oscar Awarded:</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={allValues.hasOscars}
          onChange={inputChangeHandler}
        />

        <label>IMDb Rating:</label>
        <input
          type="text"
          name="IMDbRating"
          value={allValues.IMDbRating}
          onChange={inputChangeHandler}
        />

        <button>Submit</button>
      </form>
    </div> */
    )
}

export default NewBeer
