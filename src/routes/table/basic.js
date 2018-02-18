import React, {PropTypes,Component } from 'react'
import {
  Table,
  Icon,
  LocaleProvider,
  Row,
  Col,
  Card
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'

  }, {
    title: 'Age',
    dataIndex: 'age'

  }, {
    title: 'Address',
    dataIndex: 'address'
  }
];

const columns_colspan = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index < 4) {
        return <a href="#">{text}</a>;
      }
      return {
        children: <a href="#">{text}</a>,
        props: {
          colSpan: 2
        }
      };
    }
  }, {
    title: 'Age',
    dataIndex: 'age',
    render: renderContent
  }, {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    }
  }, {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent
  }, {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '5',
    name: 'John Alba',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '6',
    name: 'Mayk Consta',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
];

const data_colSpan = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  }, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
  })
};

const pagination = {
  total: data.length,
  showSizeChanger: true,
  pageSize: 4,
  onShowSizeChange: (current, pageSize) => {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange: (current) => {
    console.log('Current: ', current);
  }
};

// In the fifth row, other columns are merged into first column by setting it's
// colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

export default class Tables extends Component {

  constructor() {
    super();
    this.state = {
      width: 800
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({width: 450});
    }else if (window.innerWidth > 800) {
       this.setState({width: 0});
     } else {
      let update_width = window.innerWidth - 100;
      this.setState({width: update_width});
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div>
        <Row gutter={10}>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Basic Table'>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                scroll={{ x: this.state.width }}/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Basic Table'>
              <Table dataSource={data} columns={columns} scroll={{ x: this.state.width }}/>
            </Card>
          </Col>
        </Row>

        <Row>

          <Col span={24}>
            <Card title='Basic pagination Table'>
              <LocaleProvider locale={enUS}>
                <Table columns={columns} dataSource={data} scroll={{ x: this.state.width }} pagination={pagination}/>
              </LocaleProvider>
            </Card>
          </Col>

        </Row>

        <Row gutter={10}>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Middle size table'>
              <Table columns={columns} dataSource={data} scroll={{ x: this.state.width }} size="middle"/>

            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Small size table'>
              <Table columns={columns} dataSource={data} scroll={{ x: this.state.width }} size="small"/>
            </Card>
          </Col>
        </Row>
        <Row gutter={10}>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Header Footer  table'>
              <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => 'Header'}
                footer={() => 'Footer'} scroll={{ x: this.state.width }}/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Expandable Row'>
              <Table
                columns={columns}
                expandedRowRender={record => <p>{record.address}</p>}
                dataSource={data} scroll={{ x: this.state.width }}/>
            </Card>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col >
            <Card title='colSpan and rowSpan table'>
              <Table columns={columns_colspan} dataSource={data_colSpan} bordered scroll={{ x: this.state.width }}/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}