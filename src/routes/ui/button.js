import React from 'react'
import {Ico} from '../../components/ui'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon
} from 'antd'
import styles from './button.less'
var FontAwesome = require('react-fontawesome');
import {color} from '../../utils'
import SemanticButton from '../../components/semanticui/semantic-button'

const ButtonGroup = Button.Group;

const ButtonPage = () =>< div className = "buttonPage" > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Ant Standart Button'>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </Card>
    <Card title='Ant Icon Button'>
      <div>
        <Button type="warning" shape="circle" icon="caret-right"/>
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search"/>
        <Button icon="search">Search</Button>
        <Button shape="circle" icon="search"/>
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search"/>
        <Button type="dashed" icon="search">Search</Button>

      </div>
    </Card>
    <Card title='Compact Iconed Button'>
      <Button>Hold</Button>
      <Button icon="pause"/>
      <Button icon="pause">Pause</Button>
      <Button className="compact ui button">Hold</Button>
      <Button className="ui compact icon button" icon='pause'></Button>
      <Button className="ui compact labeled icon button"><FontAwesome name='pause icon'/>Pause</Button>
    </Card>
    <Card title='Ant Group Button'>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">OK</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="left"/>Go back
        </Button>
        <Button type="primary">
          Go forward<Icon type="right"/>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="cloud"/>
        <Button type="primary" icon="cloud-download"/>
      </ButtonGroup>
    </Card>
    <Card title='Social Buttons'>
      <Button className='ui facebook button'><FontAwesome name='facebook icon'/>Facebook</Button>
      <Button className='ui twitter button'><FontAwesome name='twitter icon'/>Twitter</Button>
      <Button className='ui google plus button'><FontAwesome name='google plus icon'/>Google +</Button>
      <Button className='ui vk button'><FontAwesome name='vk icon'/>VK</Button>
      <Button className='ui linkedin button'><FontAwesome name='linkedin icon'/>Linked In</Button>
      <Button className='ui instagram button'><FontAwesome name='instagram icon'/>Instagram</Button>
      <Button className='ui youtube button'><FontAwesome name='youtube icon'/>Youtube</Button>

    </Card>
    <Card title='Vertical Buttons'>
      <div className='ui vertical buttons'>
        <Button className='ui mini button'>Mini Button</Button>
        <Button className='ui mini button'>Mini Button</Button>
        <Button className='ui mini button'>Mini Button</Button>
        <Button className='ui mini button'>Mini Button</Button>
      </div>
      <div className="ui vertical labeled icon buttons">
        <Button className='ui mini button'><FontAwesome name='pause icon'/>Pause</Button>
        <Button className='ui mini button'><FontAwesome name='play icon'/>Play</Button>
        <Button className='ui mini button'><FontAwesome name='random icon'/>Shuffle</Button>
        <Button className='ui mini button'><FontAwesome name='eject icon'/>Eject</Button>

      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Colored Button'>
      <SemanticButton type='small red' text="Red"/>
      <SemanticButton type='small orange' text="Orange"/>
      <SemanticButton type='small yellow' text="Yellow"/>
      <SemanticButton type='small olive' text="Olive"/>
      <SemanticButton type='small green' text="Green"/>
      <SemanticButton type='small teal' text="Teal"/>
      <SemanticButton type='small blue' text="Blue"/>
      <SemanticButton type='small violet' text="Violet"/>
      <SemanticButton type='small purple' text="Purple"/>
      <SemanticButton type='small pink' text="Pink"/>
      <SemanticButton type='small brown' text="Brown"/>
      <SemanticButton type='small grey' text="Grey"/>
      <SemanticButton type='small black' text="Black"/>

    </Card>
    <Card title='Basic Button'>
      <Button className='ui mini primary basic button'>Primary</Button>
      <Button className='ui mini secondary basic button'>Secondary</Button>
      <Button className='ui mini positive basic button'>Positive</Button>
      <Button className='ui mini negative basic button'>Negative</Button>

    </Card>
    <Card title='Basic Button'>
      <Button className='ui mini red basic button'>Red</Button>
      <Button className='ui mini orange basic button'>Orange</Button>
      <Button className='ui mini yellow basic button'>Yellow</Button>
      <Button className='ui mini olive basic button'>Olive</Button>
      <Button className='ui mini green basic button'>Green</Button>
      <Button className='ui mini teal basic button'>Teal</Button>
      <Button className='ui mini blue basic button'>Blue</Button>
      <Button className='ui mini violet basic button'>Violet</Button>
      <Button className='ui mini purple basic button'>Purple</Button>
      <Button className='ui mini pink basic button'>Pink</Button>
      <Button className='ui mini brown basic button'>Brown</Button>
      <Button className='ui mini grey basic button'>Grey</Button>
      <Button className='ui mini black basic button'>Black</Button>

    </Card>
    <Card title='Basic Group Button'>
      <div className='ui buttons'>
        <Button className='ui button'>One</Button>
        <Button className='ui button'>Two</Button>
        <Button className='ui button'>Three</Button>
        <Button className='ui button'>Four</Button>

      </div>

    </Card>
    <Card title='Sized Button'>
      <Button className='ui mini button'>Mini Button</Button>
      <Button className='ui tiny button'>Tiny Button</Button>
      <Button className='ui small button'>Small Button</Button>
      <Button className='ui large button'>Large Button</Button>
      <Button className='ui big button'>Big Button</Button>
      <Button className='ui huge button'>Huge Button</Button>
      <Button className='ui massive button'>Massive Button</Button>

    </Card>
  </Col>
</Row> </div>
export default ButtonPage