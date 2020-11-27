import { createNewBeer } from '../services/Beers';
import { Form, Input, Button, InputNumber, Typography, Row, Col } from 'antd';

const { Title } = Typography;
const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function NewBeer({ history }) {
  const onFinish = (values) => {
    async function createBeer() {
      createNewBeer(values);
      history.push('/beers');
    }
    createBeer();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      gutter={[16, 16]}
      style={{
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Col>
        <Title level={1} style={{ margin: '2rem 0' }}>
          Add a new beer!
        </Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name:"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tagline:"
            name="tagline"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Brewed"
            name="first_brewed"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Brewers Tips"
            name="brewers_tips"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Attenuation Level"
            name="attenuation_level"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Contributed By"
            name="contributed_by"
            rules={[
              {
                required: true,
                message: 'Please, add a this field',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Create Beer!
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
export default NewBeer;
