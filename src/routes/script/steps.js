import React from 'react'
import {
    Table,
    Row,
    Col,
    Dropdown,
    Card,
    Menu,
    Icon,
    Button,
    message,
    Popover,
    Steps
} from 'antd'

import styles from "./steps.less"

const Step = Steps.Step;

const steps = [
    {
        title: 'First',
        content: 'First-content'
    }, {
        title: 'Second',
        content: 'Second-content'
    }, {
        title: 'Last',
        content: 'Last-content'
    }
];

const customDot = (dot, {status, index}) => (
    <Popover
        content={< span > step {index}
    status : {
        status
    } < /span>}>
        {dot}
    </Popover>
);

class SwitchStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            direction: ""
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title}/>)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>
                <div className="steps-action">
                    {this.state.current < steps.length - 1 && <Button type="primary" onClick={() => this.next()}>Next</Button>
}
                    {this.state.current === steps.length - 1 && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
}
                    {this.state.current > 0 && <Button
                        style={{
                        marginLeft: 8
                    }}
                        onClick={() => this.prev()}>
                        Previous
                    </Button>
}
                </div>
            </div>
        );
    }
}

class StepPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: ""
        };
    }
    /**
   * Calculate & Update state of new dimensions
   */
    updateDimensions() {
        if (window.innerWidth < 500) {
            this.setState({direction: "vertical"});
        } else {
            this.setState({direction: ""});
        }
    }

    /**
   * Add event listener
   */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
   * Remove event listener
   */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render() {
        const {current} = this.state;
        return (
            <div>
                <Row gutter={16} type="flex" justify="top" align="center">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Basic'>
                            <Steps current={1} direction={this.state.direction}>
                                <Step title="Finished" description="This is a description."/>
                                <Step title="In Progress" description="This is a description."/>
                                <Step title="Waiting" description="This is a description."/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Mini version'>
                            <Steps size="small" current={1} direction={this.state.direction}>
                                <Step title="Finished"/>
                                <Step title="In Progress"/>
                                <Step title="Waiting"/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='With icon'>
                            <Steps direction={this.state.direction}>
                                <Step status="finish" title="Login" icon={< Icon type = "user" />}/>
                                <Step status="finish" title="Verification" icon={< Icon type = "solution" />}/>
                                <Step status="process" title="Pay" icon={< Icon type = "credit-card" />}/>
                                <Step status="wait" title="Done" icon={< Icon type = "smile-o" />}/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Switch Step'>
                            <SwitchStep/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="top" align="center">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Vertical'>
                            <Steps direction="vertical" current={1} >
                                <Step title="Finished" description="This is a description."/>
                                <Step title="In Progress" description="This is a description."/>
                                <Step title="Waiting" description="This is a description."/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Error status'>
                            <Steps current={1} status="error" direction={this.state.direction}>
                                <Step title="Finished" description="This is a description"/>
                                <Step title="In Process" description="This is a description"/>
                                <Step title="Waiting" description="This is a description"/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Dot Style'>
                            <Steps progressDot current={1} direction={this.state.direction}>
                                <Step title="Finished" description="This is a description."/>
                                <Step title="In Progress" description="This is a description."/>
                                <Step title="Waiting" description="This is a description."/>
                            </Steps>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Dot Style'>
                            <Steps current={1} progressDot={customDot} direction={this.state.direction}>
                                <Step title="Finished" description="You can hover on the dot."/>
                                <Step title="In Progress" description="You can hover on the dot."/>
                                <Step title="Waiting" description="You can hover on the dot."/>
                                <Step title="Waiting" description="You can hover on the dot."/>
                            </Steps>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default StepPage