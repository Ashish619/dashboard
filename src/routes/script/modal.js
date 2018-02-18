import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Modal
} from 'antd'
const confirm = Modal.confirm;
const App1 = React.createClass({
  getInitialState() {
    return {modal1Visible: false, modal2Visible: false};
  },
  setModal1Visible(modal1Visible) {
    this.setState({modal1Visible});
  },
  setModal2Visible(modal2Visible) {
    this.setState({modal2Visible});
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>Modal dialog at 20px to Top</Button>
        <Modal
          okText="OK"
          cancelText="Cancel"
          title="20px to Top"
          style={{
          top: 20
        }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <br/><br/>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
        <Modal
          okText="OK"
          cancelText="Cancel"
          title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
});
const Test = React.createClass({
  getInitialState() {
    return {ModalText: 'Content of the modal dialog', visible: false};
  },
  showModal() {
    this.setState({visible: true});
  },
  handleOk() {
    this.setState({ModalText: 'The modal dialog will be closed after two seconds', confirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false, confirmLoading: false});
    }, 2000);
  },
  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({visible: false});
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal
          okText="OK"
          cancelText="Cancel"
          title="Title of the modal dialog"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}>
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }
});
function showConfirm() {
  confirm({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText: 'OK',
    cancelText: 'Cancel',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5
          ? resolve
          : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {}
  });
}
function info() {
  Modal.info({title: 'This is a notification message', okText: 'OK', cancelText: 'Cancel', content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ), onOk() {}});
}

function success() {
  Modal.success({title: 'This is a success message', content: 'some messages...some messages...', okText: 'OK', cancelText: 'Cancel'});
}

function error() {
  Modal.error({title: 'This is an error message', content: 'some messages...some messages...', okText: 'OK', cancelText: 'Cancel'});
}

function warning() {
  Modal.warning({title: 'This is a warning message', content: 'some messages...some messages...', okText: 'OK', cancelText: 'Cancel'});
}

const App = React.createClass({
  getInitialState() {
    return {visible: false};
  },
  showModal() {
    this.setState({visible: true});
  },
  handleOk() {
    console.log('Clicked OK');
    this.setState({visible: false});
  },
  handleCancel(e) {
    console.log(e);
    this.setState({visible: false});
  },
  render() {
    return (
      <div>

        <Row gutter={10}>
          <Col xs={24} md={12} lg={12}>
            <Card title='Basic Modal'>
              <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
              <Modal
                okText="OK"
                cancelText="Cancel"
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
            </Card>
            <Card title='Asynchronously Close Modal'>
              <Test/>
            </Card>
            <Card title='Confirmation Modal Dialog'>
              <Button onClick={showConfirm}>
                Confirmation modal dialog
              </Button>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <Card title='Information Modal Dialog'>
              <Button onClick={info}>Info</Button>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
            </Card>
            <Card title='To customize the position of modal'>
              <App1/>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
});

export default App