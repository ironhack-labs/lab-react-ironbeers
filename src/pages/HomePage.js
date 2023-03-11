import { Link } from 'react-router-dom';
import { List } from 'antd';
import beersImg from '../assets/beers.png';
import randonBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

function HomePage() {
  const data = [
    {
      linkTo: '/beers',
      title: 'All Beers',
      image: beersImg,
      caption:
        'Come on in and find out all the beers that IronHackers are drinking!',
    },
    {
      linkTo: '/beer/random',
      title: 'Random Beer',
      image: randonBeerImg,
      caption: `Not sure which beer to take? Click here and we'll tell you!,`,
    },
    {
      linkTo: '/newBeer',
      title: 'New Beer',
      image: newBeerImg,
      caption: 'Not seeing a beer you like? Contribute and add it to the List!',
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>IronBeers</h1>
      <List
        grid={{
          gutter: 16,
          column: 1,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Link to={item.linkTo}>
              <div
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundPosition: '0',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '200px',
                }}
              ></div>
              <div className="itemContent">
                <div className="itemTitle">{item.title}</div>
                <div className="itemCaption">{item.caption}</div>
              </div>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default HomePage;
