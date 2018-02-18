import React, {Component} from 'react';
import {Row, Col, Card,Form,Select} from 'antd';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';

const rawContentState = {
    "entityMap": {
        "0": {
            "type": "IMAGE",
            "mutability": "MUTABLE",
            "data": {
                "src": "http://i.imgur.com/aMtBIep.png",
                "height": "auto",
                "width": "100%"
            }
        }
    },
    "blocks": [
        {
            "key": "9unl6",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }, {
            "key": "95kn",
            "text": " ",
            "type": "atomic",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [
                {
                    "offset": 0,
                    "length": 1,
                    "key": 0
                }
            ],
            "data": {}
        }, {
            "key": "7rjes",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ]
};

class htmlEditor extends Component {
    state = {
        editorContent: undefined,
        contentState: rawContentState,
        editorState: ''
    };

    onEditorChange = (editorContent) => {
        this.setState({editorContent});
    };

    clearContent = () => {
        this.setState({contentState: ''});
    };

    onContentStateChange = (contentState) => {
        console.log('contentState', contentState);
    };

    onEditorStateChange = (editorState) => {
        this.setState({editorState});
    };

    imageUploadCallBack = file => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID 062f2afb91ec4bc');
        const data = new FormData(); // eslint-disable-line no-undef
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
        });
        xhr.addEventListener('error', () => {
            const error = JSON.parse(xhr.responseText);
            reject(error);
        });
    });

    render() {
        const {editorContent, editorState} = this.state;
        return (
            <div>

                <Row gutter={16}>
                    <Col span={24}>
                        <div>
                            <Card title="Wysiwyg Text Editor" bordered={false}>
                                <Editor
                                    editorState={editorState}
                                    toolbarClassName="home-toolbar"
                                    wrapperClassName="home-wrapper"
                                    editorClassName="home-editor"
                                    onEditorStateChange={this.onEditorStateChange}
                                    toolbar={{
                                    history: {
                                        inDropdown: true
                                    },
                                    inline: {
                                        inDropdown: false
                                    },
                                    list: {
                                        inDropdown: true
                                    },
                                    textAlign: {
                                        inDropdown: true
                                    },
                                    image: {
                                        uploadCallback: this.imageUploadCallBack
                                    }
                                }}
                                    onContentStateChange={this.onEditorChange}
                                    placeholder="Please enter the text ~ ~ try @ Oh, there are surprises"
                                    spellCheck
                                    onFocus={() => {
                                    console.log('focus')
                                }}
                                    onBlur={() => {
                                    console.log('blur')
                                }}
                                    onTab={() => {
                                    console.log('tab');
                                    return true;
                                }}
                                    localization={{
                                    locale: 'en',
                                    translations: {
                                        'generic.add': 'Test-Add'
                                    }
                                }}
                                    mention={{
                                    separator: ' ',
                                    trigger: '@',
                                    caseSensitive: true,
                                    suggestions: [
                                        {
                                            text: 'apple',
                                            value: 'apple',
                                            url: 'apple'
                                        }, {
                                            text: 'banana',
                                            value: 'banana',
                                            url: 'banana'
                                        }, {
                                            text: 'cherry',
                                            value: 'cherry',
                                            url: 'cherry'
                                        }, {
                                            text: 'durian',
                                            value: 'durian',
                                            url: 'durian'
                                        }, {
                                            text: 'eggfruit',
                                            value: 'eggfruit',
                                            url: 'eggfruit'
                                        }, {
                                            text: 'fig',
                                            value: 'fig',
                                            url: 'fig'
                                        }, {
                                            text: 'grapefruit',
                                            value: 'grapefruit',
                                            url: 'grapefruit'
                                        }, {
                                            text: 'honeydew',
                                            value: 'honeydew',
                                            url: 'honeydew'
                                        }
                                    ]
                                }}/>

                                <style>
                                    {`
                                    .home-editor {
                                        min-height: 300px;
                                       
                                    }
                                    .rdw-link-modal{
                                        min-height:250px
                                    }
                                    .rdw-dropdown-selectedtext{
                                        color:#000
                                    }
                                `}</style>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="Synchronous conversion of HTML" bordered={false}>
                            <pre>{draftToHtml(editorContent)}</pre>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="Synchronous conversion of MarkDown" bordered={false}>
                            <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(editorContent)}</pre>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="Synchronous conversion of JSON" bordered={false}>
                            <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(editorContent)}</pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default htmlEditor
