import React from 'react'
import { Table, Row, Col,Rate,Card  } from 'antd'
const Rater = React.createClass({
    getInitialState() {
        return {
            value: 3,
            count: null,
        };
    },
    handleChange(value) {
        this.setState({ value });
    },
    render() {
        const { value } = this.state;
        return (
          <span>
            <Rate onChange={this.handleChange} value={value} />
{value && <span className="ant-rate-text">{value} stars</span>}
</span>
    );
},
});
const ratePage = () =><div> <Row gutter={16}>
    <Col  xs={24} md={6} lg={6}>
          <Card title='Standart Rate'>
              <Rate />
        </Card>
          </Col>
          <Col xs={24} md={6} lg={6}>
          <Card title='Half Rate'>
              <Rate allowHalf defaultValue={2.5} />
        </Card>
          </Col>
          <Col xs={24} md={6} lg={6}>
          <Card title='Copywriting Rate'>
              <Rater />
        </Card>
          </Col>
          <Col xs={24} md={6} lg={6}>
          <Card title='Read Only Rate'>
             <Rate disabled defaultValue={2} />
        </Card>
          </Col>
    </Row>
    
</div>
export default ratePage
