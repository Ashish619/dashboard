import React, {Component} from 'react'

import {Row, Col, Tabs} from 'antd'
import MediaPlayer from '../../components/MediaPlayer'
import VideoPlayer from '../../components/MediaPlayer/VideoPlayer'
import AudioPlayer from '../../components/MediaPlayer/AudioPlayer'
import CirclePlayer from '../../components/MediaPlayer/CirclePlayer'

const TabPane = Tabs.TabPane

const playMediaList = [
  { src: 'https://media.w3.org/2010/05/sintel/trailer.mp4', label: 'Trailer 1' },
  { src: 'http://sachinchoolur.github.io/lightGallery/static/videos/video2.mp4', label: 'Trailer 2' },
  { src: 'http://sachinchoolur.github.io/lightGallery/static/videos/video1.mp4', label: 'Trailer 3' },
  { src: 'https://youtu.be/kJQP7kiw5Fk', label: 'Despacito (Youtube)' },
  { src: 'https://www.youtube.com/watch?v=U66ixhdbxEI', label: 'Tarkan - Yolla (Youtube)' }
]

const playAudioList = [
  { src: 'https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8', label: 'mp3-preview-first' },
  { src: 'http://www.noiseaddicts.com/samples_1w72b820/3890.mp3', label: 'samples' },
  { src: 'https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8', label: 'mp3-preview-last' }
]

class MediaPlayerIndex extends Component {

  render() {
    return (
      <Row>
        <Col span={16} offset={4}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="MediaPlayer" key="1">
              <MediaPlayer playlist={playMediaList} />
            </TabPane>
            <TabPane tab="VideoPlayer" key="2">
              <VideoPlayer src="http://sachinchoolur.github.io/lightGallery/static/videos/video4.mp4" autoPlay={false}/>
            </TabPane>
            <TabPane tab="AudioPlayer" key="3">
              <AudioPlayer src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8" autoPlay={false} />
            </TabPane>
            <TabPane tab="CirclePlayer" key="4">
              <CirclePlayer src="https://p.scdn.co/mp3-preview/f83458d6611ae9589420f71c447ac9d2e3047cb8" autoPlay={false}/>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

export default MediaPlayerIndex