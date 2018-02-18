import React from 'react'
import {
  Row,
  Col,
  Card,
  Spin,
  Alert,
  Switch
} from 'antd'
import './spin.less'

const Spin1 = React.createClass({
  getInitialState() {
    return {loading: false};
  },
  toggle(value) {
    this.setState({loading: value});
  },
  render() {
    const container = (<Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"/>);
    return (
      <div>
        <Spin spinning={this.state.loading}>{container}</Spin>
        Loading state：<Switch checked={this.state.loading} onChange={this.toggle}/>
      </div>
    );
  }
});

const Spin2 = React.createClass({
  getInitialState() {
    return {loading: false};
  },
  toggle(value) {
    this.setState({loading: value});
  },
  render() {
    const container = (<Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"/>);
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
        Loading state：<Switch checked={this.state.loading} onChange={this.toggle}/>
      </div>
    );
  }
});

const SpinPage = () => <div>

  <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
      <Card title='Basic Spinner'>
        <div>
          <Spin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper
            consequat felis, et facilisis ex bibendum eget. Nullam efficitur tortor metus.</Spin>
        </div>
      </Card>
      <Card title='Sized Spinner'>
        <div>
          <div>
            <Spin size="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum semper consequat felis, et facilisis ex bibendum eget. Nullam
              efficitur tortor metus.</Spin><br/><br/>
            <Spin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper
              consequat felis, et facilisis ex bibendum eget. Nullam efficitur tortor metus.</Spin><br/><br/>
            <Spin size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum semper consequat felis, et facilisis ex bibendum eget. Nullam
              efficitur tortor metus.</Spin>

          </div>

        </div>
      </Card>
      <Card title='Inside a container'>
        <div className="example">
          <Spin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper
            consequat felis</Spin>
        </div>
      </Card>
    </Col>
    <Col xs={24} md={12} lg={12}>
      <Card title='Sized Spinner'>
        <div>
          <div>
            <Spin tip="Loading...">
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"/>
            </Spin>
          </div>

        </div>
      </Card>
      <Card title='Sized Spinner'>
        <div>

          <Spin2/>

        </div>

      </Card>
    </Col>
  </Row>

</div>

export default SpinPage