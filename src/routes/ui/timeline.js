import React from 'react'
import {
  Row,
  Col,
  Timeline,
  Card,
  Icon
} from 'antd'

const timelinePage = () =>
<div> <Row gutter={16}>
  <Col xs={24} sm={24} md={12} lg={12}>
    <Card title='Basic Timeline'>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  </Col>
  <Col xs={24} sm={24} md={12} lg={12}>
    <Card title='Colorfull Timeline'>
      <Timeline>
        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
        </Timeline.Item>
      </Timeline>
    </Card>
  </Col>
  </Row>
  <Row gutter={16}>
  <Col xs={24} sm={24} md={12} lg={12}>
    <Card title='Last Node Timeline'>
      <Timeline pending={< a href = "#" > See more </a>}>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  </Col>
  <Col xs={24} sm={24} md={12} lg={12}>
    <Card title='Iconed Timeline'>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}
          color="red">Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  </Col>
</Row> </div>
export default timelinePage