import React from 'react';
// import logo from './logo.svg';
// import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class List extends React.Component {

    state = {
        beersArr: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((resp) => {
            this.setState({
                beersArr: resp.data
            })
        })
    }

    render() {
        let imgUrl = "http://10kbrew.com/wp-content/uploads/2019/02/giphy.gif"

        return (
            <div>
                <Container>
                    <h1>List.js</h1>
                    <div>{this.state.beersArr.length > 0 ?
                    this.state.beersArr.map(beer => <li key={beer._id}><Link to={"/detail/" + beer._id}>
                        {beer.name}</Link></li>) :
                    <img src={imgUrl} alt="Draft beer like Homer"></img>
                }</div>
                    <Row>
                        <Col><p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!</p></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default List;
