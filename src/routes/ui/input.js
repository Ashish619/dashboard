import React from 'react'
import {Ico} from '../../components/ui'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Tooltip 
} from 'antd'
import styles from './input.less'
const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;
const selectBefore = (
  <Select defaultValue="Http://" style={{
    width: 80
  }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{
    width: 70
  }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }
  emitEmpty = () => {
    this
      .userNameInput
      .focus();
    this.setState({userName: ''});
  }
  onChangeUserName = (e) => {
    this.setState({userName: e.target.value});
  }
  render() {
    const {userName} = this.state;
    const suffix = userName
      ? <Icon type="close-circle" onClick={this.emitEmpty}/>
      : null;
    return (
      <Input
        placeholder="Enter your userName"
        prefix={< Icon type = "user" />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}/>
    );
  }
}


function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = (e) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  }

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      this.props.onChange({ value: value.slice(0, -1) });
    }
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  render() {
    const { value } = this.props;
    const title = (value ?
      (<span className="numeric-input-title">
        {value !== '-' ? formatNumber(value) : '-'}
      </span>) : '');
    return (
      <div>
        <Tooltip
          trigger={['focus']}
          title={title}
          placement="topLeft"
          overlayClassName="numeric-input"
        >
          <Input
            {...this.props}
            onChange={this.onChange}
            onBlur={this.onBlur}
            placeholder="input a number"
            maxLength="25"
          />
        </Tooltip>
      </div>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <div className="numeric-input-demo">
        <NumericInput value={value} onChange={this.onChange} />
      </div>
    );
  }
}

const InputPage = () =><div>
 <Row gutter={10}>
  <Col xs={24} md={8} lg={8}>
    <Card title="Basic Input"><Input placeholder="Basic usage"/></Card>
    <Card title="Pre / Post Inputs">
      <div>
        <div style={{
          marginBottom: 16
        }}>
          <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
        </div>
        <div style={{
          marginBottom: 16
        }}>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mysite"/>
        </div>
        <div style={{
          marginBottom: 16
        }}>
          <Input addonAfter={< Icon type = "setting" />} defaultValue="mysite"/>
        </div>
      </div>
    </Card>
    <Card title="Input Group">
     <div>
    <InputGroup size="large">
      <Col xs={24} md={4} lg={4}>
        <Input defaultValue="0571" />
      </Col>
      <Col xs={24} md={20} lg={20}>
        <Input defaultValue="26888888" />
      </Col>
    </InputGroup>
    <br />
    <InputGroup compact>
      <Input style={{ width: '30%' }} defaultValue="0571" />
      <Input style={{ width: '66%' }} defaultValue="26888888" />
    </InputGroup>
    <br />
    <InputGroup compact>
      <Select defaultValue="C180" style={{ width: '30%' }}>
        <Option value="C180">C180</Option>
        <Option value="E200">E200</Option>
      </Select>
      <Input style={{ width: '66%' }} defaultValue="Mercedes" />
    </InputGroup>


  
    <br />
  </div></Card>
  </Col>
  <Col xs={24} md={8} lg={8}>
    <Card title="Search Input">
      <Search
        placeholder="input search text"
        style={{
        width: 200
      }}
        onSearch={value => console.log(value)}/></Card>
    <Card title="Autosizing the height to fit the content">
      <div>
        <Input
          type="textarea"
          placeholder="Autosize height based on content lines"
          autosize/>
        <div style={{
          margin: '24px 0'
        }}/>
        <Input
          type="textarea"
          placeholder="Autosize height with minimum and maximum number of lines"
          autosize={{
          minRows: 2,
          maxRows: 6
        }}/>
      </div>
    </Card>
    <Card title="Text Area"><Input type="textarea" rows={4} /></Card>
  </Col>
  <Col xs={24} md={8} lg={8}>
    <Card title="prefix and suffix"><InputApp/></Card>
    <Card title="Sized Input">
     <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div></Card>
  <Card title="Input Only Number with Tooltip"><NumericInputDemo /></Card>
  </Col>
</Row> </div>
export default InputPage