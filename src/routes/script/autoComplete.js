import React from 'react'
import {
  Table,
  Row,
  Col,
  Card,
  Icon,
  Tabs,
  Select,
  Button,
  message,
  AutoComplete,
  Input
} from 'antd'
import styles from "./autoComplete.less"

function onSelect(value) {
  message.success('onSelect =>' + value);
}

const BasicComplete = React.createClass({
  getInitialState() {
    return {dataSource: []};
  },
  handleChange(value) {
    this.setState({
      dataSource: !value
        ? []
        : [
          value, value + value,
          value + value + value
        ]
    });
  },
  render() {
    const {dataSource} = this.state;
    return (<AutoComplete
      dataSource={dataSource}
      style={{
      width: 200
    }}
      onSelect={onSelect}
      onChange={this.handleChange}
      placeholder="input here"/>);
  }
});

const Option = AutoComplete.Option;
const CustomComplete = React.createClass({
  getInitialState() {
    return {result: []};
  },
  handleChange(value) {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', 'hotmail.com', 'yahoo.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({result});
  },
  render() {
    const {result} = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });
    return (
      <AutoComplete
        style={{
        width: 200
      }}
        onChange={this.handleChange}
        placeholder="input here">
        {children}
      </AutoComplete>
    );
  }
});


const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function CaseComplete() {
  return (<AutoComplete
    style={{
    width: 200
  }}
    dataSource={dataSource}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}/>);
}

//
function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5)))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query}&nbsp; >&nbsp;
      <a
        href={`https://www.google.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer">
        {item.category}
      </a>

      <span style={{
        float: 'right'
      }}>
        {item.count}
        &nbsp; Result</span>
    </Option>
  );
}

const SearchComplete = React.createClass({
  getInitialState() {
    return {dataSource: []};
  },
  handleChange(value) {
    if (value) {
      this.setState({dataSource: searchResult(value)});
    }
  },
  render() {
    const {dataSource} = this.state;
    return (
      <div className="global-search-wrapper" style={{
        width: '100%'
      }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{
          width: '100%'
        }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onChange={this.handleChange}
          placeholder="input here"
          optionLabelProp="text">
          <Input
            suffix={(
            <Button className="search-btn" size="large" type="primary">
              <Icon type="search"/>
            </Button>
          )}/>
        </AutoComplete>
      </div>
    );
  }
});

const AutoComlpPage = () => <div>

  <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
          <Card title='Basic'>
        <BasicComplete/>
      </Card>
       <Card title='Custom'>
        <CustomComplete/>
      </Card>
     
    </Col>
    <Col xs={24} md={12} lg={12}>
     <Card title='Non-case-sensitive '>
        <CaseComplete/>
      </Card>
      <Card title='Lookup-Patterns - Uncertain Category'>
        <SearchComplete/>
      </Card>
    </Col>
    </Row>
</div>

export default AutoComlpPage