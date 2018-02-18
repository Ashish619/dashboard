import React from 'react'
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
import styles from './layout.less'

const layoutPage = () => <div>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        Content
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>

  <Layout>
    <Header>Header</Header>
    <Layout>
      <Content>Content</Content>
      <Sider>Sider</Sider>
    </Layout>
    <Footer>
      Footer
    </Footer>
  </Layout>
  <Layout>
    <Sider>Sider</Sider>
    <Content>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Content>
  </Layout>
</div>
export default layoutPage