import React, { PropTypes } from 'react'
import { Table, Tag,Checkbox } from 'antd'
import styles from './todo.less'
import { color } from '../../utils'
const status = {
  1: {
    color: color.blue
  },
  2: {
    color: color.blue
  },
  3: {
    color: color.blue
  },
  4: {
    color: color.yellow
  }
}

function TODO (props) {
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      className: styles.percent,
      render: (text, it) => <Checkbox defaultChecked={it.status}><span className="firstText">{text}</span></Checkbox>
    },
     {
      title: 'date',
      dataIndex: 'date',
      className: styles.name
    }
  ]
  return <Table pagination={false} showHeader={false} columns={columns} rowKey={(record, key) => key} dataSource={props.data} />
}

TODO.propTypes = {
  props: PropTypes.object
}

export default TODO
