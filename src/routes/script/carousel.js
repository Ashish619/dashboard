import React from 'react'
import {Table, Row, Col, Carousel, Card} from 'antd'
import './carousel.less'
function onChange(a, b, c) {
  console.log(a, b, c);
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 4
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const basicSetings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 4
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};
const carouselPage = () =>< div > <Row gutter={16} className="carouselPage">
  <Col md={6} lg={6} xs={24}>
    <Card title='Basic Carousel'>
      <Carousel afterChange={onChange} {...basicSetings}>
        <div><img src="./assets/1.jpg"/></div>
        <div><img src="./assets/2.jpg"/></div>
        <div><img src="./assets/3.jpg"/></div>
        <div><img src="./assets/4.jpg"/></div>
      </Carousel>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card title='Vertical Carousel'>
      <Carousel vertical="true">
        <div><img src="./assets/1.jpg"/></div>
        <div><img src="./assets/2.jpg"/></div>
        <div><img src="./assets/3.jpg"/></div>
        <div><img src="./assets/4.jpg"/></div>
      </Carousel>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card title='Fade In Effect'>
      <Carousel effect="fade">
        <div><img src="./assets/1.jpg"/></div>
        <div><img src="./assets/2.jpg"/></div>
        <div><img src="./assets/3.jpg"/></div>
        <div><img src="./assets/4.jpg"/></div>
      </Carousel>
    </Card>
  </Col>
  <Col md={6} lg={6} xs={24}>
    <Card title='Auto Start'>
      <Carousel autoplay>
        <div><img src="./assets/1.jpg"/></div>
        <div><img src="./assets/2.jpg"/></div>
        <div><img src="./assets/3.jpg"/></div>
        <div><img src="./assets/4.jpg"/></div>
      </Carousel>
    </Card>
  </Col>
</Row> < Row className = "carouselPageRtl" > <Col md={24} lg={24} xs={24}>
  <Card>
    <Carousel {...settings}>
      <div><img src="./assets/1.jpg"/></div>
      <div><img src="./assets/2.jpg"/></div>
      <div><img src="./assets/3.jpg"/></div>
      <div><img src="./assets/4.jpg"/></div>
    </Carousel>
  </Card>
</Col> </Row>
</div>
 export default carouselPage
