import React from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    Row,
    Col,
    Card,
    LocaleProvider,
    Checkbox,
    message,
    Tooltip,
    Cascader,
    Select,
    Modal,
    Radio,DatePicker,TimePicker
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import sytles from "./basicform.less"
const FormItem = Form.Item;
const Option = Select.Option;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}

const residences = [
    {
        value: 'John',
        label: 'John',
        children: [
            {
                value: 'Smit',
                label: 'Smit',
                children: [
                    {
                        value: 'Lorem',
                        label: 'Lorem'
                    }
                ]
            }
        ]
    }, {
        value: 'Level1',
        label: 'Level 1',
        children: [
            {
                value: 'Level2',
                label: 'Level 2',
                children: [
                    {
                        value: 'Level3',
                        label: 'Level 3'
                    }
                ]
            }
        ]
    }
];

const HorizontalLoginForm = Form.create()(React.createClass({
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
                <Form inline onSubmit={this.handleSubmit}>
                    <FormItem 
                        validateStatus={userNameError
                        ? 'error'
                        : ''}
                        help={userNameError || ''}>
                        {getFieldDecorator('userName-login', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError
                        ? 'error'
                        : ''}
                        help={passwordError || ''}>
                        {getFieldDecorator('password-login', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input
                                addonBefore={< Icon type = "lock" />}
                                type="password"
                                placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </LocaleProvider>

        );
    }
}));

const NormalLoginForm = Form.create()(React.createClass({
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
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]
                    })(
                        <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!'
                            }
                        ]
                    })(
                        <Input
                            addonBefore={< Icon type = "lock" />}
                            type="password"
                            placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or 
                    <a> Register now!</a>
                </FormItem>
            </Form>
        );
    }
}));

