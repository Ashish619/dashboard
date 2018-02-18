import React from 'react'
import {
  Table,
  Row,
  Col,
  Icon,
  Calendar,
  LocaleProvider,
  Radio,
  Button,
  Card
} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
import deDE from 'antd/lib/locale-provider/de_DE';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import frBE from 'antd/lib/locale-provider/fr_BE';

import styles from './calendar.less'
import {color} from '../../utils'

function onPanelChange(value, mode) {
  //console.log(value, mode);
}

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'normal',
          content: 'This is usual event.'
        }
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'normal',
          content: 'This is usual event.'
        }, {
          type: 'error',
          content: 'This is error event.'
        }
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event'
        }, {
          type: 'normal',
          content: 'This is very long usual event。。....'
        }, {
          type: 'error',
          content: 'This is error event 1.'
        }, {
          type: 'error',
          content: 'This is error event 2.'
        }, {
          type: 'error',
          content: 'This is error event 3.'
        }, {
          type: 'error',
          content: 'This is error event 4.'
        }
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => <li key={item.content}>
        <span className={`event-${item.type}`}>●</span>
        {item.content}
      </li>)
}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num
    ? <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    : null;
}

const CalendarPage = () =><div> <Row gutter={16}>
  <Col xs={24} lg={6} md={6}>
    <div style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16 }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </div>

  </Col>
  <Col xs={24} lg={6} md={6}>
     <div style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16,background:color.stil_de_gran_yellow }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </div>

  </Col>
  <Col xs={24} lg={6} md={6}>
    <div style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16,background:color.tumblewed }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </div>

  </Col>
  <Col xs={24} lg={6} md={6}>
     <div style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16,background:color.sky }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </div>

  </Col>
  
  <Col  xs={24} lg={24} md={24}>
 <div className="fullCalendar" style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16 }}>
    <Calendar onPanelChange={onPanelChange}/>
 </div>
</Col>
<Col xs={24} lg={24} md={24}>
  <div className="fullCalendar" style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4,marginBottom:16 }}>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} /> </div> </Col>
</Row> </div>



const App = React.createClass({
  getInitialState() {
    return {locale: enUS};
  },
  changeLocale(e) {
    const localeValue = e.target.value;
    this.setState({locale: localeValue});
  
  },
  render() {
    return (
      <div>
        <div className="change-locale" style={{
          marginBottom: 20
        }}>
          <span style={{
            marginRight: 16
          }}>Change locale of components:
          </span>
          <Radio.Group defaultValue={enUS} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>En</Radio.Button>
            <Radio.Button key="cn">中文</Radio.Button>
            <Radio.Button key="de" value={deDE}>De</Radio.Button>
            <Radio.Button key="ru" value={ruRU}>Ru</Radio.Button>
            <Radio.Button key="fr" value={frBE}>Fr</Radio.Button>

          </Radio.Group>
        </div>
        <LocaleProvider locale={this.state.locale}><CalendarPage/></LocaleProvider>
      </div>
    );
  }
});
export default App