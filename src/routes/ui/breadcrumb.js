import React from 'react'
import {Ico} from '../../components/ui'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Breadcrumb
} from 'antd'
import styles from './breadcrumb.less'
var FontAwesome = require('react-fontawesome');

const BreadcrumbPage = () =>< div > <Row gutter={16}>
  <Col xs={24} sm={24} md={8} lg={8}>
    <Card title='Standart Breadcrumb'>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">About</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Portfolio</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Me</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  </Col>
  <Col xs={24} sm={24} md={8} lg={8}>
    <Card title='Different Seperator'>
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">About</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Portfolio</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Me</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Card>
  </Col>
  <Col xs={24} sm={24} md={8} lg={8}>
    <Card title='Iconed Breadcrumb'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home"/>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user"/>
            <span>About</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Me
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Card>
  </Col>
</Row>

</div>
export default BreadcrumbPage
