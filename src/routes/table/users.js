import React, {PropTypes} from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import UserList from '../../components/table/users/list'
import UserSearch from '../../components/table/users/search'
import UserModal from '../../components/table/users/modal'
import {Row, Col} from 'antd';

function Users({location, dispatch, users}) {
  const {
    loading,
    list,
    pagination,
    currentItem,
    modalVisible,
    modalType
  } = users
  const {field, keyword} = location.query

  const userModalProps = {
    item: modalType === 'create'
      ? {}
      : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({type: `users/${modalType}`, payload: data})
    },
    onCancel() {
      dispatch({type: 'users/hideModal'})
    }
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange(page) {
      const {query, pathname} = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize
        }
      }))
    },
    onDeleteItem(id) {
      dispatch({type: 'users/delete', payload: id})
    },
    onEditItem(item) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      fieldsValue.keyword.length
        ? dispatch(routerRedux.push({
          pathname: '/table/users',
          query: {
            field: fieldsValue.field,
            keyword: fieldsValue.keyword
          }
        }))
        : dispatch(routerRedux.push({pathname: '/table/users'}))
    },
    onAdd() {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  const UserModalGen = () => <UserModal {...userModalProps}/>
  

  return (
    <div className='content-inner'>
      <Row>
        <Col xs={24} md={24} lg={24}>
          <UserSearch {...userSearchProps}/>
          <UserList {...userListProps}/>
          <UserModalGen/>
        </Col>

      </Row>

    </div>
  )
}

Users.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({users}) {
  return {users}
}

export default connect(mapStateToProps)(Users)
