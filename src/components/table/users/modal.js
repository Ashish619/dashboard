import React, {PropTypes} from 'react'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  LocaleProvider
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

const modal = ({
  visible,
  type,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create'
      ? 'Create New User'
      : 'Edit User'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <LocaleProvider locale={enUS}>
      <Modal {...modalOpts}>
        <Form horizontal>
          <FormItem label='Name：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [
                {
                  required: true,
                  message: 'Name Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='User Name：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('nickName', {
              initialValue: item.nickName,
              rules: [
                {
                  required: true,
                  message: 'User Name Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Gender' hasFeedback {...formItemLayout}>
            {getFieldDecorator('isMale', {
              initialValue: item.isMale,
              rules: [
                {
                  required: true,
                  type: 'boolean',
                  message: 'Gender Must be Select'
                }
              ]
            })(
              <Radio.Group>
                <Radio value>Male</Radio>
                <Radio value={false}>Female</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label='Age：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('age', {
              initialValue: item.age,
              rules: [
                {
                  required: true,
                  type: 'number',
                  message: 'Age Cannot be Filled'
                }
              ]
            })(<InputNumber min={18} max={100}/>)}
          </FormItem>
          <FormItem label='Phone：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('phone', {
              initialValue: item.phone,
              rules: [
                {
                  required: true,
                  message: 'Phone Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Email：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: item.email,
              rules: [
                {
                  required: true,
                  message: 'Email Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
          <FormItem label='Address：' hasFeedback {...formItemLayout}>
            {getFieldDecorator('address', {
              initialValue: item.address,
              rules: [
                {
                  required: true,
                  message: 'Address Cannot be Filled'
                }
              ]
            })(<Input/>)}
          </FormItem>
        </Form>
      </Modal>
    </LocaleProvider>
  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(modal)
