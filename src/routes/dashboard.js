import React, { PropTypes } from 'react'
import Promise from 'promise-polyfill';
import { connect } from 'dva'
import {
    Row, Col, Card, Radio,
    Input
} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import ChartComposed from '../components/dashboard/composedChart'
import VerticalBarChart from '../components/dashboard/verticalBarChart'
import InterestChart from '../components/dashboard/interestChart'
import styles from './dashboard.less'
import { color } from '../utils'
import { getTotalCount, getCount, getWorldChartData, getDeviceData, getInterestData } from '../services/dashboard.js'
import ReactEcharts from 'echarts-for-react';
import WorldChart from '../components/chart/g2charts/worldChart'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff'
    }
}

const Dashboard = React.createClass({

    getInitialState() {
   
        var item = sessionStorage.getItem('campaignID');
        if (item == null || item == '') {

            var url = location.href.split('//');
            var protocol = url[0];
            var domain = url[1].split('/')[0];
            window.open(protocol + '//' + domain + '/login/', '_self');

        }
        return {
            loading: true,
            totalVisitors: 0,
            exitIntentCount: 0,
            leadsGenerated: 0,
            roiChange: 0,
            graphData: [],
            graphPeriod: 'day',
            interest: 'totalTimeSpent',
            worldData: [],
            deviceData: [],
            interestData: [],
            campaignID: item
        }
    },


    componentWillMount() {
        Promise.all([
            getCount(this.state.campaignID, 'visitors', this.state.graphPeriod),
            getCount(this.state.campaignID, 'popups', this.state.graphPeriod),
            getCount(this.state.campaignID, 'leads', this.state.graphPeriod),
            getTotalCount(this.state.campaignID, 'visitors'),
            getTotalCount(this.state.campaignID, 'popups'),
            getTotalCount(this.state.campaignID, 'leads'),
            getWorldChartData(this.state.campaignID, 'asc'),
            getDeviceData(this.state.campaignID, 'asc'),
            getInterestData(this.state.campaignID, 'asc', this.state.interest)
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
                graphDataFormat.name = this.state.graphPeriod + values[0][i][this.state.graphPeriod];
                graphData.push(Object.assign({}, graphDataFormat));
            }

            this.setState({
                totalVisitors: values[3],
                exitIntentCount: values[4],
                leadsGenerated: values[5],
                roiChange: 0,
                graphData: graphData,
                worldData: values[6],
                deviceData: values[7],
                interestData: values[8],
                loading: false
            });
        });

    },

    onChange(e) {

        this.setState({ graphPeriod: e.target.value, loading: true });
        let graphData = [];
        Promise.all([
            getCount(this.state.campaignID, 'visitors', e.target.value),
            getCount(this.state.campaignID, 'popups', e.target.value),
            getCount(this.state.campaignID, 'leads', e.target.value),

        ]).then(values => {
            let graphDataFormat = {
                "visitors": 0,
                "exitIntents": 0,
                "leadsGenerated": 0,
                "name": ""
            }


            for (var i = 0; i < values[0].length; i++) {
                graphDataFormat.visitors = Number(values[0][i]['visits']);
                graphDataFormat.exitIntents = Number(values[1][i]['visits']);
                graphDataFormat.leadsGenerated = Number(values[2][i]['visits']);
                graphDataFormat.name = e.target.value + values[0][i][e.target.value];
                graphData.push(Object.assign({}, graphDataFormat));
            }

            this.setState({
                graphData: graphData,
                loading: false
            });
        });

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
                    <Col lg={16} md={24}>
                        <Card title="Analytics Report"
                            bordered={false}
                            bodyStyle={{
                            }}>
                            <div style={{ display: 'inline-block' }}>
                                <RadioGroup onChange={this.onChange} value={this.state.graphPeriod}>
                                    <Radio value={'day'}>Day</Radio>
                                    <Radio value={'week'}>Week</Radio>
                                </RadioGroup></div>
                            <ChartComposed data={this.state.graphData} loading={this.state.loading} />
                        </Card>
                    </Col>
                    <Col lg={8} md={24}>
                        <Card title="Device Report"
                            bordered={false}
                            bodyStyle={{

                            }}>
                            <VerticalBarChart data={this.state.deviceData} loading={this.state.loading} />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col lg={8} md={24}>
                        <Card title="Interest Report"
                            bordered={false}
                            bodyStyle={{

                            }}>
                            <InterestChart data={this.state.interestData} name={this.state.interest} loading={this.state.loading} />
                        </Card>
                    </Col>
                    <Col lg={16} md={24}>
                        <Card title="World Report">
                            <WorldChart worldData={this.state.worldData} loading={this.state.loading} />
                        </Card>
                    </Col>
                </Row>
            </div>
        );

    }
});

export default Dashboard
