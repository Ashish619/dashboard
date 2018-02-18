import React from 'react'
import {
    Row,
    Col,
    Card,
    Icon,
    Tabs,
    Select,
    Button,
    message,
    TreeSelect,
    Transfer
} from 'antd'

const TreeNode = TreeSelect.TreeNode;

const TreeSelectComp = React.createClass({
    getInitialState() {
        return {value: undefined};
    },
    onChange(value) {
        console.log(arguments);
        this.setState({value});
    },
    render() {
        return (
            <TreeSelect
                showSearch
                style={{
                width:'100%'
            }}
                value={this.state.value}
                dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto'
            }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onChange}>
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <TreeNode value="leaf1" title="my leaf" key="random"/>
                        <TreeNode value="leaf2" title="your leaf" key="random1"/>
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeNode
                            value="sss"
                            title={<b style={{ color: '#08c' }} > sss </b>}
                            key="random3"/>
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        );
    }
});

const treeData = [
    {
        label: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                label: 'Child Node1',
                value: '0-0-1',
                key: '0-0-1'
            }, {
                label: 'Child Node2',
                value: '0-0-2',
                key: '0-0-2'
            }
        ]
    }, {
        label: 'Node2',
        value: '0-1',
        key: '0-1'
    }
];

const TreeSelectData = React.createClass({
    getInitialState() {
        return {value: undefined};
    },
    onChange(value) {
        console.log(arguments);
        this.setState({value});
    },
    render() {
        return (<TreeSelect
            style={{
            width:'100%'
        }}
            value={this.state.value}
            dropdownStyle={{
            maxHeight: 400,
            overflow: 'auto'
        }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={this.onChange}/>);
    }
});

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const TreeSelectMultiple = React.createClass({
    getInitialState() {
        return {value: ['0-0-0']};
    },
    onChange(value) {
        console.log('onChange ', value, arguments);
        this.setState({value});
    },
    render() {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            multiple: true,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Please select',
            style: {
                width:'100%'
            }
        };
        return <TreeSelect {...tProps}/>;
    }
});

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1
    });
}

const targetKeys = mockData
    .filter(item => + item.key % 3 > 1)
    .map(item => item.key);



const TransferSearchApp = React.createClass({
    getInitialState() {
        return {mockData: [], targetKeys: []};
    },
    componentDidMount() {
        this.getMock();
    },
    getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({mockData, targetKeys});
    },
    filterOption(inputValue, option) {
        return option
            .description
            .indexOf(inputValue) > -1;
    },
    handleChange(targetKeys) {
        this.setState({targetKeys});
    },
    render() {
        return (<Transfer
            dataSource={this.state.mockData}
            showSearch
            filterOption={this.filterOption}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => item.title}/>);
    }
});




const SelectPage = () => <div>
<Row gutter={10}>
    <Col xs={24} md={12} lg={12}>
         <Card title='Tree Select Basic'>
                <TreeSelectComp/>
            </Card>
            <Card title='Tree Select Data'>
                <TreeSelectData/>
            </Card>
             <Card title='Tree Select Multiple'>
                <TreeSelectMultiple/>
            </Card>
           
    </Col>
    <Col xs={24} md={12} lg={12}>
     
            
         
             <Card title='Transfer Search'>
                <TransferSearchApp/>
            </Card>
    </Col>
    </Row>
</div>
export default SelectPage