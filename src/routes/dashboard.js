import React, { PropTypes } from 'react'
import Promise from 'promise-polyfill';
import { connect } from 'dva'
import {
    Row, Col, Card, Radio,
    Input, Menu, Dropdown, Button, Icon, message
} from 'antd';
import moment from 'moment';
import { DatePicker } from 'antd';
import NumberCard from '../components/dashboard/numberCard'
import ChartComposed from '../components/dashboard/composedChart'
import VerticalBarChart from '../components/dashboard/verticalBarChart'
import InterestChart from '../components/dashboard/interestChart'
import styles from './dashboard.less'
import { color } from '../utils'
import { getTotalCount, getCount, getWorldChartData, getDeviceData, getInterestData } from '../services/dashboard.js'
import ReactEcharts from 'echarts-for-react';
import WorldChart from '../components/chart/g2charts/worldChart'
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
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

            location.href = 'http://www.demandmatrix.com/preview/leadgain/login/#/';

        }
        return {
            loading: true,
            loadingGraph: true,
            lodingPie: true,
            totalVisitors: 0,
            exitIntentCount: 0,
            leadsGenerated: 0,
            roiChange: 0,
            graphData: [],
            graphPeriod: 'day',
            interest: 'totalTimeSpent',
            interest2: 'visitorCount',
            worldData: [],
            deviceData: [],
            interestData: [],
            interestVisitorData: [],
            interestActive: 'totalTimeSpent',
            campaignID: item,
            limit: 7
        }
    },


    componentWillMount() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '-' + dd + '-' + yyyy;


        Promise.all([
            getCount(this.state.campaignID, 'visitors', 'day', today, this.state.limit),
            getCount(this.state.campaignID, 'popups', 'day', today, this.state.limit),
            getCount(this.state.campaignID, 'leads', 'day', today, this.state.limit),
            getTotalCount(this.state.campaignID, 'visitors'),
            getTotalCount(this.state.campaignID, 'popups'),
            getTotalCount(this.state.campaignID, 'leads'),
            getWorldChartData(this.state.campaignID, 'asc'),
            getDeviceData(this.state.campaignID, 'asc'),
            getInterestData(this.state.campaignID, 'asc', this.state.interest),
            getInterestData(this.state.campaignID, 'asc', this.state.interest2)
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
                graphDataFormat.name = moment(values[0][i][this.state.graphPeriod]).format("MMM[,] Do");
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
                interestVisitorData: values[9],
                loadingGraph: false,
                lodingPie: false,
                loading: false
            });
        });

    },


    onChangeInterest() {
        this.setState({ lodingPie: true });
        if (this.state.interestActive == 'totalTimeSpent') {
            this.setState({ interestActive: 'visitCount' })
        } else { this.setState({ interestActive: 'totalTimeSpent' }) }
        this.setState({ lodingPie: false });
    },


    onChangeDate(date, dateString) {

        if (dateString == '' || dateString == null) { return; }
        this.setState({

            loadingGraph: true
        });

        if (this.state.graphPeriod == 'day') {

            Promise.all([
                getCount(this.state.campaignID, 'visitors', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'popups', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'leads', this.state.graphPeriod, dateString, this.state.limit),
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
                    graphDataFormat.name = moment(values[0][i][this.state.graphPeriod]).format("MMM[,] Do");
                    graphData.push(Object.assign({}, graphDataFormat));
                }

                this.setState({
                    graphData: graphData,
                    loadingGraph: false
                });
            });

        }

        if (this.state.graphPeriod == 'week') {
            dateString = dateString.substring(0, dateString.length - 2);
            let year = dateString.split("-")[0];
            let week = dateString.split("-")[1];

            Promise.all([
                getCount(this.state.campaignID, 'visitors', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'popups', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'leads', this.state.graphPeriod, dateString, this.state.limit),
            ]).then(values => {
                let graphDataFormat = {
                    "visitors": 0,
                    "exitIntents": 0,
                    "leadsGenerated": 0,
                    "name": ""
                }
                let graphData = [];
                for (var i = 0; i < values[0].length; i++) {

                    let DateStart = moment().day("Sunday").year(year).week(Number(values[0][i][this.state.graphPeriod])).toDate();
                    let DateEnd = moment().day("Saturday").year(year).week(Number(values[0][i][this.state.graphPeriod])).toDate();
                    DateStart = moment(DateStart).format("MMM[,] Do YYYY");
                    DateEnd = moment(DateEnd).format("MMM[,] Do YYYY");
                    let dateString = DateStart + '-' + DateEnd;
                    graphDataFormat.visitors = Number(values[0][i]['visits']);
                    graphDataFormat.exitIntents = Number(values[1][i]['visits']);
                    graphDataFormat.leadsGenerated = Number(values[2][i]['visits']);

                    graphDataFormat.name = dateString;
                    graphData.push(Object.assign({}, graphDataFormat));
                }

                this.setState({
                    graphData: graphData,
                    loadingGraph: false
                });
            });


        }
        if (this.state.graphPeriod == 'month') {


            Promise.all([
                getCount(this.state.campaignID, 'visitors', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'popups', this.state.graphPeriod, dateString, this.state.limit),
                getCount(this.state.campaignID, 'leads', this.state.graphPeriod, dateString, this.state.limit),
            ]).then(values => {
                let graphDataFormat = {
                    "visitors": 0,
                    "exitIntents": 0,
                    "leadsGenerated": 0,
                    "name": ""
                }
                let graphData = [];
                for (var i = 0; i < values[0].length; i++) {

                    let monthNumber = Number(values[0][i][this.state.graphPeriod]) < 9 ? Number('0' + values[0][i][this.state.graphPeriod]) : Number(values[0][i][this.state.graphPeriod]);

                    graphDataFormat.visitors = Number(values[0][i]['visits']);
                    graphDataFormat.exitIntents = Number(values[1][i]['visits']);
                    graphDataFormat.leadsGenerated = Number(values[2][i]['visits']);

                    graphDataFormat.name = moment(monthNumber, 'MM').format('MMMM');;
                    graphData.push(Object.assign({}, graphDataFormat));
                }

                this.setState({
                    graphData: graphData,
                    loadingGraph: false
                });
            });


        }
    },
    onChange(e) {

        this.setState({ graphPeriod: e.target.value });

    },


    render() {

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            paddingLeft: '20px',
            paddingRight: '20px'
        };
        let menu = (
            <Menu>
                <RadioGroup onChange={this.onChange} value={this.state.graphPeriod}>
                    <Radio value={'day'} style={radioStyle}>Day</Radio>
                    <Radio value={'week'} style={radioStyle}>Week</Radio>
                    <Radio value={'month'} style={radioStyle}>Month</Radio>
                </RadioGroup>
            </Menu>
        );
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
                            }} style={{ height: '496.5px' }} className="pickerContainer">
                            {(this.state.graphPeriod == 'day') ? <LocaleProvider locale={enUS}><DatePicker defaultValue={moment()} onChange={this.onChangeDate} format={'MM-DD-YYYY'} /></LocaleProvider> : null}
                            {(this.state.graphPeriod == 'week') ? <LocaleProvider locale={enUS}><WeekPicker onChange={this.onChangeDate} placeholder="Select week" /></LocaleProvider> : null}
                            {(this.state.graphPeriod == 'month') ? <LocaleProvider locale={enUS}><MonthPicker onChange={this.onChangeDate} placeholder="Select month" /></LocaleProvider> : null}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-input" href="#" style={{
                                    display: 'inline-block',
                                    width: 'auto',
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 0,
                                    position: 'relative',
                                    top: '-1px'


                                }}>
                                    <Icon type="down" />
                                </a>
                            </Dropdown>
                            <ChartComposed data={this.state.graphData} loading={this.state.loadingGraph} />
                        </Card>
                    </Col>
                    <Col lg={8} md={24}>
                        <Card title="Device Report"
                            bordered={false}
                            bodyStyle={{
                            }}  style={{ height: '496.5px' }}>
                          
                            <VerticalBarChart data={this.state.deviceData} loading={this.state.loading} />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col lg={8} md={24}>
                        {this.state.interestActive == 'totalTimeSpent'
                            ? <Card style={{ height: '430px' }}  title="Interest Report"
                                bordered={false}
                                bodyStyle={{
                                }}>
                                <div style={{ display: 'inline-block' }}>
                                    <RadioGroup onChange={this.onChangeInterest} value={this.state.interestActive}>
                                        <Radio value={'totalTimeSpent'}>Total Time Spend</Radio>
                                        <Radio value={'visitCount'}>Visitor Count</Radio>
                                    </RadioGroup></div>
                                <InterestChart data={this.state.interestData} name={this.state.interestActive} loading={this.state.lodingPie} />
                            </Card>
                            : <Card title="Interest Report"
                                bordered={false}
                                bodyStyle={{
                                }} style={{ height: '430px' }} >
                                <div style={{ display: 'inline-block' }}>
                                    <RadioGroup onChange={this.onChangeInterest} value={this.state.interestActive}>
                                        <Radio value={'totalTimeSpent'}>Total Time Spend</Radio>
                                        <Radio value={'visitCount'}>Visitor Count</Radio>
                                    </RadioGroup></div>
                                <InterestChart data={this.state.interestVisitorData} name={'visitCount'} loading={this.state.lodingPie} />
                            </Card>
                        }
                    </Col>
                    <Col lg={16} md={24}>
                        <Card title="World Report"  style={{ height: '430px' }}>
                            <WorldChart worldData={this.state.worldData}  />
                        </Card>
                    </Col>
                </Row>
            </div >
        );

    }
});

export default Dashboard
