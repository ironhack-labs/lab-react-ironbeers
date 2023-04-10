import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

function CreateBeer() {

    const navigate = useNavigate();

    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
      })

      const changeHandler = (target) => {
        setNewBeer((prevState)=>{
          return {...prevState, [target.name] : target.value}
        })
      }

      const submitForm = (event) => {
        event.preventDefault();
        axios
          .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
          .then((response) => {
            console.log(response);
            navigate("/");
          })
          .catch((err) => console.error(err));
      }

    return (
        <div> 
        <header>
            <Link to="/">Home</Link>
        </header>

        <section>
            <h1>Add a new beer!</h1>
            <form onSubmit={(event) => {submitForm(event)}}>
                <label> Name of beer:
                    <input type="text" name="name" value={newBeer.name} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> Beer Tagline:
                    <input type="text" name="tagline" value={newBeer.tagline} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> Beer description:
                    <input type="text" name="description" value={newBeer.description} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> First brewed?:
                    <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> Brewer's tips:
                    <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> Attenuation level?:
                    <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <label> Contributor:
                    <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={(event)=>{changeHandler(event.target)}}/>
                </label>
                <button type="submit">Create</button>
            </form>
        </section>

        </div>
    )
}

export default CreateBeer;