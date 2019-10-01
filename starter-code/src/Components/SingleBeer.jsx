import React from 'react';
import NavBar from './Navbar';

class SingleBeer extends React.Component {


    getBeerDetail = () => {
       let theList = [...this.props.beerList]
       let theId = this.props.match.params.id;
      
    //    console.log("THE LIST IS")
    //   console.log(theList);
    //   console.log("THE ID IS")
    //   console.log(theId);

      let singleBeer = theList.find(eachBeer => {
          return eachBeer._id === theId
      })
      return singleBeer;
    }

    render(){
        const theBeer = this.getBeerDetail()
        console.log("SINGLE BEER IS");
        console.log(theBeer);

        return(
            <div>
                <NavBar/>
            <div></div>
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

export default SingleBeer