// import React from 'react'
// import axios from 'axios'
// const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random'

// export default class RandomBeer extends React.Component {


//     state = {
//         beerData: []
//     }


//     componentDidMount() {
//         axios
//             .get(apiUrl)
//             .then(response => {
//                 console.log(response.data)
//                 this.setState({
//                     beerData: response.data
//                 })
//             })
//             .catch(error => console.log(error))
//     }


//     render() {

//         return (
//             <>
//                 {this.state.beerData.name ? <div className="row justify-content-center">
//                     <h1 className="title"><strong>Random</strong> beer</h1>
//                     <div className="col-12">
//                         <div className="card single-card">
//                             <div className="row justify-content-center">
//                                 <div className="card-header col-12 col-sm-3">
//                                     <div className="card-pic" style={{background: `url(${this.state.beerData.image_url}) no-repeat center center / contain`}}></div>
//                                 </div>
//                                 <div className="card-body col-12 col-sm-6">
//                                     <h5 className="card-title">{this.state.beerData.name} <br />
//                                         <small className="tagline">{this.state.beerData.tagline}</small></h5>
//                                     <p><strong>first brewed</strong> {this.state.beerData.first_brewed}</p>
//                                     <p><strong>attenuation level</strong> {this.state.beerData.attenuation_level}</p>
//                                     <p><strong>description</strong> {this.state.beerData.description}</p>
//                                     <p className="card-text"><strong>contributed by</strong> {this.state.beerData.contributed_by}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                     : <h1 className="text-center">Loading...</h1>}
//             </>

//         )

//     }
// }


import React, {useState, useEffect} from 'react'
import axios from 'axios'
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random'

const RandomBeer = () => {

    const [beerData, setBeerData] = useState([])

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(response => {
                console.log(response.data)
                setBeerData(response.data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            {beerData.name ? <div className="row justify-content-center">
                <h1 className="title"><strong>Random</strong> beer</h1>
                <div className="col-12">
                    <div className="card single-card">
                        <div className="row justify-content-center">
                            <div className="card-header col-12 col-sm-3">
                                <div className="card-pic" style={{background: `url(${beerData.image_url}) no-repeat center center / contain`}}></div>
                            </div>
                            <div className="card-body col-12 col-sm-6">
                                <h5 className="card-title">{beerData.name} <br />
                                    <small className="tagline">{beerData.tagline}</small></h5>
                                <p><strong>first brewed</strong> {beerData.first_brewed}</p>
                                <p><strong>attenuation level</strong> {beerData.attenuation_level}</p>
                                <p><strong>description</strong> {beerData.description}</p>
                                <p className="card-text"><strong>contributed by</strong> {beerData.contributed_by}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                : <h1 className="text-center">Loading...</h1>}
        </>

    )
}

export default RandomBeer