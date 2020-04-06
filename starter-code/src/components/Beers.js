import React from 'react';

class EmpleadoApp extends Component {
    constructor(props) {
        super(props)
        this.state = { empleados: [] }
    }

	
	componentWillMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        return response.json()
      })
      .then((beers) => {
        this.setState({ beers: beers })
      });
	}

	return (
		<div>
			
		</div>
	)
}

export default Beers;
