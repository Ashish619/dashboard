import React from 'react'
import {
    Form,
    Input,
    Select,
    DatePicker,
    Row,
    Col,
    Switch,
    Upload,
    Card,
    Slider,
    Radio,
    LocaleProvider,
    Icon,
    message,
    InputNumber,
    Button
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}

const ValidateForm = Form.create()(React.createClass({
    componentDidMount() {
        // To disabled submit button at the beginning.
        this
            .props
            .form
            .validateFields();
    },
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    message.success('Received values of form:' + JSON.stringify(values));
                }
            });
    },
    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (

            <LocaleProvider locale={enUS}>
                <Form >
                    <FormItem 
                        label="Fail"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets">
                        <Input placeholder="unavailable choice" id="error"/>
                    </FormItem>

                    <FormItem
                        label="Warning"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        validateStatus="warning">
                        <Input placeholder="Warning" id="warning"/>
                    </FormItem>

                    <FormItem
                        label="Validating"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        hasFeedback
                        validateStatus="validating"
                        help="The information is being validated...">
                        <Input placeholder="I'm the content is being validated" id="validating"/>
                    </FormItem>

                    <FormItem
                        label="Success"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        hasFeedback
                        validateStatus="success">
                        <Input placeholder="I'm the content" id="success"/>
                    </FormItem>

                    <FormItem
                        label="Warning"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        hasFeedback
                        validateStatus="warning">
                        <Input placeholder="Warning" id="warning"/>
                    </FormItem>

                    <FormItem
                        label="Fail"
                        labelCol={{
                        span: 5
                    }}
                        wrapperCol={{
                        span: 19
                    }}
                        hasFeedback
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets">
                        <Input placeholder="unavailable choice" id="error"/>
                    </FormItem>

              
                </Form>
            </LocaleProvider>

        );
    }
}));

const AdvancedForm2 = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    message.success('Received values of form:' + JSON.stringify(values));
                }
            });
    },

    normFile(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    },

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="Nation">
                    <span className="ant-form-text">U.S.A</span>
                </FormItem>
                <FormItem {...formItemLayout} label="Select" hasFeedback>
                    {getFieldDecorator('select', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select your country!'
                            }
                        ]
                    })(
                        <Select placeholder="Please select a country">
                            <Option value="turkey">Turkey</Option>
                            <Option value="use">U.S.A</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="Select[multiple]">
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select your favourite colors!',
                                type: 'array'
                            }
                        ]
                    })(
                        <Select multiple placeholder="Please select favourite colors">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="InputNumber">
                    {getFieldDecorator('input-number', {initialValue: 3})(<InputNumber min={1} max={10}/>)}
                    <span className="ant-form-text">
                        machines</span>
                </FormItem>

                <FormItem {...formItemLayout} label="Switch">
                    {getFieldDecorator('switch', {valuePropName: 'checked'})(<Switch/>)}
                </FormItem>

                <FormItem {...formItemLayout} label="Slider">
                    {getFieldDecorator('slider')(<Slider
                        marks={{
                        0: 'A',
                        20: 'B',
                        40: 'C',
                        60: 'D',
                        80: 'E',
                        100: 'F'
                    }}/>)}
                </FormItem>

                <FormItem {...formItemLayout} label="Radio.Group">
                    {getFieldDecorator('radio-group')(
                        <RadioGroup>
                            <Radio value="a">item 1</Radio>
                            <Radio value="b">item 2</Radio>
                            <Radio value="c">item 3</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="Radio.Button">
                    {getFieldDecorator('radio-button')(
                        <RadioGroup>
                            <RadioButton value="a">1</RadioButton>
                            <RadioButton value="b">2</RadioButton>
                            <RadioButton value="c">3</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Upload"
                    extra="longggggggg">
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        normalize: this.normFile
                    })(
                        <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture"
                            onChange={this.handleUpload}>
                            <Button>
                                <Icon type="upload"/>
                                Click to upload
                            </Button>
                        </Upload>
                    )}
                </FormItem>

                <FormItem
                    wrapperCol={{
                    span: 19,
                    offset: 6
                }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}));

const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: {
                ...props.username,
                value: props
                    .username
                    .value
                    .toUpperCase()
            }
        };
    },
    onValuesChange(_, values) {
        //console.log(values);
    }
})((props) => {
    const {getFieldDecorator} = props.form;
    return (
        <Form inline>
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: 'Username is required!'
                        }
                    ]
                })(<Input/>)}
            </FormItem>
        </Form>
    );
});

const MainCustomizedForm = React.createClass({
    getInitialState() {
        return {
            fields: {
                username: {
                    value: 'John'
                }
            }
        };
    },
    handleFormChange(changedFields) {
        this.setState({
            fields: {
                ...this.state.fields,
                ...changedFields
            }
        });
    },
    render() {
        const fields = this.state.fields;
        return (
            <div>
                <CustomizedForm {...fields} onChange={this.handleFormChange}/>
                <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
            </div>
        );
    }
});

