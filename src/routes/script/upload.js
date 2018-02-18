import React from 'react'
import {
  Row,
  Col,
  Card,
  Upload,
  Button,
  Icon,
  message,
  Modal
} from 'antd'
import './upload.less'
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
const props3 = {
  name: 'file',
  multiple: true,
  showUploadList: false,
  action: '/upload.do',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
const props1 = {
  action: '/upload.do',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      console.log(info.fileList);
    }
  },
  defaultFileList: [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: './assets/picupload.jpg'
    }, {
      uid: -2,
      name: 'yyy.png',
      status: 'done',
      url: './assets/picupload.jpg'
    }
  ]
};

const MyUpload = React.createClass({
  getInitialState() {
    return {
      fileList: [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: './assets/picupload.jpg'
        }
      ]
    };
  },
  handleChange(info) {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files    Only to show two recent uploaded
    // files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });

    this.setState({fileList});
  },
  render() {
    const props = {
      action: '/upload.do',
      onChange: this.handleChange,
      multiple: true
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload"/>
          upload
        </Button>
      </Upload>
    );
  }
});

const props2 = {
  action: '/upload.do',
  listType: 'picture',
  defaultFileList: [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: './assets/picupload.jpg',
      thumbUrl: './assets/picupload.jpg'
    }, {
      uid: -2,
      name: 'yyy.png',
      status: 'done',
      url: './assets/picupload.jpg',
      thumbUrl: './assets/picupload.jpg'
    }
  ]
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: './assets/picupload.jpg'
      }
    ]
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }

  handleChange = ({fileList}) => this.setState({fileList})

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/upload.do"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}>
          {fileList.length >= 3
            ? null
            : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img
            alt="example"
            style={{
            width: '100%'
          }}
            src={previewImage}/>
        </Modal>
      </div>
    );
  }
}
function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class Avatar extends React.Component {
  state = {};

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
    }
  }

  render() {
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        className="avatar-uploader"
        name="avatar"
        showUploadList={false}
        action="/upload.do"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}>
        {imageUrl
          ? <img src={imageUrl} alt="" className="avatar"/>
          : <Icon type="plus" className="avatar-uploader-trigger"/>
}
      </Upload>
    );
  }
}
const uploadPage = () =>< div > <Row gutter={10}>
  <Col xs={24} md={12} lg={12}>
    <Card title='Upload by clicking'>
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload"/>
            Click to Upload
          </Button>
        </Upload>
      </div>
    </Card>
    <Card title='Set files that have been uploaded'>
      <div>
        <Upload {...props1}>
          <Button>
            <Icon type="upload"/>
            Upload
          </Button>
        </Upload>

      </div>
    </Card>
    <Card title='Complete control over file list'>
      <div>

        <MyUpload/>
      </div>
    </Card>
    <Card title='Basic Semantic Label'>
      <div>
        <div style={{
          marginTop: 16,
          height: 180
        }}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox"/>
            </p>
            < p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly
              prohibit from uploading company data or other band files</p>
          </Dragger>
        </div>
      </div>
    </Card>
  </Col>
  <Col xs={24} md={12} lg={12}>
    <Card title='Avatar'>
      <div>
        <Avatar/>

      </div>
    </Card>
    <Card title='Pictures Wall'>
      <div>
        <PicturesWall/>
      </div>
    </Card>
    <Card title='Pictures with list style'>
      <div>
        <div>
          <Upload {...props2}>
            <Button>
              <Icon type="upload"/>
              upload
            </Button>
          </Upload>
          <br/>
          <br/>
          <Upload {...props2} className="upload-list-inline">
            <Button>
              <Icon type="upload"/>
              upload
            </Button>
          </Upload>
        </div>

      </div>
    </Card>
  </Col>
</Row>

</div>
export default uploadPage