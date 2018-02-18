import React from 'react'
import {Menu, Icon, Row, Col, Table} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import styles from './menu.less'
import {color} from '../../utils'

const menuPage = React.createClass({
  getInitialState() {
    return {current: 'mail',direction:"horizontal"};
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key});
  },
      /**
   * Calculate & Update state of new dimensions
   */
    updateDimensions() {
        if (window.innerWidth < 500) {
            this.setState({direction: "vertical"});
        } else {
            this.setState({direction: "horizontal"});
        }
    },

    /**
   * Add event listener
   */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    },

    /**
   * Remove event listener
   */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    },
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col md={12} lg={12} xs={24}>
            <Menu
              bodyStyle={{
              background: color.blue
            }}
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode={this.state.direction}>
              <Menu.Item key="mail">
                <Icon type="home"/>Home
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="solution"/>News
              </Menu.Item>
              <SubMenu title={<span> <Icon type="eye"/>About </span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="">
                <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </Menu.Item>
            </Menu>
          </Col>

          <Col md={12} lg={12} xs={24}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
               mode={this.state.direction}>
              <Menu.Item key="mail">
                <Icon type="user"/>Acoount
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="settings"/>Settings
              </Menu.Item>
              <SubMenu title={<span> <Icon type="mail"/>Messages </span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="" style={{
                float: 'right'
              }}>
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon type="team"/>
                  Friends</a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col md={12} lg={12} xs={24}>
            <Menu
              theme="dark"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
               mode={this.state.direction}>
              <Menu.Item key="mail">
                <Icon type="home"/>Home
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore"/>News
              </Menu.Item>
              <SubMenu title={<span> <Icon type="eye"/>About </span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="">
                <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col md={12} lg={12} xs={24}>
            <Menu
              theme="darkBlue"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode={this.state.direction}>
              <Menu.Item key="mail">
                <Icon type="home"/>Home
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore"/>News
              </Menu.Item>
              <SubMenu title={<span> <Icon type="eye"/>About </span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="" style={{
                float: 'right'
              }}>
                <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

      </div>
    );
  }
});

export default menuPage
