import axios from 'axios';
import {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';

// Create in React
// 1) Create a Form 
// 2) Store Data in the State
// 3) handle input value (when changed) with state
// 4) Submit, and POST request with AXIOS
// 5) Navigate

function AddBeerPage() {
  // Write State 
 /* const [beerTitle, setTitle] = useState("");
  const [beerDetail, setDetails] = useState(1);
  const navigate = useNavigate();

  const handleTitleInput = e => setTitle(e.target.value);
  const handleDetailsInput = e => setDetails(e.target.value);

  const handleSubmit = (e) =>{
    // Prevent default operation of Form
    e.preventDefault();
    // Create the body Object to POST request. 
    // On Backend, it will be read as req.body.
    const body = {title: beerTitle, details: beerDetail};

    // Axios 'post' request 
    axios.post("https://ih-beers-api2.herokuapp.com/beers", body)
    .then((response)=>{
        setTitle("");
        setDetails(1);
        navigate('/'); // => redirects to Home Page
    })

  } */

  return (
    <div>
   {/*   <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" name="title" value={beerTitle} 
        onChange={handleTitleInput}/>

        <label>Details</label>
        <input type="text" name="details" value={beerDetail}
        onChange={handleDetailsInput}/>

        <button type="submit">Submit Beer</button>
    </form>  */}
    </div> 
  )
}

export default AddBeerPage 