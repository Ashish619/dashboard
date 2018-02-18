import React from 'react'

import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon,
    Slider,
    Switch,
    InputNumber
} from 'antd'

function formatter(value) {
    return `${value}%`;
}
const marks = {
    0: '0°C',
    26: '26°C',
    67: '67°C',
    100: {
        style: {
            color: '#f50'
        },
        label: <strong>100°C</strong>
    }
};
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70
};

const marks1 = {
    0: '0°C',
    26: '26°C',
    67: '67°C',
    100: {
        style: {
            color: '#f50'
        },
        label: <strong>100°C</strong>
    }
};
class Demo extends React.Component {
    state = {
        disabled: false
    };
    handleDisabledChange = (disabled) => {
        this.setState({disabled});
    }
    render() {
        const {disabled} = this.state;
        return (
            <div>
                <Slider defaultValue={30} disabled={disabled}/>
                <Slider range defaultValue={[20, 50]} disabled={disabled}/>
                Disabled:
                <Switch size="small" checked={disabled} onChange={this.handleDisabledChange}/>
            </div>
        );
    }
}
const IntegerStep = React.createClass({
    getInitialState() {
        return {inputValue: 1};
    },
    onChange(value) {
        this.setState({inputValue: value});
    },
    render() {
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={this.state.inputValue}/>
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{
                        marginLeft: 16
                    }}
                        value={this.state.inputValue}
                        onChange={this.onChange}/>
                </Col>
            </Row>
        );
    }
});

const DecimalStep = React.createClass({
    getInitialState() {
        return {inputValue: 0};
    },
    onChange(value) {
        this.setState({inputValue: value});
    },
    render() {
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={this.state.inputValue}
                        step={0.01}/>
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={1}
                        style={{
                        marginLeft: 16
                    }}
                        step={0.01}
                        value={this.state.inputValue}
                        onChange={this.onChange}/>
                </Col>
            </Row>
        );
    }
});
const rangePage = () =>< div > <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
        <Card title='Basic Range Slider'>
            <Demo/>
        </Card>
        <Card title='Inputable Range Slider'>
            <div>
                <div>
                    <IntegerStep/>
                    <DecimalStep/>
                </div>
            </div>
        </Card>
        <Card title='Vertical Range Slider'>
            <div style={{
                height: 300
            }}>
                <div style={style}>
                    <Slider vertical defaultValue={30}/>
                </div>
                <div style={style}>
                    <Slider vertical range step={10} defaultValue={[20, 50]}/>
                </div>
                <div style={style}>
                    <Slider vertical range marks={marks} defaultValue={[26, 67]}/>
                </div>
            </div>
        </Card>

    </Col>
    <Col xs={24} md={12} lg={12}>
        <Card title='Graduated Range Slider'>
            <div>
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={67}/>
                <Slider range marks={marks} defaultValue={[26, 67]}/>

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={67}/>

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={67}/>

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={67}/>
            </div>

        </Card>
        <Card title='Tooltip Formated Range Slider'>
            <div>
                <div>
                    <Slider tipFormatter={formatter}/>
                    <Slider tipFormatter={null}/>
                </div>
            </div>
        </Card>
    </Col>
</Row> </div>
export default rangePage