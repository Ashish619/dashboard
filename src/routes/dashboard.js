import React, { PropTypes } from 'react'
import Promise from 'promise-polyfill';
import { connect } from 'dva'
import {
    Row, Col, Card, Radio,
    Input
} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import ChartComposed from '../components/dashboard/composedChart'
import styles from './dashboard.less'
import { color } from '../utils'
import { getTotalCount, getCount } from '../services/dashboard.js'
import ReactEcharts from 'echarts-for-react';

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

        return {
            loading: true,
            totalVisitors: 0,
            exitIntentCount: 0,
            leadsGenerated: 0,
            roiChange: 0,
            graphData: [],
            graphPeriod: 'day'
        }
    },

    componentWillMount() {


        Promise.all([
            getCount(9, 'visitors', this.state.graphPeriod),
            getCount(9, 'popups', this.state.graphPeriod),
            getCount(9, 'leads', this.state.graphPeriod),
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
                graphDataFormat.name = this.state.graphPeriod + values[0][i][this.state.graphPeriod];
                graphData.push(Object.assign({}, graphDataFormat));
            }

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
    getPieChartOtion() {
        const option = {
            backgroundColor: '#403F4C',
            title: {
                text: '',
                subtext: '',
                x: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br />{b} : {c} ({d}%)',
            },
      
            toolbox: {
                show: false,
                feature: {

                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                    },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            color: ['#EAC435', '#345995', '#E40066', '#03CEA4', '#FB4D3D', '#FFF', '#FA7921', '#1B998B'],

            calculable: true,
            series: [
                {
                    name: 'Radius Mode',
                    type: 'pie',
                    radius: [20, 150],
                    center: ['50%', 285],
                    roseType: 'radius',
                    width: '80%',
                    max: 40,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                            },
                            labelLine: {
                                show: true,
                                smooth: 0.9,
                                length: 5,
                                length2: 10,
                            },
                            borderWidth: 0,
                            shadowBlur: 30,
                            shadowOffsetX: 0,
                            shadowOffsetY: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                            labelLine: {
                                show: true,
                            },
                        },
                    },
                    data: [
                        { value: 10, name: 'Mercedes' },
                        { value: 5, name: 'BMW' },
                        { value: 15, name: 'Audi' },
                        { value: 25, name: 'Volvo' },
                        { value: 20, name: 'Subaru' },
                        { value: 35, name: 'Ford' },
                        { value: 30, name: 'Reanult' },
                        { value: 40, name: 'Toyota' },
                    ],
                }

            ],
        };
        return option;
    },

    onChange(e) {

        this.setState({ graphPeriod: e.target.value, loading: true });
        let graphData = [];
        Promise.all([
            getCount(9, 'visitors', e.target.value),
            getCount(9, 'popups', e.target.value),
            getCount(9, 'leads', e.target.value),

        ]).then(values => {
            console.log(values);

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

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };

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
                            <div>
                                <RadioGroup onChange={this.onChange} value={this.state.graphPeriod}>
                                    <Radio style={radioStyle} value={'day'}>Day</Radio>
                                    <Radio style={radioStyle} value={'week'}>Week</Radio>
                                    <Radio style={radioStyle} value={'month'}>Month</Radio>

                                </RadioGroup></div>
                            <ChartComposed data={this.state.graphData} loading={this.state.loading} />
                        </Card>
                    </Col>
                    <Col lg={12} md={24}>
                        <Card
                            bordered={false}
                            bodyStyle={{

                            }}>
                            <ReactEcharts
                                option={this.getPieChartOtion()}
                                style={{
                                    height: '450px',
                                    width: '100%',
                                }}
                                className="react_for_echarts"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
});

export default Dashboard
