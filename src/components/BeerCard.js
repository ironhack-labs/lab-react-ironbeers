import { Col, Row, Skeleton, Typography } from 'antd';
const { Title, Text } = Typography;

export default function BeerCard({ detailBeer }) {
  return detailBeer ? (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <div
          style={{
            display: 'flex',
            boxSizing: 'border-box',
          }}
        >
          <img
            style={{
              height: '20rem',
              width: 'auto',
              margin: '1rem auto',
            }}
            alt="all-beers"
            src={detailBeer.image_url}
          />
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={20}>
            <Title level={4}>{detailBeer.name}</Title>
            <Text type="secondary">{detailBeer.tagline}</Text> <br />
            <Text type="secondary">{detailBeer.first_brewed}</Text> <br />
          </Col>
          <Col xs={2}>
            <Title level={5} type="secondary">
              {detailBeer.attenuation_level}
            </Title>
          </Col>
        </Row>
        <Text>{detailBeer.description}</Text>
      </Col>
      <Text type="secondary">{detailBeer.contributed_by}</Text>
    </Row>
  ) : (
    <Skeleton></Skeleton>
  );
}
