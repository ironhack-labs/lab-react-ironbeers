// import React, { Component } from 'react'
// import axios from 'axios'
// import { Descriptions } from 'antd'

// export default class BeerOne extends Component {
//   state = {
//     beer: []
//   }

//   componentDidMount = async () => {
//     const { id } = this.props.match.params
//     const { data: beer } = await axios.get(
//       `https://ih-beer-api.herokuapp.com/beers/${id}`
//     )
//     this.setState(() => {
//       return { beer }
//     })
//   }

//   componentWillUpdate = async prevProps => {
//     const { id } = prevProps.match.params
//     if (id !== this.props.match.params.id) {
//       const { data: beer } = await axios.get(
//         `https://ih-beer-api.herokuapp.com/beers/${id}`
//       )
//       this.setState(() => {
//         return { beer }
//       })
//     }
//   }

//   render() {
//     const { beer } = this.state
//     return (
//       <div>
//         <div>
//           <img
//             style={{
//               width: '6vw',
//               height: '40vh',
//               marginLeft: '40%',
//               marginTop: '5vh',
//               marginBottom: '5vh'
//             }}
//             src={beer.image_url}
//             alt={beer.name}
//           />
//         </div>
//         <Descriptions title={beer.name}>
//           <Descriptions.Item label="Tagline">{beer.tagline}</Descriptions.Item>
//           <Descriptions.Item label="First Brewed">
//             {beer.first_brewed}
//           </Descriptions.Item>
//           <Descriptions.Item label="Attenuation Level">
//             {beer.attenuation_level}
//           </Descriptions.Item>
//           <Descriptions.Item label="Contributed by">
//             {beer.contributed_by}
//           </Descriptions.Item>
//         </Descriptions>
//         ,
//       </div>
//     )
//   }
// }
