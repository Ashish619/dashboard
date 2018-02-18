import React from 'react'
import { Table, Row, Col,Button,Card,Icon,Checkbox  } from 'antd'
const CheckboxGroup = Checkbox.Group;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const App = React.createClass({
  getInitialState() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    };
  },
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  },
  onChange(checkedList) {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  },
  onCheckAllChange(e) {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  },
});


const App1 = React.createClass({
  getInitialState() {
    return {
      checked: true,
      disabled: false,
    };
  },
  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button style={{ marginLeft: '10px' }}
            type="primary" size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </div>
    );
  },
  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  },
  toggleDisable() {
    this.setState({ disabled: !this.state.disabled });
  },
  onChange(e) {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  },
});
const plainOptions1 = ['Apple', 'Pear', 'Orange'];
const options1 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled1 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const checkboxPage = () =><div>
  <Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
         <Card title='Basic Checkbox'>
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Card>
         <Card title='Check All'>
        <div>
   <App />
  </div>
        </Card>
    </Col>
    <Col xs={24} md={12} lg={12}>
      <Card title='Controlled Checkbox'>
        <div>
<App1 />
  </div>
        </Card>
         <Card title='Checkbox Group'>
        <div>
<div>
    <CheckboxGroup options={plainOptions1} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <CheckboxGroup options={options1} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <CheckboxGroup options={optionsWithDisabled1} disabled defaultValue={['Apple']} onChange={onChange} />
  </div>
  </div>
        </Card>
    </Col>
    </Row>
  
    
</div>
export default checkboxPage
