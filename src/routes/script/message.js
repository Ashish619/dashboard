import React from 'react'
import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon,
    message
} from 'antd'
message.config({top: 61, duration: 2});
const info = function () {
    message.info('This is a normal message');

};
const success = function () {
    message.success('This is a message of success');
};
const successtime = function () {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};
const successloading = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
};
const error = function () {
    message.error('This is a message of error');
};

const warning = function () {
    message.warning('This is message of warning');
};

const messagePage = () =>< div > <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
        <Card title='Basic Message'>
            <Button type="primary" onClick={info}>Display normal message</Button>
        </Card>
        <Card title='Typed Message'>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
        </Card>
    </Col>
    <Col xs={24} md={12} lg={12}>
        <Card title='Customize Duration'>
            <Button onClick={successtime}>Customized display duration</Button>
        </Card>
        <Card title='Loading Message'>
            <Button onClick={successloading}>Display a loading indicator</Button>
        </Card>
    </Col>
</Row> </div>
export default messagePage