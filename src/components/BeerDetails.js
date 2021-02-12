import React from 'react';
import Nav from './Nav';
import axios from 'axios';

class beerDetails extends React.Component {
  state = {
    image_url:'',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beer_id}`
      );
      this.setState({...response.data});
      console.log(this.state);

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
      <Nav/>
        <img
        src={this.state.image_url}
        alt="beer photo"
        style={{ height: '250px' }}
        className=""
        />

        <h1>{this.state.name} </h1>
        </span>
        {/* <div>
        <Nav />
        <table className="table">
          <tbody>
                <tr key={index}>
                  <td className="text-center">
                    <img
                      src={element.image_url}
                      alt="beer photo"
                      style={{ height: '250px' }}
                      className=""
                    />
                  </td>
                  <td>
                    <div className="align-items-center">
                      <h1>{element.name}</h1>
                      <h2>{element.tagline}</h2>
                      <p>
                        <strong>Created by: </strong>
                        {element.contributed_by}
                      </p>
                    </div>
                  </td>
                </tr>;
            }}
          </tbody>
        </table>
      </div> */}
      </div>
    );
  }
}

export default beerDetails;
