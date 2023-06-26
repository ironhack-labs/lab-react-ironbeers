import Header from "../components/Header" ;
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
    // const [img , setImg] = useState("");
    // const [beerName, setBeerName] = useState("") ;
    //  const [tag , setTag] = useState("");
    // const [desc , setDesc] = useState("");
    // const [first , setFirst] = useState("");
    // const [brewt , setBrewt] = useState("");
    // const [att , setAtt] = useState("");
    // const [cont , setCont] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newBeer = {
    //         img: img,
    //         title: beerName,
    //         tagline: tag,
    //         description: desc,
    //         first_brewed: first,
    //         brewers_tips: brewt,
    //         attenuation_level: att,
    //         contributed_by:cont
    //     };
        

    //     axios.post(`${process.env.REACT_APP_API_URL}/beers`, newBeer)
    //         .then( response => {
    //             navigate("/beers"); // beer has been created, redirect the user
    //         })
    //         .catch(e => console.log("error creating beer...", e));

    // }
  return (
    <div className="Beers">
    <Header/>
  
    
    {/* <section className="CreateBeer">
    <h1>Create new Beer</h1>

    <form onSubmit={handleSubmit}>
        
    <label>
            Image URL
            <input
                type="text"
                name="img"
                value={img_url}
                onChange={(e) => setImg(e.target.value)}
            />
        </label>
        
        <label>
            Title:
            <input 
                type="text" 
                name="title" 
                value={beerName} 
                onChange={(e) => { setBeerName(e.target.value) }} 
                />
        </label>


       

        <label>
         Tagline
            <input
                type="text"
                name="description"
                value={desc}
                onChange={(e) => set
                    Desc(e.target.value)}
            />
        </label>

        <label>
            Title:
            <input 
                type="text" 
                name="title" 
                value={beerName} 
                onChange={(e) => { setBeerName(e.target.value) }} 
                />
        </label>
        <label>
            Title:
            <input 
                type="text" 
                name="title" 
                value={beerName} 
                onChange={(e) => { setBeerName(e.target.value) }} 
                />
        </label>

        <label>
            Title:
            <input 
                type="text" 
                name="title" 
                value={beerName} 
                onChange={(e) => { setBeerName(e.target.value) }} 
                />
        </label>
        <button>Create</button>

    </form>
</section> */}
</div>
  );
}
export default NewBeer;
