import React from 'react'
import { Table, Row, Col,Card } from 'antd'
import styles from './grid.less'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
const gridPage = () =><div><div>
  <Row>
    <Col xs={24} md={24} lg={24}>
    <Card title="Basic Grid">
    <div className="gridPage">
     <Row>
      <Col xs={24} md={24} lg={24}>col-24</Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12}>col-12</Col>
      <Col xs={12} md={12} lg={12}>col-12</Col>
    </Row>
    <Row>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
    </Row>
    <Row>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
    </Row>
    <Row>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    <Row>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
    </Row>
    </div>
    </Card>
    </Col>
    </Row>
  </div>
  <div>
     <Row>
    <Col md={24} lg={24}>
    <Card title="Row Gutter Grid">
     <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" xs={6} md={6} lg={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" xs={6} md={6} lg={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" xs={6} md={6} lg={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" xs={6} md={6} lg={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
    </div>
    </Card>
    </Col>
    </Row>
  </div>
<div>
    <Row>
    <Col md={24} lg={24}>
    <Card title="Row Offset Grid">
  <div className="gridPage">
    <Row>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8} offset={8}>col-8</Col>
    </Row>
    <Row>
      <Col xs={6} md={6} lg={6} offset={6}>col-6 col-offset-6</Col>
      <Col xs={6} md={6} lg={6} offset={6}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12} offset={6}>col-12 col-offset-6</Col>
    </Row>

   </div>
</Card>
</Col>
    </Row>
     <Row>
    <Col md={24} lg={24}>
    <Card title="Grid Sort - By using push andpull class you can easily change column order">
  <div className="gridPage">
   
    <Row>
      <Col xs={18} md={18} lg={18} push={6}>col-18 col-push-6</Col>
      <Col xs={6} md={6} lg={6} pull={18}>col-6 col-pull-18</Col>
    </Row>
    
</div>
</Card>
</Col>
    </Row>
    </div>

    <div>
      <Row>
    <Col md={24} lg={24}>


    <div className="gridPage">
      <Card title="Flex Layout - sub-element align left">
    <Row type="flex" justify="start">
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    </Card>

<Card title="Flex Layout- sub-element align center">
    <Row type="flex" justify="center">
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    </Card>

<Card title="Flex Layout - sub-element align right">
    <Row type="flex" justify="end">
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    </Card>

<Card title="Flex Layout - sub-element monospaced arrangement">
    <Row type="flex" justify="space-between">
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    </Card>

<Card title="Flex Layout - sub-element align full">
    <Row type="flex" justify="space-around">
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    </Card>
  </div>
  </Col>
  </Row>
</div>

   <div>
       <Row>
    <Col md={24} lg={24}>

    <div className="gridPage gridPage-Flex">
      <Card title="Flex Layout Align Top">
    <Row type="flex" justify="center" align="top">
      <Col xs={4} md={4} lg={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>
    </Card>
    <Card title="Flex Layout Align Center">
    <Row type="flex" justify="space-around" align="middle">
      <Col xs={4} md={4} lg={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>
    </Card>
    <Card title="Flex Layout Align Bottom">
    <Row type="flex" justify="space-between" align="bottom">
      <Col xs={4} md={4} lg={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col xs={4} md={4} lg={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>
    </Card>
  </div>
  </Col>
    </Row>
 </div>
  <div>
      <Row>
    <Col md={24} lg={24}>
    <Card title="Flex Orders">
   
     <div className="gridPage">
    <Row type="flex">
      <Col xs={6} md={6} lg={6} order={4}>1 col-order-4</Col>
      <Col xs={6} md={6} lg={6} order={3}>2 col-order-3</Col>
      <Col xs={6} md={6} lg={6} order={2}>3 col-order-2</Col>
      <Col xs={6} md={6} lg={6} order={1}>4 col-order-1</Col>
    </Row>
  </div>
  </Card>
  </Col>
  </Row>
  </div>

<div>
   <Row>
    <Col md={24} lg={24}>
    <Card title="Responsive Grids">
    <div className="gridPage">
     <Row>
    <Col xs={2} sm={4} md={6} lg={8}>Col</Col>
    <Col xs={20} sm={16} md={12} lg={8}>Col</Col>
    <Col xs={2} sm={4} md={6} lg={8}>Col</Col>
  </Row>
  </div>
  </Card>
  </Col>
  </Row>
</div>
  </div>

export default gridPage
