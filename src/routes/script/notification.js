import React from 'react'

import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  notification,
  Select
} from 'antd'

const {Option} = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification4 = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.'
  });
};

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.'
  });
};
const openNotification1 = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never cl' +
        'ose automatically.',
    duration: 0
  };
  notification.open(args);
};
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.'
  });
};
const openNotification2 = () => {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    // to hide notification box
    notification.close(key);
  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically aft' +
        'er the "duration" time of manually).',
    btn,
    key,
    onClose: close
  });
};
const openNotification3 = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{
        color: '#108ee9'
      }}/>
  });
};
const notificationPage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Notification'>
      <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    </Card>
    <Card title='Duration after which the notification box is closed'>
      <div>
        <Button type="primary" onClick={openNotification1}>Open the notification box</Button>
      </div>
    </Card>
    <Card title='Notification with icon'>
      <div>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Custom close button'>
      <div>
        <Button type="primary" onClick={openNotification2}>Open the notification box</Button>
      </div>
    </Card>
    <Card title='Customized Icon'>
      <div>
        <Button type="primary" onClick={openNotification3}>Open the notification box</Button>
      </div>
    </Card>
    <Card title='Placement'>
      <div>
        <Select
          defaultValue="topRight"
          style={{
          width: 120,
          marginRight: 10,
          marginBottom:10
        }}
          onChange={val => {
          notification.config({placement: val});
        }}>
          {options.map(val => <Option key={val} value={val}>{val}</Option>)}
        </Select>
        <Button type="primary" onClick={openNotification}>
          Open the notification box
        </Button>
      </div>
    </Card>
  </Col>
</Row> </div>
export default notificationPage