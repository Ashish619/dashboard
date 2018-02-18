import React from 'react'
import {
    Row,
    Col,
    Button,
    Card,
    Icon,
    Alert,
    Tag,
    Badge,
    Radio,
    Input,
    Switch,
    Modal,Slider,Menu,Timeline,Breadcrumb,message,Collapse,notification,Popconfirm,Progress,Spin,Upload,Rate,Dropdown,Steps,Tabs,AutoComplete,TreeSelect
} from 'antd'
import {Ico} from '../components/ui'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import {SemanticLabel, SemanticImageLabel} from '../components/semanticui/semantic-label'
import styles from './ui/input.less'
import style from './documents.less'
import {color} from '../utils'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'


const Panel = Collapse.Panel;
const Step = Steps.Step;

const TabPane = Tabs.TabPane;
const TreeNode = TreeSelect.TreeNode;


const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const success = function () {
    message.success('This is a message of success');
};
const error = function () {
    message.error('This is a message of error');
};

const warning = function () {
    message.warning('This is message of warning');
};

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.'
  });
};

function onSelect(value) {
  message.success('onSelect =>' + value);
}

const BasicComplete = React.createClass({
  getInitialState() {
    return {dataSource: []};
  },
  handleChange(value) {
    this.setState({
      dataSource: !value
        ? []
        : [
          value, value + value,
          value + value + value
        ]
    });
  },
  render() {
    const {dataSource} = this.state;
    return (<AutoComplete
      dataSource={dataSource}
      style={{
      width: 200
    }}
      onSelect={onSelect}
      onChange={this.handleChange}
      placeholder="input here"/>);
  }
});

const data = [
      {name: 'Page A', Food: 1000, Clothes: 7500, Electronics: 5000},
      {name: 'Page B', Food: 1600, Clothes: 5000, Electronics: 3500},
      {name: 'Page C', Food: 1700, Clothes: 8200, Electronics: 6800},
      {name: 'Page D', Food: 1200, Clothes: 3000, Electronics: 2000},
      {name: 'Page E', Food: 2600, Clothes: 2000, Electronics: 7200},
      {name: 'Page F', Food: 4200, Clothes: 8600, Electronics: 5300},
      {name: 'Page G', Food: 4000, Clothes: 2300, Electronics: 6600},
];


const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

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

