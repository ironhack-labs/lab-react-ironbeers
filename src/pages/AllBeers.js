import { useState, useEffect } from 'react';
import { Row, Col, Typography, Skeleton, Card } from 'antd';
import { Link } from 'react-router-dom';

import SearchResults from '../components/SearchResults';
import { getAllBeers } from '../services/Beers';
const { Meta } = Card;
const { Title } = Typography;

const AllBeers = () => {
  const [listValues, setListValues] = useState({
    initLoading: true,
    loading: false,
  });
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    async function getBeers() {
      const { data } = await getAllBeers().catch((e) => console.log(e));
      setListValues({ loading: false });
      setAllBeers(data);
    }
    getBeers();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={1} style={{ margin: '2rem 0' }}>
          All Beers
        </Title>
      </Col>
      {allBeers ? (
        allBeers.map((item) => (
          <SearchResults item={item} listValues={listValues} />
        ))
      ) : (
        <>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </>
      )}
    </Row>
  );
};

export default AllBeers;
