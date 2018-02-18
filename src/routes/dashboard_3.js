import React, {PropTypes} from 'react'
import {
  Row,
  Col,
  Card,
  Carousel,
  Switch,
  Icon,
  Menu, Dropdown,
  Button
} from 'antd'
import {color} from '../utils'
import GradientCard from '../components/dashboard/gradient_card';
import RevenuePerMonth from '../components/chart/revenue_per_month'
import Statistics from '../components/chart/statistics'
import SubscriptionTable from '../components/dashboard/subscription_list'
import RevenuesYear from '../components/dashboard/revenues_year'
import Expense from '../components/dashboard/expense'
import './dashboard.less'


const cardStyle = {

  bodyStyle: {
    height: 150,
    color: '#fff',

    padding: 0
  }
}
const cardStyle_2 = {
  bodyStyle: {
    height: 480,
    color: '#fff'
  }
}
const cardStyle_3 = {
  bodyStyle: {
    minHeight: 510,
    color: '#fff'
  }
}
const semanticCardStyle = {
  minHeight: 548,
  color: '#fff',

  padding: 10
}

const yearMenu = (
  <Menu>
    <Menu.Item key="0">
      <a  rel="noopener noreferrer" href="#">2016</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a  rel="noopener noreferrer" href="3">2017</a>
    </Menu.Item>
    
  </Menu>
);
const monthMenu = (
  <Menu>
    <Menu.Item key="0">
      <a  rel="noopener noreferrer" href="#">3 Month</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a  rel="noopener noreferrer" href="#">6 Month</a>
    </Menu.Item>
    <Menu.Item key="3">
    <a  rel="noopener noreferrer" href="#">12 Month</a>
  </Menu.Item>
  </Menu>
);
const Dashboard_3 = React.createClass({
  render() {
    return (
      <div className="dashboard-3">
        <Row gutter={24}>
          <Col lg={6} md={6}>

            <Card {...cardStyle}>
              <GradientCard type="sea_blizz" header="Page Followers" number="3456" arrow="arrow-up" arrowColor="#ff8739" increase="-9" percentNumber={85}/>
            </Card>

          </Col>
          <Col lg={6} md={6}>

            <Card {...cardStyle}>
            <GradientCard type="day_tripper" header="Page Views" number="564" arrow="arrow-up" arrowColor="#4df293" increase="+16" percentNumber={47}/>
            
              
            </Card>
          </Col>
          <Col lg={6} md={6}>

            <Card {...cardStyle}>
            <GradientCard type="facebook_messenger" header="Likes" number="190" arrow="arrow-down" arrowColor="#ff8739" increase="-12" percentNumber={30}/>
            
             
            </Card>
          </Col>
          <Col lg={6} md={6}>

            <Card {...cardStyle}>
            <GradientCard type="suzy" header="Comments" number="140" arrow="arrow-down" arrowColor="#4df293" increase="+16" percentNumber={25}/>
            
             
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={16} md={16}>

            <Card title="Statistics" extra={<div> <Dropdown overlay={yearMenu}>
            <Button style={{ marginLeft: 8 }}>
              Year <Icon type="down" />
            </Button>
          </Dropdown> <Dropdown overlay={monthMenu}>
          <Button style={{ marginLeft: 8 }}>
            Month <Icon type="down" />
          </Button>
        </Dropdown></div>} {...cardStyle_2}>
              <Statistics/>
            </Card>

          </Col>
          <Col lg={8} md={8}>

            <Card title="Revenue Per Month" {...cardStyle_2}>
              <RevenuePerMonth/>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col lg={24} md={24}>

            <Card title="Subscription List" extra={<div className="extraButtons"><Button icon="filter" size="default">Filter</Button><Button icon="setting" size="default"></Button></div>} {...cardStyle_3}>
              <SubscriptionTable/>
            </Card>

          </Col>

        </Row>
        <Row gutter={24}>
          <Col lg={8} md={8}>

            <Card title="Expense" {...cardStyle_3}>
            <Expense/>
            </Card>

          </Col>
          <Col lg={16} md={16}>

            <Card title="Revenue Of The Year" {...cardStyle_3}>
              <RevenuesYear/>
            </Card>
          </Col>

        </Row>
      </div>
    )
  }
})

export default Dashboard_3