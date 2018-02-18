import React from 'react'
import {Ico} from '../../components/ui'
import {Table, Row, Col, Card,Icon} from 'antd'
import styles from './ico.less'

const iconlist = [
  'unknown',
  'sun',
  'storm',
  'hurricane',
  'low-storm',
  'high-storm',
  'smog',
  'fog',
  'big-snow-storm',
  'dust',
  'up-downs',
  'heavy-snow',
  'sleet',
  'snow',
  'light-snow',
  'rain-storm',
  'heavy-rain',
  'rain-hail',
  'thunderstorms',
  'heavy-rain-2',
  'light-rain',
  'medium-rain',
  'partly-cloudy',
  'cloudy',
  'Expression_1',
  'Expression_2',
  'Expression_3',
  'Expression_4',
  'Expression_5',
  'Expression_6',
  'Expression_7',
  'Expression_8',
  'Expression_9',
  'Expression_10',
  'Expression_11',
  'Expression_12',
  'Expression_13',
  'Expression_14',
  'Expression_15',
  'Expression_16',
  'Expression_17',
  'Expression_18',
  'Expression_19',
  'Expression_20',
  'Expression_21',
  'Expression_22',
  'Expression_23',
  'Expression_24',
  'Expression_25',
  'Expression_26',
  'Expression_27',
  'Expression_28',
  'Expression_29',
  'Expression_30',
  'Expression_31',
  'Expression_32',
  'Expression_33',
  'Expression_34',
  'Expression_35',
  'turtle',
  'tiger',
  'toucan',
  'squirrel',
  'siberian_husky',
  'octopus',
  'penguin',
  'pelican',
  'owl',
  'monkey',
  'macaw',
  'crab',
  'lion',
  'kangaroo',
  'giraffe',
  'frog',
  'hen',
  'cobra',
  'chameleon',
  'cat',
  'Cherry',
  'Cheese',
  'Bread',
  'Beer',
  'Beet',
  'Bacon',
  'Banana',
  'Asparagus',
  'Apple'
]

const fonticonlist = [
  'lock',
  'unlock',
  'android',
  'apple',
  'apple-o',
  'area-chart',
  'pie-chart',
  'bar-chart',
  'dot-chart',
  'bars',
  'book',
  'calendar',
  'cloud',
  'code',
  'code-o',
  'copy',
  'credit-card',
  'delete',
  'desktop',
  'download',
  'edit',
  'ellipsis',
  'file',
  'file-text',
  'file-unknown',
  'file-pdf',
  'file-excel',
  'file-jpg',
  'file-ppt',
  'file-add',
  'folder',
  'folder-open',
  'folder-add',
  'github',
  'hdd',
  'frown',
  'frown-o',
  'meh',
  'meh-o',
  'smile',
  'smile-o',
  'inbox',
  'laptop',
  'appstore-o',
  'appstore',
  'line-chart',
  'link',
  'logout',
  'mail',
  'menu-fold',
  'menu-unfold',
  'mobile',
  'notification',
  'paper-clip',
  'picture',
  'poweroff',
  'reload',
  'search',
  'setting',
  'share-alt',
  'shopping-cart',
  'tablet',
  'tag',
  'tag-o',
  'tags',
  'tags-o',
  'to-top',
  'upload',
  'user',
  'video-camera',
  'windows',
  'windows-o',
  'ie',
  'chrome',
  'home',
  'loading',
  'loading-3-quarters',
  'cloud-upload-o',
  'cloud-download-o',
  'cloud-upload',
  'cloud-download',
  'cloud-o',
  'star-o',
  'star',
  'heart-o',
  'heart',
  'environment',
  'environment-o',
  'eye','eye-o','camera','camera-o','save','team','solution','phone','filter','exception','export','customer-service','qrcode','scan','like','like-o','dislike','dislike-o','message','calculator','pushpin','pushpin-o','bulb','select','switcher','rocket','step-backward','step-forward','fast-backward','fast-forward','shrink','arrows-alt','down','up','left','right','caret-up','caret-down','caret-left','caret-right','up-circle','down-circle','left-circle','right-circle','up-circle-o','down-circle-o','left-circle-o','right-circle-o','double-right','double-left','verticle-left','verticle-right','forward','backward','rollback','enter','retweet','swap','swap-left','swap-right','arrow-up','arrow-down','arrow-left','arrow-right','play-circle','play-circle-o','up-square','down-square','left-square','right-square','up-square-o','down-square-o','left-square-o','right-square-o','question','question-circle-o','question-circle','plus','plus-circle-o','plus-circle','pause','pause-circle-o','pause-circle','minus','minus-circle-o','minus-circle','plus-square','plus-square-o','minus-square','info','info-circle-o','info-circle','exclamation','exclamation-circle-o','exclamation-circle','close','close-circle','close-circle-o','close-square','close-square-o','check','check-circle','check-circle-o','check-square','check-square-o','clock-circle-o','clock-circle'
]

const IcoPage = () => <div>
  <Row>
    <Col xs={24} md={24} lg={24}>
      <Card>
        <h3>Font Icons</h3>
         <ul className={styles.list}>
          {fonticonlist.map(item => <li key={item}><Icon className={styles.fonticon} type={item}/>
            <span className={styles.name}>{item}</span>
          </li>)}
        </ul>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col xs={24} md={24} lg={24}>
      <Card>
        <h3>SVG Icons - Can be icon set 
          <a href="http://iconfont.cn/">http://iconfont.cn/</a>
          and import your index.html src="./src/iconfont.js" using script tags</h3>
        <br/>
        <ul className={styles.list}>
          {iconlist.map(item => <li key={item}><Ico className={styles.icon} type={item}/>
            <span className={styles.name}>{item}</span>
          </li>)}
        </ul>
      </Card>
    </Col>
  </Row>

</div>

export default IcoPage
