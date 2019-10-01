import React from 'react';
import NavBar from './Navbar'
import axios from 'axios'

class RandomBeer extends React.Component {

constructor(props){
    super(props);

    this.state={
        randomBeer: {}
    }
}
    async componentDidMount(){
    
        const theRandom = await this.getRandomBeer();
    
        this.setState({
          randomBeer: theRandom
        })
      }

      getRandomBeer = async() => {

        return await axios.get(`${this.props.theUrl}${this.props.match.path}`)
        .then(theData => {
          return theData.data
        }).catch(err => {
      console.log(err);
        })
      }
      
    render(){

        let theBeer = this.state.randomBeer;

        return (
            <div>
             <NavBar/>
<div class="card">
  <div class="card-body">
    <div>
        <img src={theBeer.image_url} alt="TheBeerPicture" width="100px" height="300px" ></img>
    </div>
           <div>
           <span>{theBeer.name}</span>
           <span>{theBeer.attenuation_level}</span>   
           </div>
           <div>
           <span>{theBeer.tagline}</span>
           <span>{theBeer.first_brewed}</span>
           </div>
           <p>{theBeer.description}</p>
           <p>{theBeer.contributed_by}</p>

  </div>
</div>




            </div>
        )
    }
}

export default RandomBeer;