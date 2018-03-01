import React from 'react'
import { Menu, Icon, Popover, Badge, M, Avatar } from 'antd'
import styles from './main.less'
import Menus from './menu'
import { Layout, Button } from 'antd';
import SemanticButton from '../../components/semanticui/semantic-button'
import BadgeBox from './badgeBox';
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;


const style = {
  avatarBadge: {
    marginTop: 10,
    padding: 0,
    backgroundColor: 'black'
  }
}
class Header extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      headerColor: localStorage.getItem('berrAdminHeaderColor'),
      headerBackColor: localStorage.getItem('berrAdminHeaderBackColor')
    }
  }



  handleClickMenu = e => e.key === 'logout' && logout()


  render() {

    return (
      <div className={styles.header + " " + this.props.headerTheme}  >
        <button className="anticon anticon-arrow-left back" id="btnback" onClick={() => back()} >
        </button>

        <Menu className={'header-menu'} mode='horizontal' onClick={this.props.handleClickMenu}>
          <SubMenu className="avatarBadge" >


          </SubMenu>
          
        </Menu>




      </div>
    )
  }
}



export default Header
