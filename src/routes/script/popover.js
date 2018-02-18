import React from 'react'
import {
    Row,
    Col,
    Card,
    Switch,
    Popover,
    message,
    Button
} from 'antd'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
const buttonWidth = 40;
const text = <span>Title</span>;

const ClosePopover = React.createClass({
    getInitialState() {
        return {visible: false};
    },
    hide() {
        this.setState({visible: false});
    },
    handleVisibleChange(visible) {
        this.setState({visible});
    },
    render() {
        return (
            <Popover
                content={< a onClick = {
                this.hide
            } > Close </a>}
                title="Title"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}>
                <Button type="primary">Click me</Button>
            </Popover>
        );
    }
});

const PopoverPage = () => <div>

    <Row gutter={10}>
        <Col xs={24} md={12} lg={12}>
            <Card title='Basic'>
                <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>
            </Card>
            <Card title='Three ways to trigger'>
                <Popover content={content} title="Title" trigger="hover">
                    <Button>Hover me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="focus">
                    <Button>Focus me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="click">
                    <Button>Click me</Button>
                </Popover>
            </Card>
            <Card title='Arrow pointing'>
                <Popover placement="topLeft" title={text} content={content}>
                    <Button>Align edge
                    </Button>
                </Popover>
                <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                    <Button>Arrow points to center
                    </Button>
                </Popover>
            </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
            <Card title='Placement'>
                <div className="demo">
                    <div
                        style={{
                        marginLeft: buttonWidth,
                        whiteSpace: 'nowrap'
                    }}>
                        <Popover placement="topLeft" title={text} content={content} trigger="click">
                            <Button>TL</Button>
                        </Popover>
                        <Popover placement="top" title={text} content={content} trigger="click">
                            <Button>Top</Button>
                        </Popover>
                        <Popover placement="topRight" title={text} content={content} trigger="click">
                            <Button>TR</Button>
                        </Popover>
                    </div>
                    <div
                        style={{
                        width: buttonWidth,
                        float: 'left'
                    }}>
                        <Popover placement="leftTop" title={text} content={content} trigger="click">
                            <Button>LT</Button>
                        </Popover>
                        <Popover placement="left" title={text} content={content} trigger="click">
                            <Button>Left</Button>
                        </Popover>
                        <Popover placement="leftBottom" title={text} content={content} trigger="click">
                            <Button>LB</Button>
                        </Popover>
                    </div>
                    <div
                        style={{
                        width: buttonWidth,
                        marginLeft: (buttonWidth * 4) + 15
                    }}>
                        <Popover placement="rightTop" title={text} content={content} trigger="click">
                            <Button>RT</Button>
                        </Popover>
                        <Popover placement="right" title={text} content={content} trigger="click">
                            <Button>RGT</Button>
                        </Popover>
                        <Popover placement="rightBottom" title={text} content={content} trigger="click">
                            <Button>RB</Button>
                        </Popover>
                    </div>
                    <div
                        style={{
                        marginLeft: buttonWidth,
                        clear: 'both',
                        whiteSpace: 'nowrap'
                    }}>
                        <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                            <Button>BL</Button>
                        </Popover>
                        <Popover placement="bottom" title={text} content={content} trigger="click">
                            <Button>BT</Button>
                        </Popover>
                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                            <Button>BR</Button>
                        </Popover>
                    </div>
                </div>
            </Card>
            <Card title='Controlling the close of the dialog'>
                <ClosePopover/>
            </Card>
        </Col>
    </Row>

</div>

export default PopoverPage