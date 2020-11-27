import { Col, Row, Skeleton, Typography } from 'antd';
import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import { getOneBeer } from '../services/Beers';

const { Title, Text } = Typography;

export default function BeerDetail({
  match: {
    params: { beerId },
  },
}) {
  const [detailBeer, setDetailBeer] = useState(null);

  useEffect(() => {
    async function getTheBeer() {
      const { data } = await getOneBeer(beerId);
      setDetailBeer(data);
    }
    getTheBeer();
  }, []);
  return <BeerCard detailBeer={detailBeer} />;
}
