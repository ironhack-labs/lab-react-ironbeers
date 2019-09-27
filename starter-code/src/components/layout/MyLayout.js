import React from 'react';
import {Layout} from 'antd';
import Navbar from './Navbar';

const {Content, Header} = Layout;

const MyLayout = ({children, noNav}) => {
  const title = 'Ironbeers';
  return (
    <>
      <Layout>
        {!noNav ? <Header style={{backgroundColor: '#3dc4fc'}}><Navbar name={title} /></Header> : null}
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default MyLayout;
