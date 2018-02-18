import React from 'react'
import {
  Row,
  Col,
  Icon,
  Card,
  Button,
  Switch,
  Form,
  Input,
  Alert
} from 'antd'
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import styles from "./basicAnimation.less"
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';


TweenOne
  .plugins
  .push(PathPlugin);

const FormItem = Form.Item;

class FormAnim extends React.Component {
  constructor(props) {
    super(props);
    this.animation = {
      left: '20%',
      yoyo: true,
      repeat: -1,
      duration: 1000
    };
  }


  render() {
    return (
      <div>
         
        <QueueAnim delay={300} className="queue-simple"  >
          <div key="a">
            <Button type="primary">Primary </Button>
           
          </div>
          <div key="b">
            <Switch checkedChildren={'Yes'} unCheckedChildren={'No'}/></div>
          <div key="c">

            <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>

          </div>
          <div key="d">
            <Alert message="Warning Alert" type="warning"/>
          </div>
          <div key="e">
            <Card title='Card Samples'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis
              aliquet sem, a malesuada augue pharetra non. Praesent molestie posuere elit
              lobortis porta.
            </Card>
          </div>
          
        </QueueAnim>

         

      </div>
    );
  }
}

FormAnim.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  moment: React.PropTypes.number
};

class Box extends React.Component {

  constructor(props) {
    super(props);
    this.animation = {
      rotate: 360,
      repeat: -1,
      duration: 1000
    };
  }

  render() {
    return (<TweenOne
      animation={this.animation}
      paused={this.props.paused}
      className="code-box-shape"/>);
  }
}
Box.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool
};

class Box2 extends React.Component {

  constructor(props) {
    super(props);
    this.animation = {
      scale: 0,
      yoyo: true,
      repeat: -1,
      duration: 1000
    };
  }

  render() {
    return (<TweenOne
      animation={this.animation}
      paused={this.props.paused}
      style={{
      transform: 'scale(1)'
    }}
      className="code-box-shape"/>);
  }
}
Box2.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool
};

class Box3 extends React.Component {

  constructor(props) {
    super(props);
    this.animation = {
      blur: '10px',
      yoyo: true,
      repeat: -1,
      duration: 1000
    };
  }

  render() {
    return (<TweenOne
      animation={this.animation}
      paused={this.props.paused}
      className="code-box-shape"/>);
  }
}
Box3.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool
};

class Box4 extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = [
      {
        left: '-40%'
      }, {
        left: '40%'
      }, {
        top: '30px'
      }, {
        scale: 0.7
      }, {
        scale: 1
      }, {
        top: 0
      }, {
        left: '0%'
      }
    ];
    this.state = {
      moment: null
    };
  }

  onChange = (e) => {
    if (e.mode === 'onComplete' && e.index === 6) {
      setTimeout(() => {
        this.setState({moment: 0});
      }, 0);
    } else {
      this.setState({moment: null});
    }
  }

  render() {
    return (<TweenOne
      animation={this.animation}
      paused={this.props.paused}
      onChange={this.onChange}
      moment={this.state.moment}
      style={{
      transform: 'scale(1)'
    }}
      className="code-box-shape"/>);
  }
}
Box4.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool
};

class Box5 extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
      c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
      v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
      s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
      s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
    this.animation = {
      path: this.path,
      repeat: -1,
      duration: 5000,
      ease: 'linear'
    };
    this.state = {
      moment: null,
      paused: true,
      reverse: false
    };
  }

  onPause = () => {
    this.setState({paused: true, moment: null});
  }

  onReverse = () => {
    this.setState({paused: false, reverse: true, moment: null});
  }

  onRestart = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0
    }, () => {
      this.setState({moment: null});
    });
  }

  onClick = () => {
    this.setState({paused: false, reverse: false, moment: null});
  }

  render() {
    return (
      <div>

        <div
          style={{
          position: 'relative',
          height: 200,
          width: 200,
          margin: '40px auto'
        }}>
          <TweenOne
            animation={this.animation}
            style={{
            margin: 0,
            width: 10,
            height: 10,
            transform: 'translate(-10px, -10px)'
          }}
            className="code-box-shape2"
            paused={this.state.paused}
            reverse={this.state.reverse}
            moment={this.state.moment}/>
          <svg width="200" height="200">
            <path d={this.path} fill="none" stroke="rgba(1, 155, 240, 0.2)"/>
          </svg>
        </div>

        <div
          className="demo-buttons"
          style={{
          width: 292,
          marginLeft: 0,
          padding: '5px'
        }}>
          <Button type="primary" onClick={this.onClick}>play</Button>
          <Button type="primary" onClick={this.onPause}>pause</Button>
          <Button type="primary" onClick={this.onReverse}>reverse</Button>
          <Button type="primary" onClick={this.onRestart}>restart</Button>
        </div>
      </div>
    );
  }
}
Box5.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
  moment: React.PropTypes.number
};

