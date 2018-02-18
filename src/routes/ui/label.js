import React from 'react'
import {
  Table,
  Row,
  Col,
  Card,
  Tag,
  Icon
} from 'antd'
import {SemanticLabel, SemanticImageLabel} from '../../components/semanticui/semantic-label'
const LabelPage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Basic Semantic Label'>
      <SemanticLabel icon="mail" text="16"/>
      <SemanticLabel icon="smile-o" text="100 Smiling Face"/>
      <SemanticLabel icon="notification" text="46" link="#" linkTitle="View"/>
      <SemanticLabel icon="link" text="86"/>
      <SemanticLabel icon="bulb" text="16"/>
      <SemanticLabel icon="rocket" text="16"/>
      <SemanticLabel icon="heart-o" text="16"/>
      <SemanticLabel icon="star-o" text="16"/>

    </Card>
    <Card title='Label With Image'>
      <SemanticImageLabel
        type="blue"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/christian.jpg"/>
      <SemanticImageLabel
        type="teal"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/jenny.jpg"/>
      <SemanticImageLabel
        type="red"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/veronika.jpg"/>
      <SemanticImageLabel
        type="yellow"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/nan.jpg"/>
      <SemanticImageLabel
        type="grey"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/zoe.jpg"/>
      <SemanticImageLabel
        type="green"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/ade.jpg"/>
      <SemanticImageLabel
        type="brown"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/elliot.jpg"/>
      <SemanticImageLabel
        type="pink"
        text="Adrian"
        detailText="Engineer"
        src="http://semantic-ui.com/images/avatar/small/stevie.jpg"/>

    </Card>
    <Card title='Label With Pointing'>
      <SemanticLabel type="pointing basic" text="Basic Pointing"/>
      <SemanticLabel type="pointing red basic" text="Basic Red Pointing"/>
      <SemanticLabel type="pointing blue basic" text="Basic Blue Pointing"/>
      <SemanticLabel type="pointing teal basic" text="Basic Teal Pointing"/>

    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Colored Label'>
      <SemanticLabel type="red" text="Red Label"/>
      <SemanticLabel type="orange" text="Orange Label"/>
      <SemanticLabel type="yellow" text="Yellow Label"/>
      <SemanticLabel type="olive" text="Olive Label"/>
      <SemanticLabel type="green" text="Green Label"/>
      <SemanticLabel type="teal" text="Teal Label"/>
      <SemanticLabel type="blue" text="Blue Label"/>
      <SemanticLabel type="violet" text="Violet Label"/>
      <SemanticLabel type="purple" text="Purple Label"/>
      <SemanticLabel type="pink" text="Pink Label"/>
      <SemanticLabel type="brown" text="Brown Label"/>
      <SemanticLabel type="grey" text="Grey Label"/>
      <SemanticLabel type="black" text="Black Label"/>

    </Card>
    <Card title='Sized Label'>
      <SemanticLabel type="mini" text="Mini"/>
      <SemanticLabel type="tiny" text="Tiny"/>
      <SemanticLabel type="small" text="Small"/>
      <SemanticLabel type="medium" text="Medium"/>
      <SemanticLabel type="big" text="Big"/>
      <SemanticLabel type="huge" text="Huge"/>
      <SemanticLabel type="massive" text="Massive"/>

    </Card>
  </Col>
</Row> </div>
 export default LabelPage