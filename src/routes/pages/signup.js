import React, {PropTypes} from 'react'
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
  Radio,
  DatePicker,
  TimePicker
} from 'antd'
import {config} from '../../utils'
import styles from '../login.less'

const FormItem = Form.Item
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
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6
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
        <FormItem {...formItemLayout} label="E-mail" hasFeedback>
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
        <FormItem {...formItemLayout} label="Password" hasFeedback>
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
        <FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
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
            Nickname&nbsp;
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
        <FormItem {...formItemLayout} label="Habitual Residence">
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
        <FormItem {...formItemLayout} label="Phone Number">
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
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the captcha you got!'
                  }
                ]
              })(<Input size="large"/>)}
            </Col>
            <Col span={12}>
              <Button size="large">Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{
          marginBottom: 8
        }}>
          {getFieldDecorator('agreement', {valuePropName: 'checked'})(
            <Checkbox>I had read the
              <a>agreement</a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Sign Up</Button>
        </FormItem>
      </Form>
    );
  }
}));

export default Form.create()(RegistrationForm)
