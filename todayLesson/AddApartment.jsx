import {useState} from 'react';
import axios from 'axios';
import React from 'react';


//this useNavigate hook is used to redirect the user to another page
import {useNavigate} from 'react-router-dom';


function AddApartment() {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);

    //this navigate is to redirect the user to another page
    const navigate = useNavigate();


    
//needed because if we're doing some adding or deleting 
    //-> by placing the number inside it, setPrice(Number(e.target.value)), we're making sure the value sent is a number

    //handler fcuntions
    const handleTitle = (e) => setTitle(e.target.value);
    const handlePrice = (e) => setPrice(Number(e.target.value));


    //TO SUBMIT THE INFO WE INPUT IN THE FORM TO THE EXTERNAL API
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        //we need to do pricePerDay because that's how it's written on the API, so, if we want to give it a new name, in this case price, we need to make the following change. pricePerDay: price
        const newApartment = {
            title: title,
            pricePerDay: price,
            
        }

        try {
            //we need to past the API url!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! API Post
            await axios.post('https://ironbnb-m3.herokuapp.com/apartments',
            newApartment);

            //so, after we create it, we redirect to, for example, home page, using navigate:
            navigate('/');
            
        } catch (error) {
            console.log(error)
        }


    };

  return (
    <div className='AddApartmentPage'>

        <h3>Add New Apartment</h3>


        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={title} onChange={handleTitle} />

            <label htmlFor="price">Price</label>
            <input type="number" name="price" value={price} onChange={handlePrice} />

            <button type='submit'>Create apartment</button>

        </form>

    </div>
  );
}

export default AddApartment;