const documantationPage = React.createClass({
    getInitialState() {
        return {visible: false};
    },
    showModal() {
        this.setState({visible: true});
    },
    
    confirm() {
        this.setState({visible: false});
        message.success('Next step.');
    },
    cancel() {
        this.setState({visible: false});
        message.error('Click on cancel.');
    },
    render() {
        return (
            <div className='content-inner doc'>

                <h1>DOCUMENTATION</h1>
                <br/>

                <h3>Getting Started</h3>
                <br/>

<p>Berr Admin(React Admin) is a JavaScript application that consists of  react, redux, react-router  and a number of libraries to help you get up and running quickly. Once you open the zip file, you can run it in the project and extend and extend anything you want.</p>
<br/>
 <Alert
    message="Warning"
    description="*** ALL THE IMAGES THAT APPEAR IN THE PREVIEW ARE NOT IN THE DOWNLOAD"
    type="warning"
    showIcon
  />

                  <h3>Requirements</h3><br/>
                  <h3>-Node JS</h3>
                  
 <Alert
    message="Informational Notes"
    description="*** You need to setup node.js"
    type="info"
    showIcon
  />
                       
                        Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.<br/> <br/>
                        <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>
                   
                <br/> <br/> <br/>

               <h3>-Node Packaged Modules(npm)</h3>
                <br/>

             <p>  npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.</p>
                <br/>
                <h3>BerrAdmin Install</h3>
                
                <br/>
                1. install npm
                <Highlight className='console'>
                    <div>
                        cd berrAdmin
                        <br/>
                        npm install
                    </div>
                </Highlight>
                <br/>
                2. To develop applications and run them on your computer.(debug mode)
                <Highlight className='console'>
                    <div>
                        cd berrAdmin
                        <br/>
                        npm run dev
                    </div>
                </Highlight>
                <br/>
                Open http://localhost:8000 with your browser 
                <br/>
                <br/>
                <br/>
                <h3>Publish</h3>

                To publish the application on your website.
                <Highlight className='console'>
                    <div>
                        npm run build
                    </div>
                </Highlight>
                <br/>
                "dist" folder copy to ftp
                <br/>
                "assets" folder copy to ftp                
                <br/>
                <br/>
                <br/>

                <h3>BerrAdmin File Tree</h3>
                <p>BerrAdmin folder based dva(Lightweight front-end framework based on redux, redux-saga and react-router@2.x.) <br/><a href="https://github.com/dvajs/dva-cli" target="_blank">https://github.com/dvajs/dva-cli</a> </p>
 <Highlight  className='text'>
{` 
    ├── assets                 # Static  images, icons, etc...
    ├── dist                   # Build folder
    ├── mock                   # Mock random data js service
        ├── app.js             # general app mock data
        ├── dashboard.js       # dashboard mock data
        ├── users.js           # user mock data
    ├── src                    # Source directory 
        ├── components         # UI components
            └── chart          # Include Charts Components
            └── dashboard      # Include Dashboards Components
            └── layout         # Layouts Components            
                └── bread.js    # Breadcrumb Component
                └── common.less # Some Layout Styles
                └── footer.js   # Footer Component
                └── header.js   # Header Component
                └── main.less   # Main Styles
                └── menu.js     # Side Menu Component
                └── sider.js    # Side Menu Settings
            └── semanticui     # Include Semantic-Ui Components
            └── table          # Include Table Components
            └── ui             # Include Ui Components
            └── config.less    # Styles
            └── skin.less      # Styles
            └── vars.less      # Styles
        ├── models             # Dva models
        ├── routes             # Route components
        ├── services           # Used for communicate with server
        ├── tests              # application test folder
        └── utils              # Utils
            └── config.js      # Change to template config file title,logo,prefix etc.
            └── index.js       # Template settings and add some rules
            └── menu.js        # sidebar menu file
            └── mock.js        # Mock config file
            └── mockStorge.js  # Mock data localStroga file
            └── request.js     # A util wrapped dva/fetch
            └── theme.js       # extra colors theme config file
        ├── theme.js           # theme config file
        ├── theme_custom.js    # Your custom theme config file
        ├── index.html         # HTML for entry file
        ├── index.js           # Entry file
        ├── router.js          # Menus Router configuration
    ├── .editorconfig          # editorconfig file 
    ├── webpack.config.js      # webpack config file
    ├── proxy.config.js        # mock service config
    └── package.json           # npm package manager file 
    `}

</Highlight>
<br/>

                <br/>
                <h3>Main Html Page (Index.html)</h3>
              
                   <br/>
              
                 <Highlight className='html'>
{ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Berr Admin</title>
  <link rel="stylesheet" href="index.css" />
  <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <!--[if lte IE 10]>
      <script
        src="./assets/js/media.match.min.js"></script>
  <![endif]-->
</head>
<body>

<div id="root"></div>

<script src="index.js"></script>
<script src="./assets/js/iconfont.js"></script>

</body>
</html>`}
                </Highlight>
                <br/>
                <br/>
  <br/>

                <br/>
                <h3>Local Storage</h3>
              
                   <br/>
With local storage, web applications can store data locally within the user's browser.

Before HTML5, application data had to be stored in cookies, included in every server request.Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.
                   <br/>               
                 <Highlight className='javascript'>
{ ` // Store
localStorage.setItem("lastname", "Smith");
 // Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");`}
                </Highlight>
                <br/>
                <br/>
      
                <h3>Mock.js Random data</h3>
             
                 Mock.js is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.

                The official site: https://github.com/nuysoft/Mock
<br/><br/>
                <h3>Webpack</h3>
webpack takes modules with dependencies and generates static assets representing those modules.
           
<br/><br/>

<h3>Build Custom Theme</h3><br/><br/>
1. Create your custom  theme config or theme_custom.js edit
<br/><br/>
For Example<br/><br/>
 <Highlight className='javascript'>
{ `module.exports = () => {
  return {
    '@border-radius-base': '3px',
    '@border-radius-sm': '2px',
    '@shadow-color': 'rgba(0,0,0,0.05)',
    '@shadow-1-down': '4px 4px 40px @shadow-color',
    '@border-color-split': '#f4f4f4',
    '@border-color-base': '#e5e5e5',
    '@menu-dark-bg': '#3e3e3e',
    '@text-color': '#666',
    '@primary-color': '#000',
    '@link-color': 'green'
  }
}
`}
 </Highlight>
<br/><br/>
2. "package.json" Edit this line<br/><br/>

 <Highlight className='javascript'>
{ `"theme": "./src/theme.js",
`}
                </Highlight>
<br/><br/>

3. Npm run<br/><br/>
  <Highlight className='console'>
                    <div>
                        npm run dev
                    </div>
                </Highlight>

<br/><br/>

<h3>Custom Components Create </h3>                <br/>
                <br/>
 <Highlight className='javascript'>
{ `var React = require('react');
import './semantic-button.less';

var SemanticButton = function statelessFunctionComponentClass(props) {
    return (
      <button onClick={props.onClick} className={\`ui button ${props.type}\`}>{props.text}</button>
  );
};
 
module.exports = SemanticButton;
`}
                </Highlight>
<br/><br/>


                <br/>
               <h3>Change Application config (Template Logo,Template Name,Template Prefix Name,Template Footer Text,Template Logo Text,Template Login Controller)</h3>                <br/>
           
                <Alert
    message="Informational Notes"
    description="*** You Can Change Logo,Template Name,Prefix Name,Footer Text,Logo Text,Login Controller in utils/config.js"
    type="info"
    showIcon
  />
                <br/>
               <p>For change application config and info (logo,title,footer etc..) from utils/config.js</p>
                <Highlight className='less'>
          { ` module.exports = {
  name: 'Berr Admin',//Change Template Name
  prefix: 'berrAdmin',//Change Template Prefix Name
  footerText: 'Berr Admin All Rights Reserved 2017',//Change Footer Text
  logoSrc: 'assets/lamp.svg',//Change Template Logo
  logoText: 'Berr Admin',//Change Template Logo Text 
  needLogin: true,//Login Page Controller (If you set needLogin:false, Login page is not seen opening template )
}
`}
                </Highlight>
                <br/>
                <br/>

<h3>Router</h3>
                <br/>
                <br/>

                <p>Router page structure /router.js</p>
 <Highlight className='typescript'>
 { `const routes = [
        {
            path: '/',
            component: App,
            getIndexRoute(nextState, cb) {
                require.ensure([], require => {
                    cb(null, {component: require('./routes/dashboard_1')})
                })
            },
            childRoutes: [
                {
                    path: 'dashboard/dashboard_1',
                    name: 'dashboard/dashboard_1',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/dashboard_1'))
                        })
                    }
                }, {
                    path: 'dashboard/dashboard_2',
                    name: 'dashboard/dashboard_2',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/dashboard_2'))
                        })
                    }
                }, {
                    path: 'dashboard/dashboard_3',
                    name: 'dashboard/dashboard_3',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/dashboard_3'))
                        })
                    }
                }, {
                    path: 'layout/grid',
                    name: 'layout/grid',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/layout/grid'))
                        })
                    }
                }, {
                    path: 'layout/grid-playground',
                    name: 'layout/grid-playground',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/layout/grid-playground'))
                        })
                    }
                }, {
                    path: 'layout/layouts',
                    name: 'layout/layouts',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/layout/layouts'))
                        })
                    }
                }, {
                    path: '*',
                    name: 'error',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/error'))
                        })
                    }
                }
            ]
        }
    ]

    return <Router history={history} routes={routes}/>
 `}
                </Highlight>
<br/><br/>
<h3>Aplication Menu</h3>
<br/><br/>
/utils/menu.js 
 <Highlight className='typescript'>
{ `module.exports = [
   {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'laptop',
        clickable: false,
        child: [
            {
                key: 'dashboard_1',
                name: 'Dashboard v1'
            }, {
                key: 'dashboard_2',
                name: 'Dashboard v2'
            }, {
                key: 'dashboard_3',
                name: 'Dashboard v3'
            }

        ]
    }, {
        key: 'layout',
        name: 'Layout',
        icon: 'appstore-o',
        clickable: false,
        child: [
            {
                key: 'grid',
                name: 'Grid',
            }, {
                key: 'grid-playground',
                name: 'Grid Playground'
            }, {
                key: 'layouts',
                name: 'Layout'
            }, {
                key: 'card',
                name: 'Cards'
            }, {
                key: 'menu',
                name: 'Menu & Nav'
            }, {
                key: 'sidebar',
                name: 'Sidebar'
            }
        ]
    }
]
 `}
                </Highlight>

<br/><br/>
<h3>Create your custom page</h3>
<br/><br/>
1. Create the "custompage.js" file in the "router" folder as follows.
<br/><br/>
 <Highlight className='typescript'>
{`import React from 'react'
import { Button } from 'antd'

const YourPage = () =>
<div>
    <Button type="primary">Primary</Button> 
    ....
    ....
    ....
    ....
    ....
</div>
export default YourPage
`}
                </Highlight>

<br/><br/>
2.  "menu.js"  edit add below line
<br/><br/>
 <Highlight className='typescript'>
{`.....
    {
        key: 'yourpage',
        name: 'Your Page',
        icon: 'exception',
    }
.....    
`}
                </Highlight>
<br/><br/>
3.  "router.js"  edit add below line
<br/><br/>
 <Highlight className='typescript'>
{`.....
   {
       path: 'yourpage',
       name: 'yourpage',
       getComponent(nextState, cb) {
       require.ensure([], require => {
         cb(null, require('./routes/yourpage'))
                    })
            }
    }
.....    
`}
                </Highlight>

<br/><br/>

<h3>Your Data Ajax Request</h3>
<br/><br/>
 <Highlight className='react'>
{`import React from 'react'
import {....} from 'antd';

import reqwest from 'reqwest';


const AjaxRequestPage = React.createClass({

  getInitialState() {
    return {yourData: []};
  },

  DataFetch(params = {}) {
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 1000,
        ...params
      },
      type: 'json'
    }).then((data) => {
      this.setState({yourData: data.results});
    });
  },
 

 componentDidMount() {
    this.DataFetch();
  },
  
  render() {
    return (
      <div>
         <YourComponent dataSource={this.state.yourData}> </YourComponent>
      </div>
    );
  }
});

export default AjaxRequestPage

`}
                </Highlight>

                <br/>
                <br/>
                <h3>For use components</h3><br/>
                <br/>
                <p>You must import from react antd modules and other npm react modules </p>
                <h4>React import</h4>
                <Highlight className='javascript'>
                    {" import { Button, Icon, Alert, Tag, Badge  }   from 'antd' "}
                </Highlight>

                <br/>


                 <br/>
                <br/>
                <h4>Font Icons</h4><br/>
                <p>You can use ant.design icons</p>
                <Icon  type="pushpin"/>
                <Icon  type="message"/>
                  <Icon  type="desktop"/>
                    <Icon  type="windows"/>
                      <Icon  type="video-camera"/>
                <br/>
                <br/>

                <Highlight >
                    {'<Icon type="pushpin"/>'}
                </Highlight>
                <br/>
                <br/>

 <br/>
                <br/>
                <h4>SVG Icons</h4>
                <p>Can be icon set http://iconfont.cn/and import your index.html src="./src/iconfont.js" using script tags</p>
                <br/>
                <Ico  type="tiger"/>
                <Ico  type="cobra"/>
                <Ico  type="Bread"/>
                <Ico  type="pelican"/>
                <Ico  type="Expression_35"/>
                
               
                <br/>
                <br/>
<br/>
                <br/>
                <h4>Extra Colors</h4>
                <p>Extra Colors in utils/theme.js file</p>
                <br/>
               <div style={{background:color.arsenic,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.blue,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.brillant_azure,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.darky_blue,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.desire,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.grass,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.green,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.jungle_green,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.peach,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.portland_orange,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.purple,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.red,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.red_purple,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.russian_green,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.sky,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.space_cadet,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.stil_de_gran_yellow,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.tumblewed,width:20,height:20,marginRight:5,float:'left'}}></div>
               <div style={{background:color.yellow,width:20,height:20,marginRight:5,float:'left'}}></div>
               
               
               

               
                <br/>
                <br/>
                <Highlight >
                      brillant_azure: '#3185FC',
                    portland_orange: '#F46036',
                    jungle_green: '#1B998B',
                    space_cadet: '#2E294E',
                    red_purple: '#E40066',
                    russian_green: '#5C946E',
                </Highlight>
                <br/>
                <br/>

                <br/>
                <br/>
                <h4>Button</h4><br/>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <br/>
                <br/>

                <Highlight >
                    {' <Button type="primary">Primary</Button>'}<br/> {'<Button>Default</Button>'}<br/> {'<Button type="dashed">Dashed</Button>'}<br/> {'<Button type="danger">Danger</Button>'}
                </Highlight>
                <br/>
                <br/>

                <h4>Label</h4><br/>
                <Tag color="pink">pink</Tag>
                <Tag color="red">red</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="yellow">yellow</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="purple">purple</Tag>
                <br/>
                <br/>

                <Highlight className='typescript'>
                    {' <Tag color="pink">pink</Tag>'}
                    <br/> {'<Tag color="red">red</Tag>'}
                    <br/> {'<Tag color="orange">orange</Tag>'}
                    <br/> {'<Tag color="yellow">yellow</Tag>'}
                    <br/> {'<Tag color="green">green</Tag>'}
                    <br/> {'<Tag color="cyan">cyan</Tag>'}
                    <br/> {'<Tag color="blue">blue</Tag>'}
                    <br/> {'<Tag color="purple">purple</Tag>'}
                </Highlight>
                <br/><br/>
                <h4>Badge</h4><br/>

                <Badge count={5}>
                    <span className="head-example"/>
                </Badge>

                <Badge dot>
                    <Icon type="notification"/>
                </Badge>

                <br/>
                <br/>

                <Highlight className='typescript'>
                    {'<Badge count={5}> '}
                    <br/> {'<span className="head-example"/>'}
                    <br/> {'</Badge>'}
                    <br/> {'<Badge dot>'}
                    <br/> {'<Icon type="notification"/>'}
                    <br/> {'</Badge>'}
                </Highlight>

                <br/><br/>
                <h4>Radio</h4><br/>

                <RadioGroup >
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>

                <br/>
                <br/>

                <Highlight className='typescript'>
                    {'<RadioGroup>'}<br/> {'<Radio value={1}>A</Radio>'}<br/> {'<Radio value={2}>B</Radio>'}<br/> {'<Radio value={3}>C</Radio>'}<br/> {'<Radio value={4}>D</Radio>'}<br/> {'</RadioGroup>'}
                </Highlight>
                <br/>
                <br/>

                <br/><br/>
                <h4>Input</h4><br/>

                <Row gutter={10}>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <Input size="large" placeholder="large size"/><br/><br/>
                        <Input addonAfter={< Icon type = "setting" />} defaultValue="mysite"/>
                    </Col>
                </Row>

                <br/>
                <br/>

                <Highlight className='typescript'>
                    {'<Input size="large" placeholder="large size" />'}<br/> {'<Input addonAfter={<Icon type ="setting" />} defaultValue="mysite"/>'}
                </Highlight>
                <br/>
                <br/>

                <br/><br/>
                <h4>Switch</h4><br/>

                <Switch checkedChildren={'YES'} unCheckedChildren={'NO'}/>

                <br/>
                <br/>

                <Highlight className='typescript'>
                    {"<Switch checkedChildren={'YES'} unCheckedChildren={'NO'}/>"}<br/>

                </Highlight>
                <br/>
                <br/>
                <br/><br/>
                <h4>Alert</h4><br/>

                <Alert message="Success Alert" type="success"/>
                <Alert message="Info Alert" type="info"/>
                <br/>
                <br/>

                <Highlight className='typescript'>
                    {'<Alert message="Success Alert" type="success"/>'}<br/>{'<Alert message="Info Alert" type="info"/>'}
                </Highlight>
                <br/>
                <br/>
                <br/><br/>
                <h4>Modal</h4><br/>
                <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
                <Modal
                    okText="OK"
                    cancelText="Cancel"
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                <br/>
                <br/>

                <Highlight className='html'>
                    {'<Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>'}<br/>
                    {'<Modal okText="OK"  cancelText="Cancel"  title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>'}<br/>
                    {'<p>some contents...</p>'}<br/>
                    {'<p>some contents...</p>'}<br/>
                    {'<p>some contents...</p>'}<br/>
                    {'</Modal>'}
                </Highlight>
                <br/>
                <br/>

                <br/><br/>
                <h4>Range</h4><br/>
                <Slider defaultValue={30} />
                <Slider range defaultValue={[20, 50]} />
                <br/>
                <br/>

                <Highlight className='typescript'>
                    {'<Slider defaultValue={30} />'}<br/>{'<Slider range defaultValue={[20, 50]} />'}<br/>
                   
                </Highlight>
                <br/>
                <br/>

              <br/><br/>
                <h4>Grid</h4><br/>
                <Row>
      <Col xs={24} md={24} lg={24}>col-24</Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12}>col-12</Col>
      <Col xs={12} md={12} lg={12}>col-12</Col>
    </Row>
    <Row>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
    </Row>
    <Row>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
    </Row>
    <Row>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    <Row>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
    </Row>
                <br/>
                <br/>

                <Highlight className='html'>
                    {`  <Row>
      <Col xs={24} md={24} lg={24}>col-24</Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12}>col-12</Col>
      <Col xs={12} md={12} lg={12}>col-12</Col>
    </Row>
    <Row>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
      <Col xs={8} md={8} lg={8}>col-8</Col>
    </Row>
    <Row>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
      <Col xs={6} md={6} lg={6}>col-6</Col>
    </Row>
    <Row>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
      <Col xs={4} md={4} lg={4}>col-4</Col>
    </Row>
    <Row>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
      <Col xs={2} md={2} lg={2}>col-2</Col>
    </Row>` }<br/>
                   
                </Highlight>
                <br/>
                <br/>

                <br/><br/>
                <h4>Table</h4><br/>
              
    
                <Highlight className='html'>
                    {'<Table rowSelection={rowSelection} columns={columns} dataSource={data}/>'}
                </Highlight>
                <br/>
                <br/>

                
                <br/><br/>
                <h4>Form</h4><br/>
               
                <Highlight className='html'>
                    {`         <Form inline onSubmit={this.handleSubmit}>
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}>
                        {getFieldDecorator('userName-login', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError   ? 'error' : ''}
                        help={passwordError || ''}>
                        {getFieldDecorator('password-login', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input
                                addonBefore={< Icon type = "lock" />}
                                type="password"
                                placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                        </Button>
                    </FormItem>
                </Form>`}
                </Highlight>
                <br/>
                <br/>
                
    <br/><br/>
                <h4>Layout</h4><br/>
 
                <Highlight className='html'>
                    {`  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>`}
                </Highlight>
                <br/>
                <br/>
 <br/><br/>
                <h4>Card</h4><br/>
                <Col md={8} lg={24} xs={24}>
    <Card title="Card title" extra={< a href = "#" > More </a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>
  <br/><br/>
                <Highlight className='html'>
                    {`   <Col md={8} lg={8} xs={24}>
    <Card title="Card title" extra={< a href = "#" > More </a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Col>`}
                </Highlight>
                <br/>
                <br/>



<br/><br/>
                <h4>Menu</h4><br/>
              <Menu
              theme="darkBlue"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal">
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
  <br/><br/>
                <Highlight className='html'>
                    {`  <Menu
              theme="darkBlue"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal">
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
            </Menu>`}
                </Highlight>
                <br/>
                <br/>

    <h4>Timeline</h4><br/>
            
            <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>

                <Highlight className='html'>
{`      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>`}
                </Highlight>
                <br/>
                <br/>


 <h4>Breadcrumb</h4><br/>
            
            <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">About</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Portfolio</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
   <br/>
                <br/>
                <Highlight className='html'>
{`     <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">About</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Portfolio</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>`}
                </Highlight>
                <br/>
                <br/>


 <h4>Message</h4><br/>
          <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
   <br/>
                <br/>
                 <Highlight className='typescript'>
{`const success = function () {
    message.success('This is a message of success');
};
const error = function () {
    message.error('This is a message of error');
};

const warning = function () {
    message.warning('This is message of warning');
};`}
                </Highlight>
<br/>
                <Highlight className='html'>
{`<Button onClick={success}>Success</Button>
<Button onClick={error}>Error</Button>
<Button onClick={warning}>Warning</Button>`}
                </Highlight>
                <br/>
                <br/>

<h4>Collapse</h4><br/>
          <Collapse defaultActiveKey={['1']} >
        <Panel header="This is panel header 1" key="1">
          <p>  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.</p>
        </Panel>
      </Collapse>
   <br/>
                <br/>
<br/>
                <Highlight className='html'>
{` <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>`}
                </Highlight>
                <br/>
                <br/>

<h4>Notification</h4><br/>
          <Button type="primary" onClick={openNotification}>Open the notification box</Button>
   <br/>
                <br/>
<br/>
 <Highlight className='typescript'>
{`const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification' +
        '. This is the content of the notification.'
  });
}; `}
                </Highlight>
                <br/>
                <Highlight className='html'>
{`  <Button type="primary" onClick={openNotification}>Open the notification box</Button>`}
                </Highlight>
                <br/>
                <br/>




<h4>Popup Confirm</h4><br/>
          <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={this.confirm}
                        onCancel={this.cancel}
                        okText="Yes"
                        cancelText="No">
                        <a href="#">Delete</a>
                    </Popconfirm>
   <br/>
                <br/>
<br/>
 <Highlight className='typescript'>
{`confirm() {
        this.setState({visible: false});
        message.success('Next step.');
    },
cancel() {
        this.setState({visible: false});
        message.error('Click on cancel.');
} `}
                </Highlight>
                <br/>
                <Highlight className='html'>
{`<Popconfirm
     title="Are you sure delete this task?"
     onConfirm={confirm}
     onCancel={cancel}
     okText="Yes"
     cancelText="No">
     <a href="#">Delete</a>
</Popconfirm>`}
                </Highlight>
                <br/>
                <br/>


<h4> Progress Bar</h4><br/>
         <Progress percent={50} status="active"/>
   <br/>
                <br/>
<br/>

                <Highlight className='html'>
{`<Progress percent={50} status="active"/>`}
                </Highlight>
                <br/>
                <br/>

                <h4>Loading Spin</h4><br/>
          <Spin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper
            consequat felis, et facilisis ex bibendum eget. Nullam efficitur tortor metus.</Spin>
   <br/>
                <br/>
<br/>

                <Highlight className='html'>
{`<Spin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper 
     consequat felis, et facilisis ex bibendum eget. Nullam efficitur tortor metus.</Spin>`}
                </Highlight>
                <br/>
                <br/>
 
                <h4>Upload</h4><br/>
          <Upload {...props}>
          <Button>
            <Icon type="upload"/>
            Click to Upload
          </Button>
        </Upload>
   <br/>
                <br/>
<br/>

                <Highlight className='typescript'>
{`const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success('file uploaded successfully');
    } else if (info.file.status === 'error') {
      message.error('file upload failed.');
    }
  }
};`}
                </Highlight>
                <br/>
                  <Highlight className='html'>
{`<Upload {...props}>
<Button>
<Icon type="upload"/>
  Click to Upload
</Button>
</Upload>`}
                </Highlight>
                <br/>
                <br/>

 <h4>Rate</h4><br/>
 <Rate allowHalf defaultValue={2.5} />
   <br/>
           
                <br/>
                  <Highlight className='html'>
{` <Rate allowHalf defaultValue={2.5} />`}
                </Highlight>
                <br/>
                <br/>



 <h4>Dropdown</h4><br/>
   <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me
                        <Icon type="down"/>
                    </a>
                </Dropdown>
   <br/>
           
                <br/>
                  <Highlight className='typescript'>
{`const menu = (
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
);`}
                </Highlight> <br/>
                  <Highlight className='html'>
{`<Dropdown overlay={menu}>
 <a className="ant-dropdown-link" href="#">
   Hover me
   <Icon type="down"/>
 </a>
</Dropdown>`}
                </Highlight>
                <br/>
                <br/>


<h4>Step</h4><br/>
  
  <Steps current={1} direction="vertical">
                    <Step title="Finished" description="This is a description."/>
                    <Step title="In Progress" description="This is a description."/>
                    <Step title="Waiting" description="This is a description."/>
                </Steps>
   <br/>
  

                <br/>
                  <Highlight className='html'>
{`<Steps current={1}>
  <Step title="Finished" description="This is a description."/>
  <Step title="In Progress" description="This is a description."/>
  <Step title="Waiting" description="This is a description."/>
</Steps>`}
                </Highlight>
                <br/>
                <br/>

<h4>Tab</h4><br/>
 <Tabs defaultActiveKey="1" >
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
   <br/>
  

                <br/>
                  <Highlight className='html'>
{`<Tabs defaultActiveKey="1" >
   <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
   <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
   <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
</Tabs>`}
                </Highlight>
                <br/>
                <br/>


<h4>Auto Complete</h4><br/>
<BasicComplete/>
   <br/>
  

                <br/>
                  <Highlight className='typescript'>
{`const BasicComplete = React.createClass({
  getInitialState() {
    return {dataSource: []};
  },
  handleChange(value) {
    this.setState({
      dataSource: !value
        ? []
        : [
          value, value + value,
          value + value + value
        ]
    });
  },
  render() {
    const {dataSource} = this.state;
    return (<AutoComplete
      dataSource={dataSource}
      style={{
      width: 200
    }}
      onSelect={onSelect}
      onChange={this.handleChange}
      placeholder="input here"/>);
  }
});`}
                </Highlight>
                <br/>
                <br/>



<h4>Auto Complete</h4><br/>

   <TreeSelect
                showSearch
                style={{
                width: 300
            }}
                value={this.state.value}
                dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto'
            }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onChange}>
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <TreeNode value="leaf1" title="my leaf" key="random"/>
                        <TreeNode value="leaf2" title="your leaf" key="random1"/>
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeNode
                            value="sss"
                            title={<b style={{ color: '#08c' }} > sss </b>}
                            key="random3"/>
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
   <br/>
  

                <br/>
                  <Highlight className='html'>
{`<TreeSelect
showSearch
style = {{ width: 300 }}
value = { this.state.value}
dropdownStyle = {{  maxHeight: 400,   overflow: 'auto' }}
placeholder = "Please select"
allowClear
treeDefaultExpandAll
onChange = {this.onChange} > 
  <TreeNode value="parent 1" title="parent 1" key="0-1">
    <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
      <TreeNode value="leaf1" title="my leaf" key="random"/>
      <TreeNode value="leaf2" title="your leaf" key="random1"/>
    </TreeNode>
    <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
      <TreeNode
        value="sss"
        title={<b style = {{ color: '#08c' }} > sss </b>}
        key="random3"/>
    </TreeNode>
  </TreeNode>
</TreeSelect>`}
                </Highlight>
                <br/>
                <br/>



<h4>Chart</h4><br/>
   <br/>
 <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend verticalAlign='top'
            content={props => {
              const { payload } = props
              return <ul className={styles.legend + ' clearfix'}>
                {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{background: item.color}} />{item.value}</li>) }
              </ul>
            }} />
         
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray='50 3' />
          <Tooltip
            wrapperStyle={{border: '1px solid rgba(0, 0, 0, 0.09)', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
            content={content => {
              const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + item.value}</li>)
              return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
            }} />
          <Line type='monotone' dataKey='Food' stroke={color.desire} strokeWidth={5} dot={{fill: color.purple}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Clothes' stroke={color.tumblewedred} strokeWidth={5} dot={{fill: color.red}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Electronics' stroke={color.stil_de_gran_yellow} strokeWidth={5} dot={{fill: color.green}} activeDot={{r: 5, strokeWidth: 0}} />
        </LineChart>
</ResponsiveContainer>
                  <Highlight className='html'>
{`<ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend verticalAlign='top'
            content={props => {
              const { payload } = props
              return <ul className={styles.legend + ' clearfix'}>
                {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{background: item.color}} />{item.value}</li>) }
              </ul>
            }} />
         
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray='50 3' />
          <Tooltip
            wrapperStyle={{border: '1px solid rgba(0, 0, 0, 0.09)', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)'}}
            content={content => {
              const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{background: item.color}} />{item.name + ':' + item.value}</li>)
              return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
            }} />
          <Line type='monotone' dataKey='Food' stroke={color.desire} strokeWidth={5} dot={{fill: color.purple}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Clothes' stroke={color.tumblewedred} strokeWidth={5} dot={{fill: color.red}} activeDot={{r: 5, strokeWidth: 0}} />
          <Line type='monotone' dataKey='Electronics' stroke={color.stil_de_gran_yellow} strokeWidth={5} dot={{fill: color.green}} activeDot={{r: 5, strokeWidth: 0}} />
        </LineChart>
</ResponsiveContainer>`}
                </Highlight>
                <br/>
                <br/>

<h3>Redux</h3>
<p>Redux is a predictable state container for JavaScript apps.</p>
<br/>
For Example<br/><br/>
<Highlight className='typescript'>
{`
class App extends Component {
 ... 
}

export default connect(mapStateToProps)(App);
`}
                </Highlight>
<br/><br/><br/>
<h3>Redux DevTools Extension</h3><br/><br/>
<p><a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank">https://github.com/zalmoxisus/redux-devtools-extension</a></p>

<br/><br/>
                <h2>Other Components / Modules etc.. </h2>
                <br/>
                <br/>
                
                <h4>You can find other examples in template modules and components folder </h4>
 <br/>
                <br/>
                <h2>Note </h2>
                <br/>
                images are not included berrAdmin main zip file.
                <br/>

                <br/>
                <br/>
                <h2>Credits</h2>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reposity</th>
                            <th>License</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>babel.js</td>
                            <td>https://github.com/babel/babel</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>react</td>
                            <td>https://github.com/facebook/react</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>redux</td>
                            <td>https://github.com/reactjs/redux/</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>react-redux</td>
                            <td>https://github.com/reactjs/react-redux</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>react-router</td>
                            <td>https://github.com/reactjs/react-router</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>react-router-redux</td>
                            <td>https://github.com/reactjs/react-router-redux</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>webpack</td>
                            <td>https://github.com/webpack/webpack</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>webpack-dev-server</td>
                            <td>https://github.com/webpack/webpack-dev-server</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <td>font-awesome</td>
                            <td>https://github.com/FortAwesome/Font-Awesome</td>
                            <td>http://scripts.sil.org/OFL</td>
                        </tr>
                        <tr>
                            <td>ant design</td>
                            <td>https://github.com/ant-design/ant-design</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>ant admin</td>
                            <td>https://github.com/zuiidea/antd-admin</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>ant motion</td>
                            <td>https://github.com/ant-design/ant-motion/</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>redux-saga</td>
                            <td>https://github.com/redux-saga/redux-saga</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>Semantic ui</td>
                            <td>https://github.com/Semantic-Org/Semantic-UI</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>Mock js</td>
                            <td>https://github.com/nuysoft/Mock</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>Recharts</td>
                            <td>https://github.com/recharts/recharts</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>Poppins Fonts</td>
                            <td>https://fonts.google.com/specimen/Poppins</td>
                            <td>Google fonts
                            </td>
                        </tr>
                          <tr>
                            <td>Weather Api</td>
                            <td>https://developer.yahoo.com/weather/</td>
                            <td>BSD
                            </td>
                        </tr>
                        <tr>
                            <td>SVG Icons</td>
                            <td>http://iconfont.cn/</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>Assets webpack plugin</td>
                            <td>https://npmjs.com/package/assets-webpack-plugin</td>
                            <td>MIT
                            </td>
                        </tr>
                       <tr>
                            <td>atool-build</td>
                            <td>https://npmjs.com/package/atool-build</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>classnames</td>
                            <td>https://npmjs.com/package/classnames</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>d3</td>
                            <td>https://npmjs.com/package/d3</td>
                            <td>BSD-3-Clause
                            </td>
                        </tr>
                        <tr>
                            <td>dora</td>
                            <td>https://npmjs.com/package/dora</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>glob</td>
                            <td>https://npmjs.com/package/glob</td>
                            <td>ISC
                            </td>
                        </tr>
                        <tr>
                            <td>js-cookie</td>
                            <td>https://npmjs.com/package/js-cookie</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>qs</td>
                            <td>https://npmjs.com/package/qs</td>
                            <td>MIT
                            </td>
                        </tr>
                        <tr>
                            <td>rc-banner-anim</td>
                            <td>https://npmjs.com/package/rc-banner-anim</td>
                            <td>-
                            </td>
                        </tr>
                        <tr>
                            <td>rc-queue-anim</td>
                            <td>https://npmjs.com/package/rc-queue-anim</td>
                            <td>-
                            </td>
                        </tr>
                        <tr>
                            <td>rc-scroll-anim</td>
                            <td>https://npmjs.com/package/rc-scroll-anim</td>
                            <td>-
                            </td>
                        </tr> 
                        <tr>
                            <td>rc-tween-one</td>
                            <td>https://npmjs.com/package/rc-tween-one</td>
                            <td>-
                            </td>
                        </tr>  
                        <tr>
                            <td>react-countup</td>
                            <td>https://npmjs.com/package/react-countup</td>
                            <td>MIT
                            </td>
                        </tr>  
                        <tr>
                            <td>react-dom</td>
                            <td>https://npmjs.com/package/react-dom</td>
                            <td>BSD-3-Clause
                            </td>
                        </tr>   
                        <tr>
                            <td>react-highlight</td>
                            <td>https://npmjs.com/package/react-highlight</td>
                            <td>MIT
                            </td>
                        </tr>   
                        <tr>
                            <td>reqwest</td>
                            <td>https://npmjs.com/package/reqwest</td>
                            <td>MIT
                            </td>
                        </tr>   
                        <tr>
                            <td>robe-ajax</td>
                            <td>https://npmjs.com/package/robe-ajax</td>
                            <td>MIT
                            </td>
                        </tr>   
                        <tr>
                            <td>watchjs</td>
                            <td>https://npmjs.com/package/watchjs</td>
                            <td>MIT
                            </td>
                        </tr>   
                              <tr>
                            <td>Images</td>
                            <td>https://randomuser.me/</td>
                            <td>*** Images Not Included Main file, Only Demo
                            </td>
                        </tr>
                         <tr>
                            <td>Images</td>
                            <td>https://unsplash.com/</td>
                            <td>*** Images Not Included Main file, Only Demo
                            </td>
                        </tr>  
                        <tr>
                        <td>Gallery Images</td>
                        <td>https://www.pexels.com/</td>
                        <td>*** Images Not Included Main file, Only Demo
                        </td>
                    </tr>     
                     <tr>
                        <td>React Rating</td>
                        <td>http://dreyescat.github.io/react-rating/</td>
                        <td>MIT
                        </td>
                    </tr>   
                    
                    <tr>
                    <td>React Masonry Infinite</td>
                    <td>https://github.com/skoob13/react-masonry-infinite</td>
                    <td>MIT
                    </td>
                </tr> 

                <tr>
                <td>React Media Player</td>
                <td>https://github.com/souporserious/react-media-player</td>
                <td>ISC
                </td>
            </tr> 

            <tr>
            <td>React Rodal (Modal Effects)</td>
            <td>https://github.com/chenjiahan/rodal</td>
            <td>MIT
            </td>
        </tr> 

        <tr>
        <td>React Emojone</td>
        <td>https://github.com/pladaria/react-emojione</td>
        <td>MIT
        </td>
    </tr> 

    <tr>
    <td>React Echarts</td>
    <td>https://github.com/hustcc/echarts-for-react</td>
    <td>MIT
    </td>
</tr> 
<tr>
<td>React G2 Charts</td>
<td>https://github.com/antvis/g2-react</td>
<td>MIT
</td>
</tr> 
<tr>
<td>React Photoswipe And Gallery</td>
<td>https://github.com/minhtranite/react-photoswipe</td>
<td>MIT
</td>
</tr> 

<tr>
<td>React Wysiwyg Editor</td>
<td>https://github.com/jpuri/react-draft-wysiwyg</td>
<td>MIT
</td>
</tr> 
                    </tbody>
                </table>

            </div>
        );
    }
});

export default documantationPage
