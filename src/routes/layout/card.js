import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Switch
} from 'antd'
import styles from './card.less'
import {SemanticCard, SemanticCard1, SemanticCard2,SemanticLinkCard} from '../../components/semanticui/semantic-card';

const cardPage = () =><div> 
  <Row gutter={16}>
  <Col md={6} lg={6} xs={24}>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
</Row> 
  
  <Row gutter={16}>
  <Col md={8} lg={8} xs={24}>
    <Card title="Card title" extra={< a href = "#" > More </a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <Col md={8} lg={8} xs={24}>

    <Card title="Card title" extra={< a href = "#" > Expand </a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

  </Col>
  <Col md={8} lg={8} xs={24}>
  <Card title="Card title" extra={< a href = "#" > Close </a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
 
</Row> 
  <Row gutter={16}>
  <Col md={8} lg={8} xs={24}>
    <Card title="Card title" extra={<div><Icon type="up"/><Icon type="close"/></div>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <Col md={8} lg={8} xs={24}>

    <Card title="Card title" extra={<div><Icon type="reload"/><Icon type="paper-clip"/></div>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

  </Col>
  <Col md={8} lg={8} xs={24}>
  <Card title="Card title" extra={<div><Switch defaultChecked={true} /><Button shape="circle" icon="swap"/></div>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
 
</Row>
<Row> 
  <Col md={24} lg={24}>
  <Card loading title="Loading Animation Card" bordered={false}>Card content</Card>
</Col>
</Row> 
<Row> 
  <Col md={24} lg={24}>
  <SemanticLinkCard />
</Col> 
</Row>
        
    </div>
export default cardPage