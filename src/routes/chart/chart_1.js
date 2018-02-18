import React from 'react'
import SimpleLineChart from '../../components/chart/line-chart'
import CustomShapeBarChart from '../../components/chart/bar-chart'
import SimpleAreaChart from '../../components/chart/area-chart'
import AreaChart from '../../components/chart/recharts/areaChart'
import BarChart from '../../components/chart/recharts/barChart'
import LineChart from '../../components/chart/recharts/lineChart'
import MixChart from '../../components/chart/recharts/mixChart'
import PieChart from '../../components/chart/recharts/pieChart'
import RadarChart from '../../components/chart/recharts/radarChart'





import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon
} from 'antd'

const chartPage = () => <div>
<Row gutter={15}>
<Col xs={24} sm={24} md={12} lg={12}>
    <Card>
        <AreaChart/>
    </Card>
</Col>
<Col xs={24} sm={24} md={12} lg={12}>
<Card>
    <BarChart/>
</Card>
</Col>
</Row>


    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <SimpleLineChart/>
            </Card>
        </Col>
    </Row>
    <Row>
    
    <Col xs={24} sm={24} md={24} lg={24}>
    <Card>
        <MixChart/>
    </Card>
    </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <CustomShapeBarChart/>
            </Card>
        </Col>
    </Row>
    <Row gutter={15}>
    <Col xs={24} sm={24} md={12} lg={12}>
        <Card>
            <PieChart/>
        </Card>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12}>
    <Card>
        <RadarChart/>
    </Card>
    </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <SimpleAreaChart/>
            </Card>
        </Col>
    </Row>

    
</div>
export default chartPage