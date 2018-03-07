import React from 'react'
import styles from './composedChart.less'
import { color } from '../../utils'
import {
  Row, Col, Card, Radio,
  Input, Menu, Dropdown, Button, Icon, message, Table
} from 'antd';
import { getInfo } from '../../services/dashboard'

let data = [];
const CustomContentAnalytics = React.createClass({

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
    getInfo(this.props.campaignID, 'content').then(function (response) {
      let content = response.map((val, i) => { val = { ...val, key: i }; for (var k in val) { val[k] = '' + val[k] } return val; });
      data = content;
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
        const match = record.page.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          page: (
            <span>
              {record.page.split(reg).map((text, i) => (
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

      title: 'Page',
      dataIndex: 'page',
      key: 'page',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search Page"
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
      title: 'Total Time Spent',
      dataIndex: 'totalTimeSpent',
      key: 'totalTimeSpent'
    },
    {
      title: 'Visit Count',
      dataIndex: 'visitCount',
      key: 'visitCount'
    }


    ];

    return <Col md={24}>
      <Row className="ant-card-head" style={{ marginBottom: '0px' }}>
        <i className="anticon anticon-reload reloadicon"></i>
        <Col xs={24} className="ant-card-head-wrapper">
          <div className="ant-card-head-title">Content Analytics</div>
        </Col>
      </Row>
      <Card style={{height:'408px'}}><Table columns={columns} dataSource={this.state.data} pagination={{
        total: this.state.data.length,
        showSizeChanger: true,
        pageSize: 4,
        pageSizeOptions: ['4', '10', '15', '20', '40', '' + this.state.data.length],
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




export default CustomContentAnalytics
