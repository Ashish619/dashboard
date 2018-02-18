import React from 'react'
import { Icon, Badge,Avatar  } from 'antd'
import { Link } from 'dva/router'
import styles from './BadgeBox.less'
import screenfull from 'screenfull';

class BadgeBox extends React.Component {

   constructor(props) {
      super(props);
   }

  fullScreen(){
   if(screenfull.isFullscreen){
     screenfull.exit();
   }else{
     screenfull.request();
   }
 }

render(){
  return (
 <div className={styles.badgeBox} style={{ float: 'right'  }}>
    
 <Link  className={styles.badge}>
 
    <Icon
    className="trigger" className={styles.size}
    type={this.props.pr.siderFoldRight ? 'setting' : 'menu-unfold'}
     onClick={this.props.pr.switchSiderRight}
    />
  </Link>
     <Link onClick={this.fullScreen} className={styles.badge}>
        
          <Icon type="arrows-alt" className={styles.size}/>
      
      </Link>
      <Link to="/" className={styles.badge}>
        <Badge count={100} overflowCount={99} style={{ backgroundColor: '#108ee9' }}>
          <Icon type="message" className={styles.size}/>
        </Badge>
      </Link>
     
      <Link to="/" className={styles.badge}>
        <Badge count={27}>
          <Icon type="notification" className={styles.size}/>
        </Badge>
      </Link>
     
    </div>

  )
}
}



export default BadgeBox
