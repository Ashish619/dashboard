import React from 'react'
import {
    Row,
    Col,
    Card,
    Switch,
    Popconfirm,
    message,
    Button
} from 'antd'

function confirm() {
    message.success('Click on Yes');
}

function cancel() {
    message.error('Click on No');
}
const text = 'Are you sure delete this task?';

const Conditionaltrigger = React.createClass({
    getInitialState() {
        return {
            visible: false, condition: true, // Whether meet the condition, if not show popconfirm.
        };
    },
    changeCondition(value) {
        this.setState({condition: value});
    },
    confirm() {
        this.setState({visible: false});
        message.success('Next step.');
    },
    cancel() {
        this.setState({visible: false});
        message.error('Click on cancel.');
    },
    handleVisibleChange(visible) {
        if (!visible) {
            this.setState({visible});
            return;
        }
        // Determining condition before show the popconfirm.
        console.log(this.state.condition);
        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({visible}); // show the popconfirm
        }
    },
    render() {
        return (
            <div>
                <Popconfirm
                    title="Are you sure delete this task?"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No">
                    <a href="#">Delete a task</a>
                </Popconfirm>
                <br/>
                <br/>
                Whether directly execute：<Switch defaultChecked onChange={this.changeCondition}/>
            </div>
        );
    }
});

const PopConfirmPage = () => <div>

    <Row gutter={10}>
        <Col xs={24} md={12} lg={12}>
            <Card title='Basic Spinner'>
                <div>
                    <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No">
                        <a href="#">Delete</a>
                    </Popconfirm>
                </div>
            </Card>
            <Card title='Locale text'>
                <Popconfirm title="Are you sure？" okText="Yes :) " cancelText="No :(">
                    <a href="#">Delete</a>
                </Popconfirm>
            </Card>
            <Card title='Conditional trigger'>
                <Conditionaltrigger/>
            </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
            <Card title='Placement'>
                <div className="demo">
                    <div
                        style={{
                        marginLeft: 25,
                        whiteSpace: 'nowrap'
                    }}>
                        <Popconfirm
                            placement="topLeft"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>TL</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="top"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>Top</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="topRight"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>TR</Button>
                        </Popconfirm>
                    </div>
                    <div
                        style={{
                        width: 70,
                        float: 'left'
                    }}>
                        <Popconfirm
                            placement="leftTop"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>LT</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="left"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>Left</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="leftBottom"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>LB</Button>
                        </Popconfirm>
                    </div>
                    <div
                        style={{
                        width: 70,
                        marginLeft: 174
                    }}>
                        <Popconfirm
                            placement="rightTop"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>RT</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="right"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>Right</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="rightBottom"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>RB</Button>
                        </Popconfirm>
                    </div>
                    <div
                        style={{
                        marginLeft: 20,
                        clear: 'both',
                        whiteSpace: 'nowrap'
                    }}>
                        <Popconfirm
                            placement="bottomLeft"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>BL</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="bottom"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>Bottom</Button>
                        </Popconfirm>
                        <Popconfirm
                            placement="bottomRight"
                            title={text}
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No">
                            <Button>BR</Button>
                        </Popconfirm>
                    </div>
                </div>
            </Card>
            
        </Col>
    </Row>

</div>

export default PopConfirmPage