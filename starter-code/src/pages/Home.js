import React, {Component} from 'react';
import Section from "../components/Section";

class Home extends Component {
  render() {
    return (
      <div>
        <Section title={'All beers'} image={'/images/beers.png'} linkTo={'/beers'}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed? Eaque laudantium neque pariatur quae quia reprehenderit!</Section>
        <Section title={'Random Beer'} image={'/images/random-beer.png'} linkTo={'/random-beer'}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed? Eaque laudantium neque pariatur quae quia reprehenderit!</Section>
        <Section title={'New Beer'} image={'/images/new-beer.png'} linkTo={'/new-beer'}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed? Eaque laudantium neque pariatur quae quia reprehenderit!</Section>
      </div>
    );
  }
}

export default Home;