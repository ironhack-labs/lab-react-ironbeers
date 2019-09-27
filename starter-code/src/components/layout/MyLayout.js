import React from 'react';
import {Layout} from 'antd';
import Navbar from './Navbar';

const {Content, Header} = Layout;

const MyLayout = ({children, noNav}) => {
  const title = 'Ironbeers';
  return (
    <>
      <Layout>
        <Header>{!noNav ? <Navbar name={title} /> : null}</Header>
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default MyLayout;
