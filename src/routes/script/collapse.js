import React from 'react'
import {Table, Row, Col, Collapse, Card} from 'antd'
const Panel = Collapse.Panel;
function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const collapsePage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Collapse'>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
    <Card title='Accordion Collapse'>
      <Collapse accordion defaultActiveKey={['1']}>
        <Panel header={'This is panel header 1'} key="1">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 2'} key="2">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 3'} key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Nested Collapse'>
      <Collapse onChange={callback}>
        <Panel header={'This is panel header 1'} key="1">
          <Collapse defaultActiveKey="1">
            <Panel header={'This is panel nest panel'} key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header={'This is panel header 2'} key="2">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 3'} key="3">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 4'} key="4">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 5'} key="5">
          <p>{text}</p>
        </Panel>
        <Panel header={'This is panel header 6'} key="6">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
    <Card title='Borderless Collapse'>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  </Col>
</Row> </div>
export default collapsePage