import { useState } from "react";

function NewBeer(props){
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel , setAttenuationLevel ] = useState(0);
    const [contributedBy , setContributedBy ] = useState('');




    const handleSubmit = (e)=>{
        e.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed, 
            brewers_tips: brewersTips, 
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        };
        props.createBeer(newBeer);
    }

    return(
        <>
        <header>
            <a href="/">Home</a>
        </header>


        <form onSubmit={handleSubmit}>

        <div className="form-group">
            <label className="form-label">Name:    
                <input className="form-control" id="exampleFormControlInput1" type="text" name="name" value={name} onChange= {(e)=>{
                    setName(e.target.value)}} />
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">Tagline :   
                <input className="form-control" id="exampleFormControlInput1" type="text" name="tagline" value={tagline} onChange= {(e)=>{
                    setTagline(e.target.value)}}/>
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">Description :    
                <input className="form-control" id="exampleFormControlInput1" type="text" name="description" value={description} onChange= {e=>{
                    setDescription(e.target.value)}}/>
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">First brewed:  
                <input className="form-control" id="exampleFormControlInput1" type="text" name="first_brewed" value={firstBrewed} onChange= {e=>{
                    setFirstBrewed(e.target.value)}}/>
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">Brewers tips:   
                <input className="form-control" id="exampleFormControlInput1" type="text" name="brewers_tips" value={brewersTips} onChange= {e=>{
                    setBrewersTips(e.target.value)}}/>
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">Attenuation level:    
                <input className="form-control" id="exampleFormControlInput1" type="NUMBER" name="attenuation_level" value={attenuationLevel} onChange= {e=>{
                    setAttenuationLevel(e.target.value)}}/>
            </label> 
        </div>

        <div className="form-group">
            <label className="form-label">Contributed by:    
                <input className="form-control" id="exampleFormControlInput1" type="text" name="contributed_by" value={contributedBy} onChange= {e=>{
                    setContributedBy(e.target.value)}}/>
            </label> 
        </div>
            

            <button className="btn btn-primary" type="submit" >ADD NEW</button>

        </form>
        </>
    )
    }

export default NewBeer;
