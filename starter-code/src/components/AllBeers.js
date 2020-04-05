import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AllBeers extends Component {
    state = {
        listOfBeers: []
    }


    getAllTheBears =  async () => {
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
        this.getAllTheBears();
    }


    render() {
        

        return (
            <div>
                <Header className="w-100"/>
                
                    
                
                {this.state.listOfBeers.map((beers,i) => {
               

                return(
                       <div  key={i}>
                           
        {/*Todo esto irá dentro de un link que te llevara a la ruta de la beer con la id,
        tanto imagen como el div con los nombres y demás */}
                    <Link to={`/beers/${beers._id}`}style={{color: "black"}}>
                        <div className="d-flex border-bottom mx-5" style={{width: "100%", maxHeight: "40vh"}} >

                        <img style={{width: "8vw", height: "26vh", margin: "4% 3%"}} src={beers.image_url} alt="beer"/>
                           <div className="content-fluid w-75 p-5">
                                <h3 style={{fontSize: "40px", fontWeight: "300"}}>{beers.name}</h3>
                                <p style={{fontSize: "30px", fontWeight: "400", color: "gray"}}>{beers.tagline}</p>
                                <sub style={{fontSize: "18px"}}><b>Created by: </b>{beers.contributed_by}</sub>
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