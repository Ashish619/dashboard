import React, {PropTypes} from 'react'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../utils'
import styles from './login.less'

const FormItem = Form.Item

const login = ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        <span>Berr Admin</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please Enter Your User Name'
              }
            ]
          })(<Input size='large' onPressEnter={handleOk} placeholder='Username' />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please Enter Your Password'
              }
            ]
          })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='Password' />)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loginButtonLoading}>
            Login
          </Button>
        </Row>
        <p>
          <span>User Name：guest</span>
          <span>Password：guest</span>
        </p>
      </form>
    </div>
  )
}

login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func
}

export default Form.create()(login)
