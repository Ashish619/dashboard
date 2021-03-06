import React from 'react'
import styles from './composedChart.less'
import { color } from '../../utils'
import {
  Row, Col, Card, Radio,
  Input, Menu, Dropdown, Button, Icon, message, Table
} from 'antd';
import { getInfo } from '../../services/dashboard'

let data = [];
const CustomTableVisitors = React.createClass({

  getInitialState() {
    return {
      filterDropdownVisible: false,
      data: [],
      searchText: '',
      filtered: false,
    }

  },

  getData() {
   
    var self = this;
    self.setState({ data: [] });
    getInfo(this.props.campaignID, 'visitorsinfo').then(function (response) {
      let visitors = response.map((val, i) => { val = { ...val, key: i }; return val; });
      data = visitors;
      self.setState({ data: data });
    });
  },
  componentWillMount() {
    this.getData();
  },

  onInputChange(e) {
    this.setState({ searchText: e.target.value });
  },

  onSearch() {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.country.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          country: (
            <span>
              {record.country.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  },
  render() {

    const columns = [{
      key: 'visitorIP',
      title: 'IP Address',
      dataIndex: 'visitorIP'

    }, {
      title: 'City',
      dataIndex: 'city',
      key: 'city',

    }, {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search Country"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" style={{ marginTop: '20px' }} onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    },
    {
      title: 'Device',
      dataIndex: 'device',
      key: 'device'
    },
    {
      title: 'Device Type',
      dataIndex: 'deviceType',
      key: 'deviceType'
    },
    {
      title: 'OS',
      dataIndex: 'os',
      key: 'os'
    },
    {
      title: 'Duration',
      dataIndex: 'dateTime',
      key: 'dateTime',
    
    }

    ];

    return <Col md={24} style={{padding: '0 12px'}}>
      <Row className="ant-card-head" style={{ marginBottom: '0px' }}>
        <i className="anticon anticon-reload reloadicon" style={{cursor:'pointer'}} onClick={this.getData}></i>
        <Col xs={24} className="ant-card-head-wrapper">
          <div className="ant-card-head-title">World Report</div>
        </Col>
      </Row>
      <Card ><Table columns={columns} dataSource={this.state.data} scroll={{ x: 1024 }} pagination={{
        total: this.state.data.length,
        showSizeChanger: true,
        pageSize: 3,
        pageSizeOptions: ['3', '10', '15', '20', '40', '' + this.state.data.length],
        onShowSizeChange: (current, pageSize) => {
          console.log('Current: ', current, '; PageSize: ', pageSize);
        },
        onChange: (current) => {
          console.log('Current: ', current);
        }
      }} />
      </Card>
    </Col>;
  }
})




export default CustomTableVisitors
