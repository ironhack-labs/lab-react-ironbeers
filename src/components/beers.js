import React from 'react';
import { Link } from 'react-router-dom';


class beers extends React.Component {
    //  constructor(props) {
    //    super(props);
    //    this.state = {
    //      error: null,
    //      isLoaded: false,
    //      beerData: []
    //    };
    //  }
  
    // componentDidMount() {
    //   fetch("https://ih-beers-api2.herokuapp.com/beers")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         console.log("checking data fetced from API:", result);
    //         this.setState({
    //             isLoaded: true,
    //             beerData: result
    //           });
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }
  
    render() {
    const { beerData } = this.props;
    return (
      <>
         <header> <Link to="/">Home</Link></header>
        <div>
        {beerData.map(elm =>
                <div key={elm.id}>
                <Link to={`/${elm._id}`}>{elm.name}</Link>
                <img src={elm.image_url} />
                <p>{elm.tagline}</p>
                <p>{elm.contributed_by}</p>
                </div>
                )}
        </div>
      </>
        )
    }
}

export default beers;







