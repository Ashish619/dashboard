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
  Input,Cascader
} from 'antd'


const options = [
  {
    value: 'Level11',
    label: 'Level 1.1',
    children: [
      {
        value: 'Level12',
        label: 'Level 1.2',
        children: [
          {
            value: 'Level131',
            label: 'Level 1.3.1',
            code: 752100
          }, {
            value: 'Level132',
            label: 'Level 1.3.2',
            code: 745800
          }
        ]
      }
    ]
  }, {
    value: 'Level21',
    label: 'Level 2.1',
    children: [
      {
        value: 'Level22',
        label: 'Level 2.2',
        children: [
          {
            value: 'Level231',
            label: 'Level 2.3.1',
            code: 36587
          }, {
            value: 'Level232',
            label: 'Level 2.3.2',
            code: 45875
          }
        ]
      }
    ]
  }
];

const options2 = [
  {
    value: 'Level11',
    label: 'Level 1.1',
    children: [
      {
        value: 'Level12',
        label: 'Level 1.2',
        children: [
          {
            value: 'Level131',
            label: 'Level 1.3.1'
          }, {
            value: 'Level132',
            label: 'Level 1.3.2'
          }
        ]
      }
    ]
  }, {
    value: 'Level21',
    label: 'Level 2.1',
    disabled: true,
    children: [
      {
        value: 'Level22',
        label: 'Level 2.2',
        children: [
          {
            value: 'Level231',
            label: 'Level 2.3.1'
          }, {
            value: 'Level232',
            label: 'Level 2.3.2'
          }
        ]
      }
    ]
  }
];

const options3 = [
  {
    value: 'Level11',
    label: 'Level 1.1',
    isLeaf: false
  }, {
    value: 'Level21',
    label: 'Level 2.1',
    isLeaf: false
  }
];

function onChange(value) {
  message.success(value);
}

const CitySwitcher = React.createClass({
  getInitialState() {
    return {text: 'Unselect'};
  },
  onChange(value, selectedOptions) {
    this.setState({
      text: selectedOptions
        .map(o => o.label)
        .join(', ')
    });
  },
  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
    );
  }
});

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

const displayRender2 = (labels, selectedOptions) => labels.map((label, i) => {
  const option = selectedOptions[i];
  if (i === labels.length - 1) {
    return (
      <span key={option.value}>
        {label}
        (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
      </span>
    );
  }
  return <span key={option.value}>{label}
    /
  </span>;
});

class LazyOptions extends React.Component {
  state = {
    inputValue: '',
    options3
  };
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions
        .map(o => o.label)
        .join(', ')
    });
  }
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1'
        }, {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2'
        }
      ];
      this.setState({
        options3: [...this.state.options3]
      });
    }, 1000);
  }
  render() {
    return (<Cascader
      options={this.state.options3}
      loadData={this.loadData}
      onChange={this.onChange}
      changeOnSelect/>);
  }
}

const CascaderPage = () => 
<div>
  <Row gutter={16} type="flex" justify="top" align="center">
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Basic'>
        <Cascader options={options} onChange={onChange} placeholder="Please select"/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Default Value'>
        <Cascader
          defaultValue={['Level11', 'Level12', 'Level132']}
          options={options}
          onChange={onChange}/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Custom trigger'>
        <CitySwitcher/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Hover'>
        <Cascader
          options={options}
          expandTrigger="hover"
          displayRender={displayRender}
          onChange={onChange}/>
      </Card>
    </Col>
  </Row>
  <Row gutter={16} type="flex" justify="top" align="center">
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Disable Option'>
        <Cascader options={options2} onChange={onChange}/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Change on select'>
        <Cascader options={options} onChange={onChange} changeOnSelect/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Custom Render'>
        <Cascader
          options={options}
          defaultValue={['Level11', 'Level12', 'Level132']}
          displayRender={displayRender2}
          style={{
          width: 270
        }}/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Search'>
        <Cascader
          options={options}
          onChange={onChange}
          placeholder="Please select"
          showSearch/>
      </Card>
    </Col>
  </Row>
  <Row gutter={16} type="flex" justify="left" align="left">
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Load Options Lazily'>
        <LazyOptions/>
      </Card>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6}>
      <Card title='Size'>
        <Cascader size="large" options={options} onChange={onChange}/><br/><br/>
        <Cascader options={options} onChange={onChange}/><br/><br/>
        <Cascader size="small" options={options} onChange={onChange}/><br/><br/>

      </Card>
    </Col>
    </Row>
  </div>
  export default CascaderPage