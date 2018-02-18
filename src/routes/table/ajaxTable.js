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

import reqwest from 'reqwest';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%'
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male'
      }, {
        text: 'Female',
        value: 'female'
      }
    ],
    width: '20%'
  }, {
    title: 'Email',
    dataIndex: 'email'
  }
];

const AjaxTable = React.createClass({
  getInitialState() {
    return {data: [], pagination: {}, loading: false,width:500};
  },
  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({pagination: pager});
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  },
  fetch(params = {}) {
    console.log('params:', params);
    this.setState({loading: true});
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 1000,
        ...params
      },
      type: 'json'
    }).then((data) => {
      const pagination = this.state.pagination;
      // Read total count from server pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({loading: false, data: data.results, pagination});
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
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  },

 componentDidMount() {
    this.fetch();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  },
  
  render() {
    return (

      <div>
        <Row>
          <Col span={24}>
            <Card title='Ajax Table ( https://randomuser.me/api )'>
              <LocaleProvider locale={enUS}>
                <Table
                  columns={columns}
                  rowKey={record => record.registered}
                  dataSource={this.state.data}
                  pagination={this.state.pagination}
                  loading={this.state.loading}
                  onChange={this.handleTableChange}
                  scroll={{
                  x: this.state.width
                }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
});

export default AjaxTable