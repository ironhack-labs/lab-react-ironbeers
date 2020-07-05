import React, { Component } from 'react';
import HomeLink from './HomeLink';



const AddBeer =()=>{


    
    const submitBeer =(event)=>{
        // let newBeer={
        //     name: event.name.value,
        //     tagline: event.tag.value,
        //     description: event.description.value,
        //     first_brewed: event.firstBrewed.value,
        //     brewers_tips: event.brewerTips.value,
        //     attenuation_level: event.attenuation.value,
        //     contributed_by: event.contributed.value
        // }
        
        alert(event)
    }
    
    const displayForm =()=>{
        return(
            <form onSubmit={submitBeer()}>
                <label >Name: </label>
                <input type='text' name='name'/>
                <br />
                <label >Tagline: </label>
                <input type='text' name='tag'/>
                <br />
                <label >Description: </label>
                <textarea name='description'/>
                <br />
                <label >First Brewed: </label>
                <input type='text' name='firstBrewed'/>
                <br />
                <label >Brewers Tips: </label>
                <input type='text' name='brewerTips'/>
                <br />
                <label >Attentuation Level: </label>
                <input type='number' name='attenuation'/>
                <br />
                <label >Contributed By: </label>
                <input type='text' name='contributed'/>
                <br />
                <input type="submit" />
            </form>
        );
    };
    
        return (
            <div>
                <HomeLink />
                {displayForm()}
            </div>
        );
}

export default AddBeer;