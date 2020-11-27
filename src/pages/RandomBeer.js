import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import { getRandomBeer } from '../services/Beers';
import { Typography } from 'antd';
const { Title } = Typography;

const RandomBeer = () => {
  const [detailBeer, setDetailBeer] = useState(null);

  useEffect(() => {
    async function getABeer() {
      const { data } = await getRandomBeer();
      setDetailBeer(data);
    }
    getABeer();
  }, []);

  return (
    <>
      <Title level={1} style={{ margin: '2rem 0' }}>
        Your random beer is...
      </Title>
      <BeerCard detailBeer={detailBeer} />
    </>
  );
};

export default RandomBeer;
