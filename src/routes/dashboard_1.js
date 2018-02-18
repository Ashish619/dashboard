import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Row, Col, Card, Carousel} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import NumberCardLines from '../components/dashboard/numberCard_lines'
import Quote from '../components/dashboard/quote'
import RecentSales from '../components/dashboard/recentSales'
import Todo from '../components/dashboard/todo'
import styles from './dashboard.less'
import {color} from '../utils'
import SemanticFeed from '../components/semanticui/semantic-feed'
import SemanticItem from '../components/semanticui/semantic-item'
import SemanticButton from '../components/semanticui/semantic-button'


const bodyStyle = {
  bodyStyle: {
    minHeight: 510,
    background: '#fff'
  }
}
const cardStyle = {

   bodyStyle: {
    minHeight: 120,
    background: '#fff'
  }
}

function Dashboard({dashboard, dispatch}) {
  const {
    quote_2,
    quote_3,
    numbers_2,
    numbers_3,    
    recentSales_2,
    recentSales_3,
    todo,
    numbers
  } = dashboard
  const numberCards = numbers_2.map((item, key) => <Col key={key} lg={8} md={12}>
    <NumberCard {...item}/>
  </Col>)

  const numberCardsLines = numbers_3.map((item, key) =>
  <Col key={key} lg={6} sm={12}>
    <NumberCardLines {...item} />
  </Col>
  )
  return (
    <div className="dashboard-2">
      <Row gutter={24}>
        {numberCards}
        {numberCardsLines}
        <Col lg={6} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className={styles.quote}
                bodyStyle={{
                padding: 0,
                height: 204
              }}>
                <Quote {...quote_2}/>
              </Card>
            </Col>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className={styles.weather}
                bodyStyle={{
                padding: 0,
                height: 204
              }}>
                <Quote {...quote_3}/>
              </Card>
            </Col>

          </Row>
        </Col>
        <Col lg={18} md={24}>
          <Card
            bordered={false}
            className={styles.imageWrap}
            bodyStyle={{
            padding: '24px 36px 24px 0',
            height: 432,
            background: 'url(./assets/2.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className={styles.parapgraph}>
              <div><img className={styles.avatar} src='./assets/people/14.jpg'/>
                An Ox came down to a reedy pool to drink. As he splashed heavily into the water,
                he crushed a young Frog into the mud.</div>
              <h1>Airtport Hotels The Right Way To Start A Short Break Holiday</h1>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={12} md={24}>
          <Card {...cardStyle}>
            <RecentSales data={recentSales_2}/>
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card {...cardStyle}>
            <RecentSales data={recentSales_3}/>
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <h2>TODO LIST</h2>
            <Todo data={todo}/>
            <SemanticButton type='fluid basic' text="SEE ALL"/>

          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <h5>LATEST ACTIONS</h5>
            <SemanticFeed/>
            <SemanticButton type='fluid basic' text="SEE ALL"/>

          </Card>
        </Col>
        <Col lg={8} md={24}>

          <Card
            bordered={false}
            bodyStyle={{
            ...bodyStyle.bodyStyle,
            padding: 20
          }}>
            <h5>FEEDS</h5>
            <SemanticItem/>
            <SemanticButton type='fluid basic' text="SEE ALL"/>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Dashboard.propTypes = {
  quote_2: PropTypes.object,
  quote_3: PropTypes.object,
  numbers_2: PropTypes.array,
  numbers_3: PropTypes.array,
  recentSales_2: PropTypes.array,
  recentSales_3: PropTypes.array,
  todo: PropTypes.object
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
