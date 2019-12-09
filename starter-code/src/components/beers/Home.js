import React, {Component} from 'react';
import {Card , CardImg, CardText, CardBody, CardTitle, NavLink, Button} from 'reactstrap';

class  Home extends Component{
  render(){
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/images/beers.png" alt="beers" />
        <CardBody>
          <CardTitle>All Beers</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <NavLink href="/beers"><Button >Show All</Button></NavLink>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/random-beer.png" alt="beers" />
        <CardBody>
          <CardTitle>Random Beer</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <NavLink href="/random-beer"><Button>Pick a Random Beer</Button></NavLink>
 
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/new-beer.png" alt="beers" />
        <CardBody>
          <CardTitle>New Beer</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <NavLink href="/new-beer"><Button>Create a New Beer</Button></NavLink>
        </CardBody>
      </Card>



    </div>
  );

}
}

export default Home;