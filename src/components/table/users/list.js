import React from 'react'
import {Table, Dropdown, Button, Menu, Icon, Modal,LocaleProvider} from 'antd'
import {TweenOneGroup} from 'rc-tween-one'
import styles from './list.less'
const confirm = Modal.confirm
import enUS from 'antd/lib/locale-provider/en_US';


class list extends React.Component {
  constructor (props) {
    super(props)
    this.enterAnim = [
      {
        opacity: 0,
        x: 30,
        backgroundColor: '#fffeee',
        duration: 0
      }, {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 250,
        ease: 'easeOutQuad',
        onComplete: this.onEnd
      }, {
        opacity: 1,
        x: 0,
        duration: 250,
        ease: 'easeOutQuad'
      }, {
        delay: 1000,
        backgroundColor: '#fff'
      }
    ]
    this.leaveAnim = [
      {
        duration: 250,
        opacity: 0
      }, {
        height: 0,
        duration: 200,
        ease: 'easeOutQuad'
      }
    ]
    const {current} = this.props.pagination
    this.currentPage = current
    this.newPage = current
    this.state = {
      width: 800
    }
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

  getBodyWrapper = (body) => {
    // Switch paging to remove animation
    if (this.currentPage !== this.newPage) {
      this.currentPage = this.newPage
      return body
    }
    return (
      <TweenOneGroup component='tbody' className={body.props.className} enter={this.enterAnim} leave={this.leaveAnim} appear={false}>
        {body.props.children}
      </TweenOneGroup>
    )
  }

  handleMenuClick = (record, e) => {
  const {onDeleteItem, onEditItem} = this.props
  if (e.key === '1') {
    onEditItem(record)
  } else if (e.key === '2') {
    confirm({
      title: 'Are you sure you want to delete this record?',
      onOk () {
        onDeleteItem(record.id)
      }
    })
  }
}

  onEnd = (e) => {
    e.target.style.height = 'auto'
  }

  async pageChange (pagination) {
    await this.props.onPageChange(pagination)
    this.newPage = pagination.current
  }

  render () {
    const {
      loading,
      dataSource,
      pagination,
      onDeleteItem,
      onEditItem
    } = this.props

     const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img width={30} src={text} />
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'User Name',
      dataIndex: 'nickName',
      key: 'nickName'
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text) => <span>{text} Age</span>
    }, {
      title: 'Gender',
      dataIndex: 'isMale',
      key: 'isMale',
      render: (text) => <span>{text
            ? 'Male'
            : 'Female'}</span>
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: 'Crate Date',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
         return (<Dropdown overlay={<Menu onClick={this.handleMenuClick.bind(null, record)}>
           <Menu.Item key='1'>Edit</Menu.Item>
           <Menu.Item key='2'>Delete</Menu.Item>
         </Menu>}>
           <Button style={{ border: 'none' }}>
             <Icon style={{ marginRight: 2 }} type='bars' />
             <Icon type='down' />
           </Button>
         </Dropdown>)
       }
    }
  ]
   
    return <div>
      <LocaleProvider locale={enUS}>
      <Table className={styles.table} bordered  columns={columns} dataSource={dataSource} loading={loading} onChange={::this.pageChange} pagination={pagination} simple rowKey={record => record.id} getBodyWrapper={this.getBodyWrapper}   scroll={{ x: this.state.width }} /></LocaleProvider>
    </div>
  }
}

export default list