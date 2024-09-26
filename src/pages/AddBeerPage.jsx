import { useEffect, useState } from "react";
import axios, { Axios } from "axios";




function AddBeerPage() {
    //************state*********** */
    const [formData, setForData] = useState({
        name: '',
        tagline: '',
        description: '',
        brewers_tips: '',
        first_brewed: '',
        attenuation_level: 0,
        contributed_by: ''


    })
    //**********handleChange******** */

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setForData({
            ...formData,
            [name]: value
        })
        console.log (formData)


    }
    //*********handleSubmit*************** */

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://ih-beers-api2.herokuapp.com/beers/new',
            data: formData  
        }).then(res => {
            console.log("RESPUESTA DEL SERVIDOR : ", res.data)
        }).catch(error => {
            console.error("error al enviar peticion", error);
        });
        console.log(formData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group  mb-2 ">
                <label type="text">Name</label>
                <input onChange={handleChange} value={formData.name} className="form-control" type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group  mb-2">
                <label type="text">Tagline</label>
                <input onChange={handleChange} value={formData.tagline} className="form-control" type="text" name="tagline" placeholder="Tagline" />
            </div>
            <div className="form-group  mb-2">
                <label >Description</label>
                <textarea  onChange={handleChange} value={formData.description} className="form-control" type="textArea" name="description" placeholder="Description" />
            </div>
            <div className="form-group  mb-2">
                <label type="text">Brewer's tips</label>
                <input onChange={handleChange} value={formData.brewers_tips} className="form-control" type="text" name="brewers_tips" placeholder="First brewed" />
            </div>
            <div className="form-group  mb-2">
                <label type="text">First brewed</label>
                <input onChange={handleChange} value={formData.first_brewed} className="form-control" type="text" name="first_brewed" placeholder="First brewed" />
            </div>
            <div className="form-group  mb-2">
                <label type="text">Attenuation level</label>
                <input onChange={handleChange} value={formData.attenuation_level} className="form-control" type="number" name="attenuation_level" placeholder="Attenuation level" />
            </div>
            <div className="form-group  mb-2">
                <label type="text">Contributed By</label>
                <input onChange={handleChange} value={formData.contributed_by} className="form-control" type="text" name="contributed_by" placeholder="Contributed By" />
            </div>


            <button type="submit" className="btn btn-primary">Add beer</button>
        </form>
    )
}

export default AddBeerPage;