const RegistrationForm = Form.create()(React.createClass({
    getInitialState() {
        return {passwordDirty: false};
    },
    handleSubmit(e) {
        e.preventDefault();
        this
            .props
            .form
            .validateFieldsAndScroll((err, values) => {
                if (!err) {
                    message.success('Received values of form:' + JSON.stringify(values));
                }
            });
    },
    handlePasswordBlur(e) {
        const value = e.target.value;
        this.setState({
            passwordDirty: this.state.passwordDirty || !!value
        });
    },
    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    },
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    },
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 10
            },
            wrapperCol: {
                span: 14
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 24,
                
            }
        };
        const prefixSelector = getFieldDecorator('prefix', {initialValue: '44'})(
            <Select className="icp-selector">
                <Option value="44">+44</Option>
                <Option value="45">+45</Option>
            </Select>
        );
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="E-mail"  hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            }, {
                                required: true,
                                message: 'Please input your E-mail!'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Pass" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!'
                            }, {
                                validator: this.checkConfirm
                            }
                        ]
                    })(<Input type="password" onBlur={this.handlePasswordBlur}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Confirm Pass" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!'
                            }, {
                                validator: this.checkPassword
                            }
                        ]
                    })(<Input type="password"/>)}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                    <span>
                        Nick&nbsp;
                        <Tooltip title="What do you want other to call you?">
                            <Icon type="question-circle-o"/>
                        </Tooltip>
                    </span>
                )}
                    hasFeedback>
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your nickname!'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Place">
                    {getFieldDecorator('residence', {
                        initialValue: [
                            'zhejiang', 'hangzhou', 'xihu'
                        ],
                        rules: [
                            {
                                type: 'array',
                                required: true,
                                message: 'Please select your habitual residence!'
                            }
                        ]
                    })(<Cascader options={residences}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Phone">
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your phone number!'
                            }
                        ]
                    })(<Input addonBefore={prefixSelector}/>)}
                </FormItem>
                <FormItem 
                    {...formItemLayout}
                    label="Captcha"
                    extra="We must make sure that your are a human.">
                    <Row>
                        <Col  xs={24} md={24} lg={24}>
                            {getFieldDecorator('captcha', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input the captcha you got!'
                                    }
                                ]
                            })(<Input size="large"/>)}
                        </Col>
                        
                    </Row>
                    <Row>
                        
                        <Col xs={24} md={24} lg={24}>
                            <Button size="large">Get captcha</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                    style={{
                    marginBottom: 10,
                    marginBottom:10
                }}>
                    {getFieldDecorator('agreement', {valuePropName: 'checked'})(
                        <Checkbox>I had read the
                            <a>agreement</a>
                        </Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Register</Button>
                </FormItem>
            </Form>
        );
    }
}));

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false
    };

    handleSearch = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                message.success('Received values of form:' + JSON.stringify(values));
            });
    }

    handleReset = () => {
        this
            .props
            .form
            .resetFields();
    }

    toggle = () => {
        const {expand} = this.state;
        this.setState({
            expand: !expand
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        };

        // To generate mock Form.Item
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i}>
                    <FormItem {...formItemLayout} label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`)(<Input placeholder="placeholder"/>)}
                    </FormItem>
                </Col>
            );
        }

        const expand = this.state.expand;
        const shownCount = expand
            ? children.length
            : 6;
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={40}>
                    {children.slice(0, shownCount)}
                </Row>
                <Row>
                    <Col
                        span={24}
                        style={{
                        textAlign: 'right'
                    }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button
                            style={{
                            marginLeft: 8
                        }}
                            onClick={this.handleReset}>
                            Clear
                        </Button>
                        <a
                            style={{
                            marginLeft: 8,
                            fontSize: 12
                        }}
                            onClick={this.toggle}>
                            Collapse
                            <Icon
                                type={expand
                                ? 'up'
                                : 'down'}/>
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }
}
const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const CollectionCreateForm = Form.create()((props) => {
    const {visible, onCancel, onCreate, form} = props;
    const {getFieldDecorator} = form;
    return (
          <LocaleProvider locale={enUS}>
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}>
          
            <Form vertical>
                <FormItem label="Title">
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input the title of collection!'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem label="Description">
                    {getFieldDecorator('description')(<Input type="textarea"/>)}
                </FormItem>
                <FormItem className="collection-create-form_last-form-item">
                    {getFieldDecorator('modifier', {initialValue: 'public'})(
                        <Radio.Group>
                            <Radio value="public">Public</Radio>
                            <Radio value="private">Private</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
            </Form>
           
        </Modal>
         </LocaleProvider>
    );
});

const CollectionsPage = React.createClass({
    getInitialState() {
        return {visible: false};
    },
    showModal() {
        this.setState({visible: true});
    },
    handleCancel() {
        this.setState({visible: false});
    },
    handleCreate() {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

                    message.success('Received values of form:' + JSON.stringify(values));
            form.resetFields();
            this.setState({visible: false});
        });
    },
    saveFormRef(form) {
        this.form = form;
    },
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Modal Collection</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}/>
            </div>
        );
    }
});


let uuid = 0;
class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('Received values of form:' + JSON.stringify(values));
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: { span: 20, offset: 4 },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Passengers' : ''}
          required={false}
          key={k}
        >
          {getFieldDecorator(`names-${k}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            }],
          })(
            <Input placeholder="passenger name" style={{ width: '100%', marginRight: 8 }} />
          )}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        </FormItem>
      );
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit" size="large">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);


const TimeRelatedForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      message.success('Received values of form:' + JSON.stringify(values));
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
        <LocaleProvider locale={enUS}>
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="DatePicker"
        >
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="DatePicker[showTime]"
        >
        {getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="MonthPicker"
        >
        {getFieldDecorator('month-picker', config)(
            <MonthPicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="RangePicker"
        >
        {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )}
        </FormItem>
      
        <FormItem
          {...formItemLayout}
          label="TimePicker"
        >
        {getFieldDecorator('time-picker', config)(
            <TimePicker />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit" size="large">Submit</Button>
        </FormItem>
      </Form>
      </LocaleProvider>
    );
  },
}));


const Forms = Form.create()(React.createClass({
    render() {
        return (
            <div id="components-form">
              
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Card title='Register  Form'>
                            <RegistrationForm></RegistrationForm>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Card title='DatePicker Form'>
                          <TimeRelatedForm />
                        </Card>
                    </Col>
                </Row>
                  <Row gutter={10}>
                    <Col xs={24} sm={24} md={16} lg={16}>
                        <Card title='Horizontal Login Form'>
                            <HorizontalLoginForm/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                         <Card title='Modal Form'>
                            <CollectionsPage/> 
                        </Card>
                         
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Card title='Advanced Search'>
                            <WrappedAdvancedSearchForm/>
                            <div className="search-result-list">Search Result List</div>
                        </Card>
                    </Col>
                </Row>
                 <Row gutter={10}>
                    <Col xs={24} sm={24} md={16} lg={16}>
                        <Card title='Dynamic Form'>
                           <WrappedDynamicFieldSet />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                      <Card title='Login Form'>
                            <NormalLoginForm></NormalLoginForm>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}));

export default Forms