import React from 'react';
import { Row, Col, Card } from 'antd';
import PhotoSwipeGallery from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';


class PhotoGallery extends React.Component {
    state = {
        gallery: null
    };
    componentDidMount() {
    }
    componentWillUnmount = () => {
        this.closeGallery();
    };
    openGallery = (item) => {
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            }
        ];
        const pswpElement = this.pswpElement;
        const options = {
            index: 0,
            arrowKeys: true,
            loop:false,
        };
        this.gallery = new PhotoSwipeGallery( pswpElement, PhotoswipeUIDefault, items, options);
        
        this.gallery.listen('gettingData', (index, item) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function() { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
    render() {
        const imgs = [
            [
                '../../assets/gallery/1.jpg',
                '../../assets/gallery/22.jpg',
                '../../assets/gallery/3.jpg',
                '../../assets/gallery/24.jpg',
                '../../assets/gallery/2.jpg',

            ],
            [
                '../../assets/gallery/4.jpg',
                '../../assets/gallery/5.jpg',
                '../../assets/gallery/23.jpg',
                '../../assets/gallery/6.jpg',
                '../../assets/gallery/25.jpg',

            ],
            [
                '../../assets/gallery/7.jpg',
                '../../assets/gallery/26.jpg',
                '../../assets/gallery/27.jpg',
                '../../assets/gallery/8.jpg',
                '../../assets/gallery/9.jpg',

            ],
            [
                '../../assets/gallery/10.jpg',
                '../../assets/gallery/11.jpg',
                '../../assets/gallery/12.jpg',
                '../../assets/gallery/14.jpg',
                

            ],
            [
                '../../assets/gallery/15.jpg',
                '../../assets/gallery/16.jpg',
                '../../assets/gallery/13.jpg',
                '../../assets/gallery/4.jpg',
                '../../assets/gallery/6.jpg',

            ],
        ];
        const imgsTag = imgs.map(v1 => (
            v1.map(v2 => (
                <div>
                    <Card bordered={false} bodyStyle={{ padding: 0 }}>
                        <div>
                            <img onClick={() => this.openGallery(v2)} alt="example" width="100%" src={v2} />
                        </div>
                        
                    </Card>
                </div>
            ))
        ));
        return (
            <div>
                
                <Row gutter={10}>
                    <Col span={5}>
                        {imgsTag[0]}
                    </Col>
                    <Col span={5}>
                        {imgsTag[1]}
                    </Col>
                    <Col span={5}>
                        {imgsTag[2]}
                    </Col>
                    <Col span={5}>
                        {imgsTag[3]}
                    </Col>
                    <Col span={4}>
                        {imgsTag[4]}
                    </Col>
                </Row>
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>

                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                <div className="pswp__counter" />

                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                                <button className="pswp__button pswp__button--share" title="Share" />

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>

                        </div>

                    </div>

                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}

export default PhotoGallery;