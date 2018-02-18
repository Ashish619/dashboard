import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Progress
} from 'antd'
import './progress.less'
const ButtonGroup = Button.Group;
const MyProgress = React.createClass({
  getInitialState() {
    return {percent: 0};
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({percent});
  },
  decline() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({percent});
  },
  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent}/>
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus"/>
          <Button onClick={this.increase} icon="plus"/>
        </ButtonGroup>
      </div>
    );
  }
});
const MyProgress1 = React.createClass({
  getInitialState() {
    return {percent: 0};
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({percent});
  },
  decline() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({percent});
  },
  render() {
    return (
      <div>
        <Progress percent={this.state.percent}/>
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus"/>
          <Button onClick={this.increase} icon="plus"/>
        </ButtonGroup>
      </div>
    );
  }
});
const progressPage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Progress Bar'>
      <div>
        <Progress percent={30}/>
        <Progress percent={50} status="active"/>
        <Progress percent={70} status="exception"/>
        <Progress percent={100}/>
        <Progress percent={50} showInfo={false}/>
      </div>
    </Card>
    <Card title='Circular progress bar'>
      <div>
        <Progress type="circle" percent={75}/>
        <Progress type="circle" percent={70} status="exception"/>
        <Progress type="circle" percent={100}/>
      </div>
    </Card>
    <Card title='Mini size circular progress bar'>

      <div>
        <Progress type="circle" percent={30} width={80}/>
        <Progress type="circle" percent={70} width={80} status="exception"/>
        <Progress type="circle" percent={100} width={80}/>
      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Dynamic circular progress bar'>
      <MyProgress/>
    </Card>
    <Card title='Dynamic Bar'>
      <MyProgress1/>
    </Card>
    <Card title='Custom text format'>
      <Progress type="circle" percent={75} format={percent => `${percent} Days`}/>
      <Progress type="circle" percent={100} format={() => 'Done'}/>
    </Card>
  </Col>
</Row> </div>
export default progressPage