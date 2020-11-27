import { useState, useEffect } from 'react';
import { Typography, Row, Col, Divider, Input, Skeleton } from 'antd';
import HomeCards from '../components/HomeCards';
import SearchResults from '../components/SearchResults';
import { searchABeer } from '../services/Beers';

const { Title } = Typography;
const { Search } = Input;

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchString, setSearchString] = useState(null);
  const [items, setItems] = useState(null);

  const onSearch = (value) => {
    if (value) {
      setSearchString(value);
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };
  const onChange = ({ target: { value } }) => {
    if (value) {
      setSearchString(value);
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    async function searchBeer() {
      const { data } = await searchABeer(searchString);
      setItems(data);
    }
    searchBeer();
  }, [searchString]);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <Title level={1} style={{ margin: '2rem 0' }}>
          Home
        </Title>
        <Search
          onChange={onChange}
          placeholder="Find a beer"
          onSearch={onSearch}
        />
        <Divider />
        <Row gutter={[16, 16]}>
          {isSearching ? (
            items ? (
              items.map((item) => <SearchResults item={item} />)
            ) : (
              <>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
              </>
            )
          ) : (
            <HomeCards />
          )}
        </Row>
      </Col>
    </Row>
  );
}
