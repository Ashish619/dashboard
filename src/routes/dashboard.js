import React, { PropTypes } from 'react'
import Promise from 'promise-polyfill';
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import ChartComposed from '../components/dashboard/composedChart'
import styles from './dashboard.less'
import { color } from '../utils'
import { getTotalCount, getCount } from '../services/dashboard.js'


const bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff'
    }
}



const Dashboard = React.createClass({


    getInitialState() {

        return {
            loading: true,
            totalVisitors: 0,
            exitIntentCount: 0,
            leadsGenerated: 0,
            roiChange: 0,
            graphData: []
        }
    },

    componentWillMount() {


        Promise.all([
            getCount(9, 'visitors', 'day'),
            getCount(9, 'popups', 'day'),
            getCount(9, 'leads', 'day'),
            getTotalCount(9, 'visitors'),
            getTotalCount(9, 'popups'),
            getTotalCount(9, 'leads')


        ]).then(values => {

            let graphDataFormat = {
                "visitors": 0,
                "exitIntents": 0,
                "leadsGenerated": 0,
                "name": ""

            }
            let graphData = [];
            for (var i = 0; i < values[0].length; i++) {
                graphDataFormat.visitors = Number(values[0][i]['visits']);
                graphDataFormat.exitIntents = Number(values[1][i]['visits']);
                graphDataFormat.leadsGenerated = Number(values[2][i]['visits']);
                graphDataFormat.name = 'day ' + values[0][i]['day'];
                graphData.push(Object.assign({}, graphDataFormat));
            }

            console.log(graphData);

            this.setState({
                totalVisitors: values[3],
                exitIntentCount: values[4],
                leadsGenerated: values[5],
                roiChange: 0,
                graphData: graphData,
                loading: false
            });
        });

    },

    getGraphRerender(){


    },

    render() {
        let numbers = [
            {
                icon: 'user',
                color: color.green,
                title: 'Total Visitors',
                number: this.state.totalVisitors
            }, {
                icon: 'logout',
                color: color.blue,
                title: 'Exit Intent Count',
                number: this.state.exitIntentCount
            }, {
                icon: 'bar-chart',
                color: color.purple,
                title: 'Leads Generated',
                number: this.state.leadsGenerated
            }, {
                icon: 'line-chart',
                color: color.red,
                title: 'ROI Change %',
                number: this.state.roiChange
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
                            <ChartComposed data={this.state.graphData} loading={this.state.loading} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
});

export default Dashboard
