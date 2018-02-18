import React from 'react'
import BarChart from '../../components/chart/echarts/barChart_1'
import BarChart2 from '../../components/chart/echarts/barChart_2'
import BarChart3 from '../../components/chart/echarts/barChart_3'
import BarChart4 from '../../components/chart/echarts/barChart_4'

import LineChart1 from '../../components/chart/echarts/lineChart_1'
import LineChart2 from '../../components/chart/echarts/lineChart_2'
import LineChart3 from '../../components/chart/echarts/lineChart_3'
import LineChart4 from '../../components/chart/echarts/lineChart_4'
import PieChart from '../../components/chart/echarts/pieChart_1'
import PieChart2 from '../../components/chart/echarts/pieChart_2'
import FunnelChart from '../../components/chart/echarts/funnelChart'

import RadarChart1 from '../../components/chart/echarts/radarChart_1'
import RadarChart2 from '../../components/chart/echarts/radarChart_2'
import MapChart from '../../components/chart/echarts/usaMap'
import PolarChart from '../../components/chart/echarts/polarChart'
import AreaChart from '../../components/chart/echarts/areaChart'
import PictorialChart from '../../components/chart/echarts/pictorialChart'
import CalendarChart from '../../components/chart/echarts/calendarChart'
import PolarChart2 from '../../components/chart/echarts/polarChart_1'

import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon
} from 'antd'

const chartPage = () => <div>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <PictorialChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <CalendarChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <BarChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <AreaChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <LineChart1/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <LineChart2/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <LineChart3/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <LineChart4/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <PieChart/>
            </Card>
        </Col>
    </Row>
    <Row gutter={15}>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <RadarChart1/>
            </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <RadarChart2/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <MapChart/>
            </Card>
        </Col>
    </Row>
    <Row gutter={15}>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <PolarChart/>
            </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <PieChart2/>
            </Card>
        </Col>
    </Row>

    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <BarChart2/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <BarChart3/>
            </Card>
        </Col>
    </Row>

    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <BarChart4/>
            </Card>
        </Col>
    </Row>

    <Row gutter={15}>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <PolarChart2/>
            </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card>
                <FunnelChart/>
            </Card>
        </Col>
    </Row>
</div>
export default chartPage