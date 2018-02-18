import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import ChartComposed from '../components/dashboard/composedChart'
import styles from './dashboard.less'
import { color } from '../utils'

const bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff'
    }
}

const Dashboard = React.createClass({
    render() {
        let numbers = [
            {
                icon: 'user',
                color: color.green,
                title: 'Total Visitors',
                number: 2781
            }, {
                icon: 'logout',
                color: color.blue,
                title: 'Exit Intent Count',
                number: 3241
            }, {
                icon: 'bar-chart',
                color: color.purple,
                title: 'Leads Generated',
                number: 253
            }, {
                icon: 'line-chart',
                color: color.red,
                title: 'ROI Change %',
                number: 4324
            }
        ];

        let graphOfData = [
            {
                "Visitor": 222,
                "Exit Intents": 233,
                "Leads Generated": 334,
                "name": "week"

            },
            {
                "Visitor": 255,
                "Exit Intents": 233,
                "Leads Generated": 334,
                "name": "week"

            },
            {
                "Visitor": 222,
                "Exit Intents": 66,
                "Leads Generated": 334,
                "name": "week"

            },
            {
                "Visitor": 222,
                "Exit Intents": 233,
                "Leads Generated": 333,
                "name": "week"

            },
            {
                "Visitor": 222,
                "Exit Intents": 233,
                "Leads Generated": 334,
                "name": "week"

            }
        ];
        const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
            <NumberCard {...item} />
        </Col>)
        return (
            <div className="dashboard-1">
                <Row gutter={24}>
                    {numberCards}
                    <Col lg={18} md={24}>
                        <Card
                            bordered={false}
                            bodyStyle={{
                              
                            }}>
                            <ChartComposed data={graphOfData} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
});



export default Dashboard
