import React, {PropTypes} from 'react'
import {Row, Col, Card,Carousel,Switch,Icon,Button} from 'antd'
import {color} from '../utils'
import './dashboard.less'
import SimpleAreaChart from '../components/dashboard/merge-commits'
import SimpleBarChart from '../components/dashboard/commits'
import SimpleBarChart_2 from '../components/dashboard/codefrequency'
import SimpleRadialBarChart from '../components/dashboard/punch-card'
import TwoLevelPieChart from '../components/dashboard/network'
import SemanticFeed from '../components/semanticui/semantic-feed'


const cardStyle = {

    bodyStyle: {
    height:500,
    minHeight: 500,
    color: '#fff',
    background:color.darky_blue,
    padding:10
  }
  
}
const semanticCardStyle={
 minHeight:548,
    color: '#fff',
    background:color.darky_blue,
    padding:10
}
const Dashboard_3  = React.createClass({
render () {
  return (
    <div className="dashboard-3">
    <Row gutter={24}>
       <Col lg={24} md={24}>
     
        <Card title="Now 16, 2014 - Jan 4, 2017" {...cardStyle} >
          <SimpleAreaChart />
        </Card>
      </Col>
     
    </Row>
      <Row gutter={24}>
       <Col lg={8} md={8}>
     
        <Card title="Commits" bordered={false} {...cardStyle} extra={<div><Switch defaultChecked={false} /><Button shape="circle" icon="swap"/></div>}>
          <SimpleBarChart/>
        </Card>
      </Col>
     <Col lg={8} md={8}>
     
         <Card title="Codefrequency" bordered={false} {...cardStyle} extra={<div><Switch defaultChecked={true} /><Button shape="circle" icon="swap"/></div>}>
            <SimpleBarChart_2/>
        </Card>
      </Col>
      <Col lg={8} md={8}>
     
       <Card title="Punch Card" {...cardStyle} extra={<div><Switch defaultChecked={false} /><Button shape="circle" icon="swap"/></div>}>
          <SimpleRadialBarChart />
        </Card>
      </Col>
    </Row>
    <Row gutter={24}>
       <Col lg={16} md={16}>
     
       <Card title="Network" bordered={false} {...cardStyle}  extra={<div><Switch defaultChecked={false} /><Button shape="circle" icon="swap"/></div>}>
          <TwoLevelPieChart />
        </Card>
      </Col>
     <Col lg={8} md={8}>
     
       <Card title="Comments" bordered={false} style={semanticCardStyle} extra={<div><Button shape="circle" icon="appstore-o"/><Button shape="circle" icon="swap"/></div>}>
   <SemanticFeed/>
        </Card>
      </Col>
    </Row>
    </div>
  )
}})


export default Dashboard_3