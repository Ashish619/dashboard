import React from 'react'
import {
  Row,
  Col,
  Card,
  Icon,
  Select,
  Button,
  message,
  AutoComplete,
  Input,
  LocaleProvider,
  Form,
  Popover,
  Mention
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';

const {toString, toEditorState, getMentions} = Mention;

function onChange(editorState) {
  message.success(toString(editorState));
}

function onSelect(suggestion) {
  message.success('onSelect ->' + suggestion);
}
const users = [
  'Steve',
  'Bret',
  'Thompson',
  'Lewis',
  'David',
  'Marco'
];
const AsyncMention = React.createClass({
  getInitialState() {
    return {suggestions: [], loading: false};
  },
  fetchSuggestions(value, callback) {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  },
  onSearchChange(value) {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({suggestions, loading: false});
    });
    this.setState({loading: true});
  },
  render() {
    const {suggestions, loading} = this.state;
    return (<Mention
      style={{
      width: '100%',
      height: 100
    }}
      loading={loading}
      suggestions={suggestions}
      onSearchChange={this.onSearchChange}/>);
  }
});

const Nav = Mention.Nav;

const webFrameworks = [
  {
    name: 'React',
    type: 'JavaScript'
  }, {
    name: 'Angular',
    type: 'JavaScript'
  }, {
    name: 'Laravel',
    type: 'PHP',
    disabled: true
  }, {
    name: 'Flask',
    type: 'Python'
  }, {
    name: 'Django',
    type: 'Python'
  }
];

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}
const CustomNavMention = React.createClass({
  getInitialState() {
    return {suggestions: []};
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);
    const suggestions = filtered.map(suggestion => <Nav value={suggestion.name} data={suggestion}>
      <span>{suggestion.name}
        - {suggestion.type}
      </span>
    </Nav>);
    this.setState({suggestions});
  },
  render() {
    const {suggestions} = this.state;
    return (<Mention
      placeholder="@someone"
      style={{
      width: '100%',
      height: 100
    }}
      suggestions={suggestions}
      onSearchChange={this.onSearchChange}
      onSelect={onSelect}/>);
  }
});

const webFrameworks2 = [
  {
    name: 'React',
    type: 'JavaScript',
    icon: './assets/mention/react.svg'
  }, {
    name: 'Angular',
    type: 'JavaScript',
    icon: './assets/mention/angular.png'
  }, {
    name: 'Dva',
    type: 'Javascript',
    icon: './assets/mention/dva.png'
  }, {
    name: 'Flask',
    type: 'Python',
    icon: './assets/mention/pyhton.png'
  }
];
const CustomNavMentionIcon = React.createClass({
  getInitialState() {
    return {suggestions: []};
  },
  onSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks2.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);

    const suggestions = filtered.map(suggestion => <Nav value={suggestion.name} data={suggestion} disabled={suggestion.disabled}>
      <span>
        <img
          alt={suggestion.name}
          style={{
          height: 16,
          width: 16,
          marginRight: 5,
          float: 'left'
        }}
          src={suggestion.icon}/> {suggestion.name}
        - {suggestion.type}
      </span>
    </Nav>);
    this.setState({suggestions});
  },
  render() {
    const {suggestions} = this.state;
    return (<Mention
      style={{
      width: '100%',
      height: 100
    }}
      suggestions={suggestions}
      onSearchChange={this.onSearchChange}/>);
  }
});

const Controlled = React.createClass({
  getInitialState() {
    return {value: toEditorState('@David')};
  },
  handleChange(editorState) {
    this.setState({value: editorState});
  },
  render() {
    return (<Mention
      suggestions={[
      'Steve',
      'Bret',
      'Thompson',
      'Lewis',
      'David',
      'Marco'
    ]}
      value={this.state.value}
      onChange={this.handleChange}/>);
  }
});

const FormItem = Form.Item;

let FormMention = React.createClass({
  getInitialState() {
    return {initValue: toEditorState('@john')};
  },
  handleReset(e) {
    e.preventDefault();
    this
      .props
      .form
      .resetFields();
  },
  handleSubmit(e) {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((errors, values) => {
        if (errors) {
          console.log('Errors in form!!!');
          return;
        }
        console.log('Submit!!!');
        console.log(values);
      });
  },
  checkMention(rule, value, callback) {
    const {getFieldValue} = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  },
  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;
    console.log('>> render', getFieldValue('mention') === this.state.initValue);
    return (
      <Form>
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol={{
          span: 6
        }}
          wrapperCol={{
          span: 14
        }}>
          {getFieldDecorator('mention', {
            rules: [
              {
                validator: this.checkMention
              }
            ],
            initialValue: this.state.initValue
          })(<Mention
            suggestions={[
            'Steve',
            'Bret',
            'Thompson',
            'Lewis',
            'David',
            'Marco'
          ]}/>)}
        </FormItem>
        <FormItem wrapperCol={{
          span: 14,
          offset: 6
        }}>
          <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  }
});

FormMention = Form.create()(FormMention);

const PopoverContainer = React.createClass({
  getSuggestionContainer() {
    return this
      .popover
      .getPopupDomNode();
  },
  render() {
    const mention = (<Mention
      style={{
      width: '100%',
      height: 100
    }}
      onChange={onChange}
      defaultValue={toEditorState('@John')}
      suggestions={[
      'Steve',
      'Bret',
      'Thompson',
      'Lewis',
      'David',
      'Marco'
    ]}
      onSelect={onSelect}
      getSuggestionContainer={this.getSuggestionContainer}/>);
    return (
      <Popover
        trigger="click"
        content={mention}
        title="Title"
        ref={popover => this.popover = popover}>
        <Button type="primary">Click Me</Button>
      </Popover>
    );
  }
});

const MentionPage = () => <div>
  <Row gutter={16} type="flex" justify="top" align="center">
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Basic'>
        <LocaleProvider locale={enUS}>
          <Mention
            style={{
            width: '100%',
            height: 100
          }}
            onChange={onChange}
            defaultValue={toEditorState('@john')}
            suggestions={[
            'Steve',
            'Bret',
            'Thompson',
            'Lewis',
            'David',
            'Marco'
          ]}
            onSelect={onSelect}/>
        </LocaleProvider>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Asynchronous loading'>
        <LocaleProvider locale={enUS}>
          <AsyncMention/>
        </LocaleProvider>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Custom Metion'>
        <LocaleProvider locale={enUS}>
          <CustomNavMention/>
        </LocaleProvider>

      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Icon Image'>
        <LocaleProvider locale={enUS}>
          <CustomNavMentionIcon/>
        </LocaleProvider>

      </Card>
    </Col>
  </Row>
  <Row gutter={16} type="flex" justify="top" align="center">
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Controlled'>
        <LocaleProvider locale={enUS}>
          <Controlled/>
        </LocaleProvider>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='With Form'>
        <LocaleProvider locale={enUS}>
          <FormMention/>
        </LocaleProvider>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Multi-lines Mode'>
        <LocaleProvider locale={enUS}>
          <Mention
            style={{
            width: '100%',
            height: 100
          }}
            onChange={onChange}
            suggestions={[
            'Steve',
            'Bret',
            'Thompson',
            'Lewis',
            'David',
            'Marco'
          ]}
            multiLines/>
        </LocaleProvider>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Popover'>
        <PopoverContainer/>
      </Card>
    </Col>
  </Row>

</div>
export default MentionPage