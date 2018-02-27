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
 </div>

  )
}
}

export default BadgeBox