const PriceInput = React.createClass({
    getInitialState() {
        const value = this.props.value || {};
        return {
            number: value.number || 0,
            currency: value.currency || 'euro'
        };
    },
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    },
    handleNumberChange(e) {
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({number});
        }
        this.triggerChange({number});
    },
    handleCurrencyChange(currency) {
        if (!('value' in this.props)) {
            this.setState({currency});
        }
        this.triggerChange({currency});
    },
    triggerChange(changedValue) {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    },
    render() {
        const {size} = this.props;
        const state = this.state;
        return (
            <span>
                <Input
                    type="text"
                    size={size}
                    value={state.number}
                    onChange={this.handleNumberChange}
                    style={{
                    width: '65%',
                    marginRight: '3%'
                }}/>
                <Select
                    value={state.currency}
                    size={size}
                    style={{
                    width: '32%'
                }}
                    onChange={this.handleCurrencyChange}>
                    <Option value="euro">Euro</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
            </span>
        );
    }
});

const MainPriceInput = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    message.success('Received values of form:' + JSON.stringify(values));
                }
            });
    },
    checkPrice(rule, value, callback) {
        if (value.number > 0) {
            callback();
            return;
        }
        callback('Price must greater than zero!');
    },
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormItem label="Price">
                    {getFieldDecorator('price', {
                        initialValue: {
                            number: 0,
                            currency: 'euro'
                        },
                        rules: [
                            {
                                validator: this.checkPrice
                            }
                        ]
                    })(<PriceInput/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}));

const CoordinatedControls = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    message.success('Received values of form:' + JSON.stringify(values));
                }
            });
    },
    handleSelectChange(value) {
        //console.log(value);
        this
            .props
            .form
            .setFieldsValue({
                note: `Hi, ${value === 'male'
                    ? 'man'
                    : 'lady'}!`
            });
    },
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="Note"
                    labelCol={{
                    span: 8
                }}
                    wrapperCol={{
                    span: 16
                }}>
                    {getFieldDecorator('note', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your note!'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem
                    label="Gender"
                    labelCol={{
                    span: 8
                }}
                    wrapperCol={{
                    span: 16
                }}>
                    {getFieldDecorator('gender', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select your gender!'
                            }
                        ],
                        onChange: this.handleSelectChange
                    })(
                        <Select placeholder="Select a option and change input text above">
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{
                    span: 8,
                    offset: 4
                }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}));

class FormLayoutDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal'
        };
    }
    handleFormLayoutChange = (e) => {
        this.setState({formLayout: e.target.value});
    }
    render() {
        const {formLayout} = this.state;
        const formItemLayout = formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4
                },
                wrapperCol: {
                    span: 14
                }
            }
            : null;
        const buttonItemLayout = formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4
                }
            }
            : null;
        const layoutProps = {
            [formLayout]: true
        };
        return (
            <div>
                <Form {...layoutProps}>
                   
                        <Radio.Group    defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                            <Radio.Button value="horizontal">Hor</Radio.Button>
                            <Radio.Button value="vertical">Ver</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                   
                    <FormItem label="Field A" {...formItemLayout}>
                        <Input placeholder="input placeholder"/>
                    </FormItem>
                    <FormItem label="Field B" {...formItemLayout}>
                        <Input placeholder="input placeholder"/>
                    </FormItem>
                    <FormItem {...buttonItemLayout}>
                        <Button type="primary" size="large">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

function validatePrimeNumber(number) {
    if (number === 11) {
        return {validateStatus: 'success', errorMsg: null};
    }
    return {validateStatus: 'error', errorMsg: 'The prime between 8 and 12 is 11!'};
}

class RawForm extends React.Component {
    state = {
        number: {
            value: 11
        }
    };

    handleNumberChange = (value) => {
        this.setState({
            number: {
                ...validatePrimeNumber(value),
                value
            }
        });
    }

    render() {
        const formItemLayout = {
            labelCol: {
                span: 7
            },
            wrapperCol: {
                span: 19
            }
        };
        const number = this.state.number;
        const tips = 'A prime is a natural number greater than 1 that has no positive divisors other t' +
                'han 1 and itself.';
        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="Prime between 8 & 12"
                    validateStatus={number.validateStatus}
                    help={number.errorMsg || tips}>
                    <InputNumber
                        min={8}
                        max={12}
                        value={number.value}
                        onChange={this.handleNumberChange}/>
                </FormItem>
            </Form>
        );
    }
}

const AdvancedForms = Form.create()(React.createClass({
    render() {
        return (
            <div id="advanced-form">

                <Row gutter={10}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Validate Form'>
                            <ValidateForm/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Advanced  Form'>
                            <AdvancedForm2/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Store Form Data into Upper Component'>
                            <MainCustomizedForm/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Advanced  Form'>
                            <CoordinatedControls/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Coordinated Controls'>
                            <MainPriceInput/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Handle Form Data Manually'>
                            <RawForm/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Form Layout  Form'>
                            <FormLayoutDemo/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}));

export default AdvancedForms