import React from 'react'
import {Ico} from '../../components/ui'
import {
    Row,
    Col,
    Button,
    Card,
    Icon,
    Switch,
    message
} from 'antd'
import './switch.less'
function onChange(checked) {
    message.success(`switch to ${checked}`);
}

const Test = React.createClass({
    getInitialState() {
        return {disabled: true};
    },
    toggle() {
        this.setState({
            disabled: !this.state.disabled
        });
    },
    render() {
        return (
            <div>
                <Switch disabled={this.state.disabled}/>

                <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
            </div>
        );
    }
});

const switchPage = () => <div>
    <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Basic Switch'>
                <Switch defaultChecked={false} onChange={onChange}/>

            </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Sized Switch'>
                <div>
                    <Switch/>

                    <Switch size="small"/>
                </div>
            </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Labeled Switch'>
                <div>
                    <Switch checkedChildren={'YES'} unCheckedChildren={'NO'}/>

                    <Switch checkedChildren="1" unCheckedChildren="0"/>

                    <Switch
                        checkedChildren={< Icon type = "check" />}
                        unCheckedChildren={< Icon type = "cross" />}/>
                </div>
            </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Disabled Switch'>
                <Test/>
            </Card>
        </Col>
    </Row>
</div>
export default switchPage