import React from 'react'
import {
  Table,
  Icon,
  Switch,
  Radio,
  Form,
  Row,
  Col,
  Card,
  LocaleProvider
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const FormItem = Form.Item;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: text => <a href="#">{text}</a>
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <span className="ant-divider"/>
        <a href="#">Delete</a>
        <span className="ant-divider"/>
        <a href="#" className="ant-dropdown-link">
          More actions
          <Icon type="down"/>
        </a>
      </span>
    )
  }
];

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({key: i, name: 'John Brown', age: `${i}2`, address: `New York No. ${i} Lake Park`, description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`});
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {
  y: 240
};

class tablePlayground extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    width:800,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({[prop]: enable});
    };
  }

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  }

  handleExpandChange = (enable) => {
    this.setState({
      expandedRowRender: enable
        ? expandedRowRender
        : false
    });
  }

  handleTitleChange = (enable) => {
    this.setState({
      title: enable
        ? title
        : undefined
    });
  }

  handleHeaderChange = (enable) => {
    this.setState({
      showHeader: enable
        ? showHeader
        : false
    });
  }

  handleFooterChange = (enable) => {
    this.setState({
      footer: enable
        ? footer
        : undefined
    });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({
      rowSelection: enable
        ? {}
        : undefined
    });
  }

  handleScollChange = (enable) => {
    this.setState({
      scroll: enable
        ? scroll
        : undefined
    });
  }

 /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if (window.innerWidth < 1000) {
      this.setState({width: 850});
    } else if (window.innerWidth > 1000) {
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
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const state = this.state;
    return (

      <div className="components-table-demo-control-bar">
        <Row>
          <Col span={24}>
            <Card title='Table options'>
              <LocaleProvider locale={enUS}>
                <Form inline>
                  <FormItem label="Bordered">
                    <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
                  </FormItem>
                  <FormItem label="loading">
                    <Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
                  </FormItem>
                  <FormItem label="Pagination">
                    <Switch checked={state.pagination} onChange={this.handleToggle('pagination')}/>
                  </FormItem>
                  <FormItem label="Title">
                    <Switch checked={!!state.title} onChange={this.handleTitleChange}/>
                  </FormItem>
                  <FormItem label="Column Header">
                    <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
                  </FormItem>
                  <FormItem label="Footer">
                    <Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
                  </FormItem>
                  <FormItem label="Expandable">
                    <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
                  </FormItem>
                  <FormItem label="Checkbox">
                    <Switch
                      checked={!!state.rowSelection}
                      onChange={this.handleRowSelectionChange}/>
                  </FormItem>
                  <FormItem label="Fixed Header">
                    <Switch checked={!!state.scroll} onChange={this.handleScollChange}/>
                  </FormItem>
                  <FormItem label="Size">
                    <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                      <Radio.Button value="default">Default</Radio.Button>
                      <Radio.Button value="middle">Middle</Radio.Button>
                      <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                  </FormItem>
                </Form>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card title=' Table'>
              <LocaleProvider locale={enUS}>
                <Table {...this.state} columns={columns} dataSource={data}  scroll={{ x:this.state.width }}/>
              </LocaleProvider>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default tablePlayground