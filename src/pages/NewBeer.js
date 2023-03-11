import { useState } from 'react';
import { Form, Button, Input, DatePicker, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

function NewBeer() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    tagline: '',
    description: '',
    brewers_tips: '',
    attenuation_level: 70,
    first_brewed: '',
    contributed_by: 'Carlos Sosa',
  });
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handleSubmit = async (values) => {
    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      console.log({ data });
      navigate('/beers');
    } catch (err) {
      console.log('err');
    }
  };

  const onInputChange = (changedValues, allValues) => {
    setFormInputs({ ...formInputs, changedValues });
  };

  return (
    <div style={{ paddingBottom: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>Add New Beer</h1>
      <Form
        name="beerForm"
        layout="vertical"
        initialValues={formInputs}
        onValuesChange={onInputChange}
        onFinish={handleSubmit}
        style={{ maxWidth: '400px', margin: '20px auto', marginTop: '50px' }}
      >
        <Form.Item
          label={'Name'}
          name="name"
          rules={[
            {
              required: true,
              message: `Please input the beer's name!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Tagline'}
          name="tagline"
          rules={[
            {
              required: true,
              message: `Please provide a tagline for the beer!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Description'}
          name="description"
          rules={[
            {
              required: true,
              message: `Please provide a short description!`,
            },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item label={'First Brewed'} name="first_brewed">
          <DatePicker />
        </Form.Item>

        <Form.Item label={'Brewers Tips'} name="brewers_tips">
          <Input />
        </Form.Item>

        <Form.Item label={'Attenuation Level'} name="attenuation_level">
          <InputNumber step={'.5'} />
        </Form.Item>

        <Form.Item
          label={'Contributed By'}
          name="contributed_by"
          rules={[
            {
              required: true,
              message: `Please input your name so that we know who contributed to this`,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Add New
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewBeer;
