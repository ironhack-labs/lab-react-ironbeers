// import React from 'react'
// import axios from 'axios'
// const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

// export default class SingleBeer extends React.Component {

//     constructor(props) {
//         super(props)
//         this.beerId = props.match.params.beerId
//         this.state = {
//             beerData: []
//         }
//     }

//     componentDidMount() {
//         axios
//             .get(apiUrl)
//             .then(response => {
//                 this.setState({
//                     beerData: response.data
//                 })
//             })
//             .catch(error => console.log(error))
//     }


//     render() {

//         const filteredBeer = this.state.beerData.filter((beer) => beer._id === this.beerId)

//         return (
//             filteredBeer.map((beer) =>
//                 <>
//                     {beer ?
//                         <div className="col-12">
//                             <h1 className="title text-center"><strong>Single</strong> beer</h1>
//                             <div className="card single-card">
//                                 <div className="row justify-content-center">
//                                     <div className="card-header col-12 col-sm-3">
//                                         <div className="card-pic" style={{background: `url(${beer.image_url}) no-repeat center center / contain`}}></div>
//                                     </div>
//                                     <div className="card-body col-12 col-sm-6">
//                                         <h5 className="card-title">{beer.name} <br />
//                                             <small className="tagline"><strong>tagline</strong> {beer.tagline}</small></h5>
//                                         <p><strong>first brewed</strong> {beer.first_brewed}</p>
//                                         <p><strong>attenuation level</strong> {beer.attenuation_level}</p>
//                                         <p><strong>description</strong> {beer.description}</p>
//                                         <p className="card-text"><strong>contributed by</strong> @{beer.contributed_by.replace('<', '').replace('>', '').split(' ').splice(-1)}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         : <h1 className="text-center">Loading...</h1>
//                     }
//                 </>
//             )
//         )
//     }
// }


import React, {useState, useEffect} from 'react'
import axios from 'axios'
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

const SingleBeer = (props) => {

    const [beerId] = useState(props.match.params.beerId)
    const [beerData, setBeerData] = useState([])

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(response => {
                    setBeerData(response.data)
                
            })
            .catch(error => console.log(error))
    }, [])




    const filteredBeer = beerData.filter((beer) => beer._id === beerId)

    return (
        filteredBeer.map((beer) =>
            <>
                {beer ?
                    <div className="col-12">
                        <h1 className="title text-center"><strong>Single</strong> beer</h1>
                        <div className="card single-card">
                            <div className="row justify-content-center">
                                <div className="card-header col-12 col-sm-3">
                                    <div className="card-pic" style={{background: `url(${beer.image_url}) no-repeat center center / contain`}}></div>
                                </div>
                                <div className="card-body col-12 col-sm-6">
                                    <h5 className="card-title">{beer.name} <br />
                                        <small className="tagline"><strong>tagline</strong> {beer.tagline}</small></h5>
                                    <p><strong>first brewed</strong> {beer.first_brewed}</p>
                                    <p><strong>attenuation level</strong> {beer.attenuation_level}</p>
                                    <p><strong>description</strong> {beer.description}</p>
                                    <p className="card-text"><strong>contributed by</strong> @{beer.contributed_by.replace('<', '').replace('>', '').split(' ').splice(-1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h1 className="text-center">Loading...</h1>
                }
            </>
        )
    )

}

export default SingleBeer