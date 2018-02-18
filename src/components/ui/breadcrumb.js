import React from 'react'
import { Ico } from '../../components/ui'
import { Table, Row, Col,Button,Card,Icon,Breadcrumb  } from 'antd'
import  styles from './breadcrumb.less'
var FontAwesome = require('react-fontawesome');


const BreadcrumbPage = () =><div> <Row gutter={16}>
    <Col span={8}>
          <Card title='Standart Breadcrumb'>
     <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
        </Card>
          </Col>
      <Col span={8}>
          <Card title='Different Seperator'>
        <div>
    <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
  </div>
        </Card>
          </Col>
     <Col span={8}>
          <Card title='Iconed Breadcrumb'>
        <div>
 <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      Application
    </Breadcrumb.Item>
  </Breadcrumb>
  </div>
        </Card>
          </Col>
    </Row>
    
</div>
export default BreadcrumbPage
