import React from 'react'
import {Menu, Icon,Switch} from 'antd'
import {Link} from 'dva/router'
import {menu} from '../../utils'
import find from 'lodash/find';

const topMenus = menu.map(item => item.key)
const getMenus = function (menuArray, siderFold, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (item.child) {
      return (
        <Menu.SubMenu
          key={item.key}
          title={<span> {
          item.icon
            ? <Icon type={item.icon}/>
            : ''
        }
        {
          siderFold && topMenus.indexOf(item.key) >= 0
            ? ''
            : item.name
        } </span>}>
          {getMenus(item.child, siderFold, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon
              ? <Icon type={item.icon}/>
              : ''}
            {siderFold && topMenus.indexOf(item.key) >= 0
              ? ''
              : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}

function Menus({
  siderFold,
  darkTheme,
  menuTheme,
  location,
  isNavbar,
  handleClickNavMenu,
  navOpenKeys,
  changeSignUp,
  changeOpenKeys
}) {
  const menuItems = getMenus(menu, siderFold)
  const onOpenChange = (openKeys) => {
    const latestOpenKey = find(openKeys,key => !(navOpenKeys.indexOf(key) > -1))
    const latestCloseKey = find(navOpenKeys,key => !(openKeys.indexOf(key) > -1))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  }
  const getAncestorKeys = (key) => {
    const map = {
      navigation2: ['navigation']
    }
    return map[key] || []
  }
  // When the menu bar is stuck, the open keys can not be manipulated
  let menuProps = !siderFold
    ? {
      onOpenChange,
      openKeys: navOpenKeys
    }
    : {}

  return (
     <div>
    <Menu
     {...menuProps}
      mode={siderFold  ? 'vertical': 'inline'}
      theme={menuTheme ? menuTheme:"dark"} className={"menu_"+menuTheme}
      onClick={handleClickNavMenu}
      defaultSelectedKeys={[
      location
        .pathname
        .split('/')[
          location
            .pathname
            .split('/')
            .length - 1
        ] || 'dashboard'
    ]}>
      {menuItems}
    </Menu>
    </div>
  )
}

export default Menus
