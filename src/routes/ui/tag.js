import React from 'react'
import './tag.less'
import {
  Row,
  Col,
  Button,
  Card,
  Icon,
  Tag,
  Input,
  Tooltip,
  message
} from 'antd'
function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  message.success('Clicked! But prevent default.');
}

class EditableTagGroup extends React.Component {
  state = {
    tags: [
      'Unremovable', 'Tag 2', 'Tag 3'
    ],
    inputVisible: false,
    inputValue: ''
  };

  handleClose = (removedTag) => {
    const tags = this
      .state
      .tags
      .filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({tags});
  }

  showInput = () => {
    this.setState({
      inputVisible: true
    }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [
        ...tags,
        inputValue
      ];
    }
    console.log(tags);
    this.setState({tags, inputVisible: false, inputValue: ''});
  }

  saveInputRef = input => this.input = input

  render() {
    const {tags, inputVisible, inputValue} = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag
                ? `${tag.slice(0, 20)}...`
                : tag}
            </Tag>
          );
          return isLongTag
            ? <Tooltip title={tag}>{tagElem}</Tooltip>
            : tagElem;
        })}
        {inputVisible && (<Input
          ref={this.saveInputRef}
          type="text"
          size="small"
          style={{
          width: 78
        }}
          value={inputValue}
          onChange={this.handleInputChange}
          onBlur={this.handleInputConfirm}
          onPressEnter={this.handleInputConfirm}/>)}
        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
      </div>
    );
  }
}
const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['Movie', 'Books', 'Music'];
class HotTags extends React.Component {
  state = {
    selectedTags: []
  };

  handleChange(tag, checked) {
    const {selectedTags} = this.state;
    const nextSelectedTags = checked
      ? [
        ...selectedTags,
        tag
      ]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({selectedTags: nextSelectedTags});
  }

  render() {
    const {selectedTags} = this.state;
    return (
      <div>
        <strong>Hots:
        </strong>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}>
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}
class UncontrolledCheckableTag extends React.Component {
  state = {
    checked: false
  };
  handleChange = (checked) => {
    this.setState({checked});
  }

  render() {
    return <CheckableTag
      {...this.props}
      checked={this.state.checked}
      onChange={this.handleChange}/>;
  }
}
const tagPage = () =>< div > <Row gutter={16}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Tags'>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable onClose={log}>Tag 2</Tag>
      <Tag closable onClose={preventDefault}>Prevent Default</Tag>
    </Card>
    <Card title='Add Remove Dynamically'>
      <div>
        <EditableTagGroup/>
      </div>
    </Card>
    <Card title='Checkable Tags'>
      <div>
        <CheckableTag>Unchecked</CheckableTag>
        <CheckableTag checked>Checked</CheckableTag>
        <UncontrolledCheckableTag>Uncontrolled</UncontrolledCheckableTag>
      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Colored Tags'>
      <div>
        <div>
          <Tag color="pink">pink</Tag>
          <Tag color="red">red</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="yellow">yellow</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="purple">purple</Tag>
        </div>
        <div style={{
          marginTop: 24
        }}>
          <Tag color="pink-inverse">pink-inverse</Tag>
          <Tag color="red-inverse">red-inverse</Tag>
          <Tag color="orange-inverse">orange-inverse</Tag>
          <Tag color="yellow-inverse">yellow-inverse</Tag>
          <Tag color="green-inverse">green-inverse</Tag>
          <Tag color="cyan-inverse">cyan-inverse</Tag>
          <Tag color="blue-inverse">blue-inverse</Tag>
          <Tag color="purple-inverse">purple-inverse</Tag>
        </div>
        <div style={{
          marginTop: 24
        }}>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </div>
    </Card>
    <Card title='Hot Tags'>
      <div>
        <HotTags/>
      </div>
    </Card>
  </Col>
</Row> </div>
export default tagPage