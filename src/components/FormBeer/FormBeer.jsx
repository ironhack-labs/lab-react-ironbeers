import { useState } from "react";
import { addBeer } from "../../services/beer-services";


function FormBeer() {

  const [data, setData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed:"",
    brewers_tips: "",
    attenuation_level:"",
    contributed_by: ""
  })

  const handleOnChange = (event) =>{
    console.log("handle on chage");
    const {value, name} = event.target
    setData({...data,[name]:value})
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(data);
    addBeer(data)
  }

  return ( 
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input type="text"
            name="name" id="name"
            value={data.name} onChange={handleOnChange}
            placeholder="Name of the beer"
            required
          />
        </div>

         <div className="mb-3">
          <input type="text"
            name="tagline" id="tagline"
            value={data.tagline} onChange={handleOnChange}
            placeholder="tagline of the beer"
          />
        </div>

         <div className="mb-3">
          <input type="text"
            name="description" id="description"
            value={data.description} onChange={handleOnChange}
            placeholder="description of the beer"
          />
        </div>

         <div className="mb-3">
          <input type="text"
            name="first_brewed" id="first_brewed"
            value={data.first_brewed} onChange={handleOnChange}
            placeholder="first_brewed of the beer"
          />
        </div>

         <div className="mb-3">
          <input type="number"
            name="attenuation_level" id="attenuation_level"
            value={data.attenuation_level} onChange={handleOnChange}
            placeholder="attenuation_level of the beer"
          />
        </div>

         <div className="mb-3">
          <input type="text"
            name="contributed_by" id="contributed_by"
            value={data.contributed_by} onChange={handleOnChange}
            placeholder="contributed_by"
          />
        </div>

      <button>Submit</button>
    </form>
    </div>
   );
}

export default FormBeer;