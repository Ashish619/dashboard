import React from 'react'
import {Row, Col, Icon, Card} from 'antd'
import BannerAnim, {Element} from 'rc-banner-anim';
import TweenOne, {TweenOneGroup} from 'rc-tween-one';
import styles from "./advancedAnimation.less"
const BgElement = Element.BgElement;

class BasicSlider extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
            background: '#364D79'
          }}/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}>
            Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
            background: '#64CBCC'
          }}/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}>
            Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}

const {Arrow, Thumb} = BannerAnim;
class CustomSlider extends React.Component {
  constructor() {
    super(...arguments);
    this.imgArray = ['./assets/slider/1.jpg', './assets/slider/2.jpg'];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave'
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({intShow: int});
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({prevEnter: true});
  }

  prevLeave() {
    this.setState({prevEnter: false});
  }

  nextEnter() {
    this.setState({nextEnter: true});
  }

  nextLeave() {
    this.setState({nextEnter: false});
  }

  onMouseEnter() {
    this.setState({thumbEnter: true});
  }

  onMouseLeave() {
    this.setState({thumbEnter: false});
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this
      .imgArray
      .map((img, i) => <span key={i}><i style={{
        backgroundImage: `url(${img})`
      }}/></span>);
    return (
      <BannerAnim
        onChange={this.onChange}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        prefixCls="custom-arrow-thumb">
        <Element key="aaa" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
            backgroundImage: `url(${this.imgArray[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}>
            Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
            backgroundImage: `url(${this.imgArray[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}>
            Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Arrow
          arrowType="prev"
          key="prev"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{
          left: this.state.prevEnter
            ? 0
            : -120
        }}>
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{
            opacity: 0,
            type: 'from'
          }}
            leave={{
            opacity: 0
          }}
            appear={false}
            className="img-wrapper"
            component="ul">
            <li
              style={{
              backgroundImage: `url(${this.imgArray[intArray[0]]})`
            }}
              key={intArray[0]}/>
          </TweenOneGroup>
        </Arrow>
        <Arrow
          arrowType="next"
          key="next"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{
          right: this.state.nextEnter
            ? 0
            : -120
        }}>
          <div className="arrow"></div>
          <TweenOneGroup
            enter={{
            opacity: 0,
            type: 'from'
          }}
            leave={{
            opacity: 0
          }}
            appear={false}
            className="img-wrapper"
            component="ul">
            <li
              style={{
              backgroundImage: `url(${this.imgArray[intArray[1]]})`
            }}
              key={intArray[1]}/>
          </TweenOneGroup>
        </Arrow>
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{
          bottom: this.state.thumbEnter
            ? 0
            : -70
        }}>
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    );
  }
}

class MuoseSwingSlider extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user">
        <Element
          key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
          delay: 1000,
          data: [
            {
              id: 'bg',
              value: 20,
              bgPosition: '50%',
              type: ['backgroundPositionX']
            }, {
              id: 'title',
              value: 50,
              type: 'x'
            }, {
              id: 'content',
              value: -30,
              type: 'x'
            }
          ]
        }}>
          <BgElement
            key="bg"
            className="bg"
            style={{
            background: '#364D79'
          }}
            id="bg"/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}
            id="title">
             Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}
            id="content">
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
            background: '#64CBCC'
          }}/>
          <TweenOne
            className="banner-user-title"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from'
          }}>
             Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{
            y: 30,
            opacity: 0,
            type: 'from',
            delay: 100
          }}>
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
const AdvancedAnim = () => <div className='code-box'>

  <Row gutter={16}>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Basic Slider'>
        <BasicSlider/>

      </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Customize left and right arrow thumbnails'>
        <CustomSlider/>
      </Card>
    </Col>
  </Row>

  <Row gutter={16}>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Swing with the mouse'>
        <MuoseSwingSlider/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Card title='Coming soon'> Coming soon</Card>
     
    </Col>
  </Row>
</div>

export default AdvancedAnim