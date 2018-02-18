import React from 'react'
import { Search } from '../../components/ui'
import { Table, Row, Col, Card } from 'antd'

const SearchPage = () => <div>
  <Row gutter={32}>
    <Col xs={24} lg={24} md={24}>
      <Card title='Default'>
        <Search />
      </Card>
       <Card title='Size'>
        <Search size='large' style={{marginBottom: 16}} />
        <Search size='small' />
      </Card>
    </Col>
   
    
  </Row>
  
</div>

export default SearchPage
