import React from 'react'
import AreaChart from '../../components/chart/g2charts/area'
import BarChart from '../../components/chart/g2charts/bar'
import BubbleChart from '../../components/chart/g2charts/bubble'
import ConeChart from '../../components/chart/g2charts/cone'
import LineChart from '../../components/chart/g2charts/line'
import PieChart from '../../components/chart/g2charts/pie'
import PieMapChart from '../../components/chart/g2charts/piemap'
import PolarChart from '../../components/chart/g2charts/polar'
import RadialChart from '../../components/chart/g2charts/radial'
import RoseChart from '../../components/chart/g2charts/rose'
import UsaChart from '../../components/chart/g2charts/usa'
import WorldChart from '../../components/chart/g2charts/world'

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
                <AreaChart/>
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
               <BubbleChart/>
            </Card>
        </Col>
    </Row>
    <Row>
    <Col xs={24} sm={24} md={24} lg={24}>
        <Card>
           <ConeChart/>
        </Card>
    </Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <LineChart/>
    </Card>
</Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <PieChart/>
    </Card>
</Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <PieMapChart/>
    </Card>
</Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <PolarChart/>
    </Card>
</Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <RadialChart/>
    </Card>
</Col>
</Row><Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <RoseChart/>
    </Card>
</Col>
</Row>
<Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <UsaChart/>
    </Card>
</Col>
</Row>
<Row>
<Col xs={24} sm={24} md={24} lg={24}>
    <Card>
       <WorldChart/>
    </Card>
</Col>
</Row>
</div>
export default chartPage