const ShowHide = React.createClass({
  getInitialState() {
    return {show: true};
  },
  onClick() {
    this.setState({
      show: !this.state.show
    });
  },
  render() {
    return (
      <div className="queue-demo2">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Show/Hide</Button>
        </p>
        <QueueAnim className="demo-content">
          {this.state.show
            ? [< div className = "demo-thead" key = "a" > <ul>
              <li/>
              <li/>
              <li/>
            </ul> </div>,
            <div className="demo-tbody" key="b">
              <ul>
                <li></li > <li></li> < li > </li> </ul>
            </div >]
            : null}
        </QueueAnim>
      </div>
    );
  }
});


const AddDelete = React.createClass({
  getInitialState() {
    return {
      show: true,
      items: [
        <li key="0"></li>,
        <li key="1"></li>,
        <li key="2"></li>
      ],
    };
  },
  onClick() {
    this.setState({
      show: !this.state.show,
    });
  },
  onAdd() {
    let items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  },
  onRemove() {
    let items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  },
  render() {
    return (
      <div className="queue-demo2">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Show/ Hide All</Button>
          <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>Add </Button>
          <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>Delete</Button>
        </p>
        <div className="demo-content">
          <div className="demo-thead" key="a">
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="demo-tbody" key="b">
            <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
              {this.state.show ? this.state.items : null}
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
});


const PageLoadAnim = React.createClass({
  getInitialState() {
    return {
      show: true
    };
  },
  onClick() {
    this.setState({
      show: !this.state.show
    });
  },
  render() {
    return (
      <div className="queue-demo2">
        <p className="buttons" style={{ marginBottom: 20 }}>
          <Button type="primary" onClick={this.onClick}>Load/Unload</Button>
        </p>
        <QueueAnim type={['right', 'left']} className="demo-content">
        {this.state.show ? [
          <div className="demo-header" key="header">
            <div className="logo">
            </div>
            <ul>
              <li key="0"></li>
              <li key="1"></li>
              <li key="2"></li>
            </ul>
          </div>,
          <div className="demo-banner" key="banner">
            <div className="point">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>,
          <QueueAnim className="demo-page" key="page" type="bottom">
            <h1 key="h1"/>
            <p key="p"/>
            <div key="box" className="box">
             <QueueAnim type="bottom" component="ul">
               <li key="0"/>
               <li key="1"/>
               <li key="2"/>
             </QueueAnim>
            </div>
          </QueueAnim>,
          <div className="demo-footer" key="footer" />,
        ] : null}
        </QueueAnim>
      </div>
    );
  }
});


class ScroolAnim extends React.Component {
  render() {
    return (
      <OverPack style={{ overflow: 'hidden', height: 200 }} 
        hideProps={{ 0: { reverse: true } }}
      >
        <TweenOne key="0" animation={{ opacity: 1 }}
          className="code-box-shape"
          style={{ opacity: 0, marginBottom: 10 }}
        />
        <QueueAnim key="queue"
          leaveReverse
          style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
        >
          <div key="a" className="code-box-shape queue-anim-demo" />
          <div key="b" className="code-box-shape queue-anim-demo" />
          <div key="c" className="code-box-shape queue-anim-demo" />
          <div key="d" className="code-box-shape queue-anim-demo" />
          <div key="e" className="code-box-shape queue-anim-demo" />
          <div key="f" className="code-box-shape queue-anim-demo" />
        </QueueAnim>
      </OverPack>
    );
  }
}


const BasicAnim = () => <div className='code-box'>

  <Row gutter={16}>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Basic Form Animation'>
        <FormAnim/>

      </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Box Animations'>
        <Box/>
        <Box3/>
        <Box4/>
        <Box5/>
      </Card>
    </Col>
  </Row>
  <div className='code-box-demo'>
    <Row gutter={16}>
      <Col xs={24} sm={24} md={12} lg={12}>
        <Card title='List'>
          <ShowHide/>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12}>
        <Card title='Advanced List Add Delete'>
          <AddDelete/>
        </Card>
      </Col>
    </Row>
     <Row gutter={16}>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Card title='Page Load Animation'>
          <PageLoadAnim/>
        </Card>
      </Col>
     
    </Row>
  </div>
</div>

export default BasicAnim