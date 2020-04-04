import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'


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
                <Header />
                
                {this.state.listOfBeers.map((beers,i) => {
               

                return(
                       <div className="d-flex border-bottom mx-4" key={i}>
                           
        {/*Todo esto irá dentro de un link que te llevara a la ruta de la beer con la id,
        tanto imagen como el div con los nombres y demás */}
                        <img style={{width: "6.5rem",  height: "16rem", padding: "20px"}}width={"10%"} height={"1%"} src={beers.image_url} alt="beer"/>
                           <div className="p-5">
                                <h3 style={{fontSize: "40px", fontWeight: "300"}}>{beers.name}</h3>
                                <p style={{fontSize: "30px", fontWeight: "400", color: "gray"}}>{beers.tagline}</p>
                                <sub style={{fontSize: "18px"}}><b>Created by: </b>{beers.contributed_by}</sub>
                           </div>
                           <hr className="solid"></hr>
                       </div> 
                    )
                })}

                

            </div>
        )
    }
}

export default AllBeers