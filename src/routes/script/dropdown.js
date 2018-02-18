import React from 'react'
import {
    Table,
    Row,
    Col,
    Dropdown,
    Card,
    Menu,
    Icon,
    Button,
    message
} from 'antd'
import styles from "./dropdown.less"
const SubMenu = Menu.SubMenu;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">1st menu item item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.ebay.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.yahoo.com/">3d menu item</a>
        </Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3" disabled>3d menu item（disabled）</Menu.Item>
    </Menu>
);

const onClick = function ({key}) {
    message.info(`Click on item ${key}`);
};

const menu3 = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
    </Menu>
);

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu4 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
    </Menu>
);

const menu5 = (
    <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3d menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
    </Menu>
);

const OverlayVisible = React.createClass({
    getInitialState() {
        return {visible: false};
    },
    handleMenuClick(e) {
        if (e.key === '3') {
            this.setState({visible: false});
        }
    },
    handleVisibleChange(flag) {
        this.setState({visible: flag});
    },
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
                <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
                <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown
                overlay={menu}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}>
                <a className="ant-dropdown-link" href="#">
                    Hover me
                    <Icon type="down"/>
                </a>
            </Dropdown>
        );
    }
});

const dropDownPage = () => <div>
    <Row gutter={10}>
        <Col xs={24} md={12} lg={12}>
            <Card title='Standart Dropdown'>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me
                        <Icon type="down"/>
                    </a>
                </Dropdown>
            </Card>
            <Card title='Custom Placement' className="demo-dropdown">
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <Button>bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button>bottomRight</Button>
                </Dropdown>
                <br/>
                <Dropdown overlay={menu} placement="topLeft">
                    <Button>topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topCenter">
                    <Button>topCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topRight">
                    <Button>topRight</Button>
                </Dropdown>
            </Card>
            <Card title='Disabled Menu Item'>
                <Dropdown overlay={menu2}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me
                        <Icon type="down"/>
                    </a>
                </Dropdown>

            </Card>
            <Card title='Click menu'>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        Click me
                        <Icon type="down"/>
                    </a>
                </Dropdown>
            </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
            <Card title='Click event'>
                <Dropdown overlay={menu3}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me, Click menu item
                        <Icon type="down"/>
                    </a>
                </Dropdown>
            </Card>
            <Card title='Button with dropdown menu' className="demo-dropdown2">
                <Dropdown.Button style={{
                    marginRight: 8
                }} onClick={handleButtonClick} overlay={menu4}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button
                    onClick={handleButtonClick}
                    overlay={menu4}
                    disabled
                    style={{
                    marginRight: 8
                }}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown overlay={menu4}>
                    <Button>
                        Button
                        <Icon type="down"/>
                    </Button>
                </Dropdown>
            </Card>
            <Card title='Cascading menu'>
                <Dropdown overlay={menu5}>
                    <a className="ant-dropdown-link" href="#">
                        Cascading menu
                        <Icon type="down"/>
                    </a>
                </Dropdown>

            </Card>
            <Card title='The way of hiding menu.'>
                <OverlayVisible/>
            </Card>
        </Col>
    </Row>

</div>
export default dropDownPage