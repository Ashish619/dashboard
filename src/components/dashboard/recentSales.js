import React from 'react'
import {Table, Tag, Progress} from 'antd'
import styles from './recentSales.less'
import {color} from '../../utils'

const status = {
  1: {
    color: color.green,
    text: 'SALE'
  },
  2: {
    color: color.yellow,
    text: 'REJECT'
  },
  3: {
    color: color.red,
    text: 'TAX'
  },
  4: {
    color: color.blue,
    text: 'EXTENDED'
  },
  5: {
    color: color.stil_de_gran_yellow,
    text: 'AWAY'
  },
  6: {
    color: color.jungle_green,
    text: 'ONLINE'
  },
  7: {
    color: color.red,
    text: 'OFFLINE'
  },
  8: {
    color: color.stil_de_gran_yellow,
    text: 'AWAY'
  },
  9: {
    color: color.green,
    text: 'SALE'
  },
  10: {
    color: color.yellow,
    text: 'REJECT'
  },
  11: {
    color: color.red,
    text: 'TAX'
  },
  12: {
    color: color.blue,
    text: 'EXTENDED'
  }
}

function RecentSales(props) {
  
  var type;
  for (var i = 0; i < props.data.length; i++) {
    type = props.data[i].type;
  }


  // Type and columns
  if (type == "3") {
    var columns = [
      {
        title: 'NAME',
        dataIndex: 'name'
      }, {
        title: 'STATUS',
        dataIndex: 'status',
        render: text => <Tag color={status[text].color}>{status[text].text}</Tag>
      }, {
        title: 'DATE',
        dataIndex: 'date',
        render: text => new Date(text).format('yyyy-MM-dd')
      }, {
        title: 'PRICE',
        dataIndex: 'price',
        render: (text, it) => <span style={{
            color: status[it.status].color
          }}>${text}</span>
      }
    ]
  } else if (type == "2") {
    var columns = [
      {
        title: 'PROJECT',
        dataIndex: 'name'
      }, {
        title: 'STATUS',
        dataIndex: 'status',
        render: text => <Tag color={status[text].color}>{status[text].text}</Tag>
      }, {
        title: 'CLIENT',
        dataIndex: 'price',
        render: (text, it) => <span style={{
            color: status[it.status].color
          }}>${text}</span>
      }, {
        title: 'LAST ACTIVITY',
        dataIndex: 'date',
        render: text => new Date(text).format('yyyy-MM-dd')
      }
    ]
  } else {
    var columns = [
      {
        title: 'DATE',
        dataIndex: 'date',
        render: text => new Date(text).format('yyyy-MM-dd')
      }, {
        title: 'PROFIT',
        dataIndex: 'price',
        render: (text, it) => <span style={{
            color: status[it.status].color
          }}>${text}</span>
      }, {
        title: 'IMPRESSIONS',
        dataIndex: 'name'
      }, {
        title: 'DOWNLOAD',
        dataIndex: 'status',
        render: text => <Progress percent={30} strokeWidth={5}/> //<Tag color={status[text].color}>{status[text].text}</Tag>
      }
    ]
  }

  return (
    <div className={styles.recentsales}>
      <Table
        pagination={false}
        columns={columns}
        rowKey={(record, key) => key}
        dataSource={props
        .data
        .filter((item, key) => key < 5)}/>
    </div>
  )
}

export default RecentSales
