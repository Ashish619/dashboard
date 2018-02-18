import React from 'react'
import {
  Table,
  Button,
  Row,
  Col,
  Card,
  LocaleProvider
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import styles from './advancedTable.less'

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
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];

const data2 = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park'
      }, {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park'
          }
        ]
      }, {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park'
              }, {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park'
              }
            ]
          }
        ]
      }
    ]
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];
// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

const data3 = [];
for (let i = 0; i < 100; i++) {
  data3.push({key: i, name: `Edward King ${i}`, age: 32, address: `London, Park Lane no. ${i}`});
}

const columns_group = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      }, {
        text: 'John',
        value: 'John'
      }
    ],
    onFilter: (value, record) => record
      .name
      .indexOf(value) === 0
  }, {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        sorter: (a, b) => a.age - b.age
      }, {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 200
          }, {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 50
              }, {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100
              }
            ]
          }
        ]
      }
    ]
  }, {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200
      }, {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
        width: 200
      }
    ]
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 60,
    fixed: 'right'
  }
];

const columns_fixel_col = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  }, {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  }, {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1'
  }, {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2'
  }, {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3'
  }, {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4'
  }, {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5'
  }, {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6'
  }, {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7'
  }, {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  }, {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="#">action</a>
  }
];

const data_group = [];
for (let i = 0; i < 100; i++) {
  data_group.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  });
}

const advancedTable = React.createClass({
  getInitialState() {
    return {filteredInfo: null, sortedInfo: null, width: 800};
  },
  handleChange(pagination, filters, sorter) {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({filteredInfo: filters, sortedInfo: sorter});
  },
  clearFilters() {
    this.setState({filteredInfo: null});
  },
  clearAll() {
    this.setState({filteredInfo: null, sortedInfo: null});
  },
  setAgeSort() {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age'
      }
    });
  },

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({width: 450});
    } else if (window.innerWidth > 800) {
      this.setState({width: 0});
    } else {
      let update_width = window.innerWidth - 100;
      this.setState({width: update_width});
    }
  },

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  },

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  },

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          {
            text: 'Joe',
            value: 'Joe'
          }, {
            text: 'Jim',
            value: 'Jim'
          }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record
          .name
          .includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {
            text: 'London',
            value: 'London'
          }, {
            text: 'New York',
            value: 'New York'
          }
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record
          .address
          .includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order
      }
    ];
    return (

      <div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card title='Advanced Table'>
              <div className="table-operations">
                <Button onClick={this.setAgeSort}>Sort age</Button>
                <Button onClick={this.clearFilters}>Clear filters</Button>
                <Button onClick={this.clearAll}>Clear filters and sorters</Button>
              </div>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns}
                  dataSource={data}
                  onChange={this.handleChange}
                  scroll={{
                  x: this.state.width
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card title='Tree data Table'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns}
                  rowSelection={rowSelection}
                  dataSource={data2}
                  scroll={{
                  x: this.state.width
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card title='Fixed Header Table'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{
                  pageSize: 50
                }}
                  scroll={{
                  y: 240
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Fixed Column Table'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns_fixel_col}
                  dataSource={data}
                  scroll={{
                  x: 1300
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card title='Fixed Header/Column Table'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns_fixel_col}
                  dataSource={data}
                  scroll={{
                  x: 1500,
                  y: 420
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card title='Fixed Header Table'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns_group}
                  dataSource={data_group}
                  bordered
                  size="middle"
                  scroll={{
                  x: 1010,
                  y: 240
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
});

export default advancedTable