import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from '../css/beers.module.css';

function Beers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBeers = async (search) => {
      let apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
      if (search !== '') apiUrl += '/search?q=' + search;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setBeers(data);
      } catch (err) {
        console.log(err);
        setBeers([]);
      }
    };

    fetchBeers(search);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.beers}>
      <h1>All the Beers</h1>
      <div style={{ paddingBottom: '2rem' }}>
        <Input
          allowClear
          onChange={handleSearch}
          prefix={
            <SearchOutlined style={{ fontSize: '1.5em', padding: '5px' }} />
          }
        />
      </div>
      <List
        grid={{
          gutter: 16,
          column: 1,
        }}
        dataSource={beers}
        renderItem={(item, index) => (
          <List.Item>
            <Link to={`/beer/${item._id}`}>
              <Card hoverable>
                <div className={styles.beers__listItem}>
                  <div className={styles.beers__left}>
                    <img src={item.image_url} alt={item.tagline} />
                  </div>
                  <div className={styles.beers__right}>
                    <div className={styles.beers__listTitle}>{item.name}</div>
                    <div className={styles.beers__listTagline}>
                      {item.tagline}
                    </div>
                    <div className={styles.beers__listFooter}>
                      <strong> Created by: </strong> {item.contributed_by}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Beers;
