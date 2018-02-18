import React from 'react'
import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon,
    Radio,
    Input
} from 'antd'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}
const App = React.createClass({
    getInitialState() {
        return {value: 1};
    },
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    },
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </RadioGroup>
        );
    }
});
const App1 = React.createClass({
    getInitialState() {
        return {value: 1};
    },
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    },
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>Option A</Radio>
                <Radio style={radioStyle} value={2}>Option B</Radio>
                <Radio style={radioStyle} value={3}>Option C</Radio>
                <Radio style={radioStyle} value={4}>
                    More... {this.state.value === 4
                        ? <Input
                                style={{
                                width: 100,
                                marginLeft: 10
                            }}/>
                        : null}
                </Radio>
            </RadioGroup>
        );
    }
});
const App2 = React.createClass({
    getInitialState() {
        return {disabled: true};
    },
    toggleDisabled() {
        this.setState({
            disabled: !this.state.disabled
        });
    },
    render() {
        return (
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                <br/>
                <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                <div style={{
                    marginTop: 20
                }}>
                    <Button type="primary" onClick={this.toggleDisabled}>
                        Toggle disabled
                    </Button>
                </div>
            </div>
        );
    }
});
const radioPage = () =>< div > <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
        <Card title='Basic Radio'>
            <Radio>Radio</Radio>

        </Card>
        <Card title='Disabled Radio'>
            <App2/>

        </Card>
        <Card title='Horizontal RadioGroup'>
            <App/>

        </Card>
        <Card title='Vertical RadioGroup'>
            <App1/>
        </Card>
    </Col>
    <Col xs={24} md={12} lg={12}>
        <Card title='Styled RadioGroup'>
            <div>
                <div>
                    <RadioGroup onChange={onChange} defaultValue="a">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b">De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{
                    marginTop: 16
                }}>
                    <RadioGroup onChange={onChange} defaultValue="a">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b" disabled>De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{
                    marginTop: 16
                }}>
                    <RadioGroup disabled onChange={onChange} defaultValue="a">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b">De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
            </div>

        </Card>
        <Card title='Sized RadioGroup'>
            <div>
                <div>
                    <RadioGroup defaultValue="a" size="large">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b">De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{
                    marginTop: 16
                }}>
                    <RadioGroup defaultValue="a">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b">De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{
                    marginTop: 16
                }}>
                    <RadioGroup defaultValue="a" size="small">
                        <RadioButton value="a">En</RadioButton>
                        <RadioButton value="b">De</RadioButton>
                        <RadioButton value="c">Us</RadioButton>
                        <RadioButton value="d">Ch</RadioButton>
                    </RadioGroup>
                </div>
            </div>
        </Card>

    </Col>
</Row> 


</div>
export default radioPage