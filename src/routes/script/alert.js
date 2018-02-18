import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Alert
} from 'antd'
const onClose = function (e) {
  console.log(e, 'I was closed.');
};
const alertPage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Success Alert'>
      <Alert message="Success Alert" type="success"/>
    </Card>
    <Card title='Basic Info Alert'>
      <div>
        <Alert message="Info Alert" type="info"/>
      </div>
    </Card>
    <Card title='Basic Warning Alert'>
      <div>
        <Alert message="Warning Alert" type="warning"/>
      </div>
    </Card>
    <Card title='Basic Error Alert'>
      <div>
        <Alert message="Error Alert!" type="error"/>
      </div>
    </Card>
    <Card title='Collapsable Alert'>
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}/>
      <Alert message="Info Text" type="info" closeText="Close Now"/>
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={onClose}/>
    </Card>
    <Card title='Banner Alert'>
      <div>
        <div>
          <Alert message="Warning text" banner/>
          <br/>
          <Alert
            message="Very long warning text warning text text text text text text text"
            banner
            closable/>
        </div>
      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Description Alert'>
      <div>
        <Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"/>
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"/>
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"/>
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"/>
      </div>
    </Card>
    <Card title='Iconed Alert'>
      <div>
        <Alert message="Success Tips" type="success" showIcon/>
        <Alert message="Informational Notes" type="info" showIcon/>
        <Alert message="Warning" type="warning" showIcon/>
        <Alert message="Error" type="error" showIcon/>
        <Alert
          message="success tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon/>
        <Alert
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon/>
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon/>
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon/>
      </div>
    </Card>

  </Col>
</Row> </div>
export default alertPage