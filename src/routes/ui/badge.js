import React from 'react'
import {
  Table,
  Row,
  Col,
  Badge,
  Icon,
  Card
} from 'antd'
var FontAwesome = require('react-fontawesome');
import styles from './badge.less'

const BadgePage = () =>< div className = "badgePage" > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Badge'>
      <Badge count={5}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={7}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={15}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={9}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={1}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={46}>
        <a href="#" className="head-example"/>
      </Badge>
    </Card>

    <Card title='Overflow Count Badge'>
      <Badge count={99}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={10} overflowCount={1}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={100}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={99} overflowCount={10}>
        <a href="#" className="head-example"/>
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <a href="#" className="head-example"/>
      </Badge>

    </Card>
    <Card title='Standalone Styles Badge'>
      <Badge count={25}/>
      <Badge
        count={4}
        style={{
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset'
      }}/>
      <Badge count={109} style={{
        backgroundColor: '#32936F'
      }}/>
      <Badge count={109} style={{
        backgroundColor: '#4464AD'
      }}/>
      <Badge count={109} style={{
        backgroundColor: '#C5283D'
      }}/>
      <Badge count={109} style={{
        backgroundColor: '#E63462'
      }}/>
      <Badge count={109} style={{
        backgroundColor: '#80727B'
      }}/>

    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Clickable Badge'>
      <a href="#">
        <Badge count={5}>
          <span className="head-example"/>
        </Badge>
      </a>
      <a href="#">
        <Badge count={5} style={{
          backgroundColor: '#32936F'
        }}>
          <span className="head-example"/>
        </Badge>
      </a>
      <a href="#">
        <Badge count={5} style={{
          backgroundColor: '#4464AD'
        }}>
          <span className="head-example"/>
        </Badge>
      </a>
      <a href="#">
        <Badge count={5} style={{
          backgroundColor: '#C5283D'
        }}>
          <span className="head-example"/>
        </Badge>
      </a>
      <a href="#">
        <Badge count={5} style={{
          backgroundColor: '#E63462'
        }}>
          <span className="head-example"/>
        </Badge>
      </a>
      <a href="#">
        <Badge count={5} style={{
          backgroundColor: '#80727B'
        }}>
          <span className="head-example"/>
        </Badge>
      </a>
    </Card>
    <Card title='Iconed Badge'>
      <Badge dot>
        <Icon type="notification"/>
      </Badge>
      <Badge dot>
        <Icon type="lock"/>
      </Badge>
      <Badge dot>
        <Icon type="book"/>
      </Badge>
      <Badge dot>
        <Icon type="desktop"/>
      </Badge>
      <Badge dot>
        <Icon type="download"/>
      </Badge>
      <Badge dot>
        <Icon type="folder"/>
      </Badge>
      <Badge dot>
        <Icon type="smile-o"/>
      </Badge>
      <Badge dot>
        <Icon type="inbox"/>
      </Badge>
      <Badge dot>
        <Icon type="paper-clip"/>
      </Badge>
      <Badge dot>
        <Icon type="shopping-cart"/>
      </Badge>
      <Badge dot>
        <Icon type="tag-o"/>
      </Badge>
      <Badge dot>
        <Icon type="video-camera"/>
      </Badge>

      <Badge dot>
        <Icon type="home"/>
      </Badge>

      <Badge dot>
        <Icon type="heart-o"/>
      </Badge>

      <Badge dot>
        <Icon type="message"/>
      </Badge>
      <Badge dot>
        <Icon type="like-o"/>
      </Badge>
      <Badge dot>
        <Icon type="environment-o"/>
      </Badge>

    </Card>
  </Col>
</Row> </div>
export default BadgePage