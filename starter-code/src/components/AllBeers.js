import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AllBeers extends Component {
    state = {
        listOfBeers: []
    }


    getAllTheBeers =  async () => {
    const arrayBeers = await axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            try{
                this.setState({listOfBeers: arrayBeers.data})
            }
            catch (error){
                console.log(error)
            }
    }

    componentDidMount() {
        this.getAllTheBeers();
    }


    render() {
        

        return (
            <div>
                <Header className="w-100"/>
                
                    
                
                {this.state.listOfBeers.map((beers,i) => {
               

                return(
                       <div className="w-100" key={i}>
                           
        {/*Todo esto irá dentro de un link que te llevara a la ruta de la beer con la id,
        tanto imagen como el div con los nombres y demás */}
                    <Link className="w-100" to={`/beers/${beers._id}`}style={{color: "black"}}>
                        <div className="d-flex flex-row justify-content-center border-bottom " style={{maxWidth: '100%',maxHeight: "40vh"}} >
                        <div className="w-25 pt-4 ml-5">

                        <img style={{maxWidth: "8vw", maxHeight: "26vh", margin: "4% 0% 4% 10%", textAlign: "center"}} src={beers.image_url} alt="beer"/>
                        </div>
                           <div className="w-100 py-5">
                                <h3 style={{fontSize: "4vh", fontWeight: "300"}}>{beers.name}</h3>
                                <p style={{fontSize: "3vh", fontWeight: "400", color: "gray"}}>{beers.tagline}</p>
                                <sub style={{fontSize: "2vh"}}><b>Created by: </b>{beers.contributed_by}</sub>
                           </div>
                           <hr className="solid"></hr>
                        </div>
                    
                    </Link>
                       </div> 
                    )
                })}

                </div>  

            
        )
    }
}

export default AllBeers