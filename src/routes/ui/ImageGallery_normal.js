import React from 'react';
import { Row, Col, Card } from 'antd';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { PhotoSwipeGallery } from 'react-photoswipe';
import MasonryLayout from 'react-masonry-layout'
import styles from './gallery.less';

let items = [
  {
    src: '../../assets/gallery/1.jpg',
    thumbnail: '../../assets/gallery/1.jpg',
    w: 500,
    h: 750,
    title: 'Image 1',
    key: 1,
  },
  {
    src: '../../assets/gallery/2.jpg',
    thumbnail: '../../assets/gallery/2.jpg',
    w: 500,
    h: 750,
    title: 'Image 2',
    key: 1
  },
  {
    src: '../../assets/gallery/3.jpg',
    thumbnail: '../../assets/gallery/3.jpg',
    w: 500,
    h: 750,
    title: 'Image 2',
    key: 3
  },
  {
    src: '../../assets/gallery/4.jpg',
    thumbnail: '../../assets/gallery/4.jpg',
    w: 500,
    h: 750,
    title: 'Image 4',
    key: 4
  },
  {
    src: '../../assets/gallery/5.jpg',
    thumbnail: '../../assets/gallery/5.jpg',
    w: 500,
    h: 750,
    title: 'Image 5', key: 5
  },
  {
    src: '../../assets/gallery/6.jpg',
    thumbnail: '../../assets/gallery/6.jpg',
    w: 500,
    h: 750,
    title: 'Image 6', key: 6
  },
  {
    src: '../../assets/gallery/7.jpg',
    thumbnail: '../../assets/gallery/7.jpg',
    w: 500,
    h: 750,
    title: 'Image 7', key: 7
  },
  {
    src: '../../assets/gallery/8.jpg',
    thumbnail: '../../assets/gallery/8.jpg',
    w: 500,
    h: 750,
    title: 'Image 8', key: 8
  },
  {
    src: '../../assets/gallery/9.jpg',
    thumbnail: '../../assets/gallery/9.jpg',
    w: 500,
    h: 750,
    title: 'Image 9', key: 9
  },
  {
    src: '../../assets/gallery/10.jpg',
    thumbnail: '../../assets/gallery/10.jpg',
    w: 500,
    h: 750,
    title: 'Image 10', key: 10
  },
  {
    src: '../../assets/gallery/11.jpg',
    thumbnail: '../../assets/gallery/11.jpg',
    w: 500,
    h: 750,
    title: 'Image 11', key: 11
  },
  {
    src: '../../assets/gallery/12.jpg',
    thumbnail: '../../assets/gallery/12.jpg',
    w: 500,
    h: 750,
    title: 'Image 12', key: 12
  },
  {
    src: '../../assets/gallery/13.jpg',
    thumbnail: '../../assets/gallery/13.jpg',
    w: 500,
    h: 750,
    title: 'Image 13', key: 13
  },
  {
    src: '../../assets/gallery/14.jpg',
    thumbnail: '../../assets/gallery/14.jpg',
    w: 500,
    h: 750,
    title: 'Image 14', key: 14
  },
  {
    src: '../../assets/gallery/15.jpg',
    thumbnail: '../../assets/gallery/15.jpg',
    w: 500,
    h: 750,
    title: 'Image 15', key: 15
  },
  {
    src: '../../assets/gallery/16.jpg',
    thumbnail: '../../assets/gallery/16.jpg',
    w: 500,
    h: 750,
    title: 'Image 16', key: 16
  },
  
];

let options = {
  resize: true,
};



function Gallery(props) {
  const item = props.item;

  return (

    <Col xs={24} sm={24} md={6} lg={6}>
      <Card bordered={false}>
        <div  className="galleryCards">
          <img src={item.thumbnail} width="100%" />
          <div className="pa-m">
          <h3>Berr Admin </h3>
          <small><a href="https://themeforest.net/user/yellowred/portfolio" target="_blank" rel="noopener noreferrer">Yellow Red Team</a></small>
        </div>
        </div>
        
      </Card>
    </Col>

  );
}


const getThumbnailContent = (item) => {
  return (
    <div>
      <Gallery item={item} />
    </div>

  );
}
const blankPage = () => <div className='content-inner'>
  <Row gutter={5}>

     <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} />
   
  </Row>
</div>



export default blankPage

