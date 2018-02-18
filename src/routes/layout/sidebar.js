import React from 'react'
import {
  Menu,
  Icon,
  Row,
  Col,
  Switch,
  Card
} from 'antd';
import {color} from '../../utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
  handleClick(e) {
    console.log('click ', e);
  },
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{
        width: 215
      }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">
        <SubMenu
          key="sub1"
          title={< span > <Icon type="mail"/> < span > Dashboard </span></span >}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={< span > <Icon type="appstore"/> < span > Layout </span></span >}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={<span> <Icon type="setting"/> <span> App </span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});

const Sider1 = React.createClass({
  getInitialState() {
    return {current: '1', openKeys: []};
  },
  handleClick(e) {
    console.log('Clicked: ', e);
    this.setState({current: e.key});
  },
  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state
      .openKeys
      .find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this
        .getAncestorKeys(latestOpenKey)
        .concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({openKeys: nextOpenKeys});
  },
  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  },
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{
        width: 215
      }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}>
        <SubMenu
          key="sub1"
          title={< span > <Icon type="mail"/> < span > Dashboard </span></span >}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={< span > <Icon type="appstore"/> < span > Layout </span></span >}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={< span > <Icon type="setting"/> < span > App </span></span >}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});

const Sider2 = React.createClass({
  getInitialState() {
    return {theme: 'dark', current: '1'};
  },
  changeTheme(value) {
    this.setState({
      theme: value
        ? 'dark'
        : 'light'
    });
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key});
  },
  render() {
    return (
      <div>
           <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"/>
        <br/>
        <br/>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{
          width: 215
        }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline">
          <SubMenu
            key="sub1"
            title={< span > <Icon type="mail"/> < span > Dashboard </span></span >}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={< span > <Icon type="appstore"/> < span > Navigtion Two </span></span >}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={< span > <Icon type="setting"/> < span > App </span></span >}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
});
const Sider3 = React.createClass({
  getInitialState() {
    return {mode: 'inline'};
  },
  changeMode(value) {
    this.setState({
      mode: value
        ? 'vertical'
        : 'inline'
    });
  },
  render() {
    return (
      <div>
        <Switch onChange={this.changeMode}/>
        <br/>
        <br/>
        <Menu
          style={{
          width: 215
        }}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}>
          <SubMenu
            key="sub1"
            title={< span > <Icon type="mail"/> < span > Dashboard </span></span >}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={< span > <Icon type="appstore"/> < span > Layout </span></span >}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={< span > <Icon type="setting"/> < span > App </span></span >}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
});

const sideBarPage = () =><div> <Row gutter={12}>
  <Col xs={24} md={12} lg={12}>
    <Card style={{
          background:color.blue
        }}>
      <Sider/></Card>
      <Card style={{
          background:color.blue,
          minHeight:480
        }}>
      <Sider3/></Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card style={{
          background:color.blue,
          
        }}>
      <Sider2/></Card>

        <Card style={{
          background:color.blue,
          minHeight:508
        }}>
      <Sider1/></Card>
  </Col>
</Row> </div>

export default sideBarPage