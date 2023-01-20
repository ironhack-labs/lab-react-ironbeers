import {  NavLink, } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewBeer (props){

    const [name,setName] = useState("");
    const [tagline,setTagline] = useState("");
    const [description,setDescription] = useState("");
    const [first_brewed,setFirstBrewed] = useState("");
    const [brewers_tips,setBrewersTips] = useState("");
    const [attenuation_level,setLevel] = useState(0);
    const [contributed_by,setContributedby] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        
        const newBeer = {
         
          "name": name,
          "tagline": tagline,
          "description":description,
          "first_brewed":first_brewed ,
          "brewers_tips":brewers_tips,
          "attenuation_level":attenuation_level,
          "contributed_by":contributed_by
         
        };
    
        props.callbackToCreate(newBeer);
    
    //clear form */
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setLevel(0);
   setContributedby("");
    navigate("/")
    }
    







    return (
        <>
         <nav>
            <NavLink to="/">Home</NavLink>
            </nav>
            <h1>new beer creation</h1>
        
        
<h2>Create apartment</h2>
<form onSubmit={handleSubmit}>

<label>
Name:
  <input type="text" name = "name"
    placeholder="enter the name" 
   value={name}  
   onChange={(e) => { setName(e.target.value) }} />
</label>

<label>
attenuation_level:
<input type= "number" name ="attenuation_level" 
placeholder="attenuation_level"
 min ={ 0 }max = {1000} 
 value ={attenuation_level}
onChange = {(e) =>{setLevel(e.target.value)}} />
</label>


<label>
tagline:
<input type ="text" name = "tagline"
placeholder="Enter a tagline"
 value ={tagline}
onChange = {(e) =>{setTagline(e.target.value)}} />
</label>


<label>
description:
<input type ="text" name = "description"
placeholder="Enter a description"
 value ={description}
onChange = {(e) =>{setDescription(e.target.value)}} />
</label>


<label>
first Brewed:
<input type ="text" name = "first_brewed"
placeholder="Enter first_brewed"
 value ={first_brewed}
onChange = {(e) =>{setFirstBrewed(e.target.value)}} />
</label>

<label>
Brewers Tips:
<input type ="text" name = "brewers_tips"
placeholder="Enter brewers_tips"
 value ={brewers_tips}
onChange = {(e) =>{setBrewersTips(e.target.value)}} />
</label>


<label>
Contributed by:
<input type ="text" name = "contributed_by"
placeholder="Enter contributed_by"
 value ={contributed_by}
onChange = {(e) =>{setContributedby(e.target.value)}} />
</label>





  <button>Create A New BEER!</button>
</form>

    </>




    )
}


export default NewBeer;