import React from 'react'
import {Row, Col, Card, Badge,Button} from 'antd'
import './profile.less'

const style={
    profileHeader:{
         background: 'url(./assets/2.jpg) no-repeat',
         
        width: '100%',
        backgroundSize: 'cover',
        height: '250px',
    }
}
const profilePage = () => <div className="profile-page">
    <Row gutter={24}>
        <Col xs={24} md={6} lg={6} className="infoCol">
            <div className="profile">
                <div className="profile-header" style={style.profileHeader}>
                    <img src="./assets/3.jpg"/>
                </div>
                <div className="profileInfo">
                    <h1>Samantha Grey</h1>
                    <p>UX Designer . London, England</p>

                    <h1 className="profileIntro">INTRO</h1>
                    <p className="profileAbout">User experinces become more inportant than products;
                        companies now have to consider how products and services enhance specific
                        lifestyles and workflows</p>
                    <h1 className="profilePhotoHeader">PHOTOS</h1>
                    <div className="profilePhotos">
                        <img src="./assets/people/3.jpg"/>
                        <img src="./assets/people/10.jpg"/>
                        <Badge count={100}>
                            <a href="#" className="head-example"/>
                        </Badge>
                    </div>
                    <h1 className="profilefirendHeader">FRIENDS</h1>
                    <div className="profilePhotos">
                        <img src="./assets/people/1.jpg"/>
                        <img src="./assets/people/2.jpg"/>
                        <img src="./assets/people/7.jpg"/>
                        <img src="./assets/people/12.jpg"/>

                        <Badge count={100}>
                            <a href="#" className="head-example"/>
                        </Badge>
                    </div>
                </div>
            </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
            <Card bordered={false}>
            <div className="postInput">
             <img src="./assets/3.jpg"/> <b>What's on your mind?</b> <Button type="primary" icon="rocket">POST</Button>
            </div>
            </Card>
            <Card bordered={false}>
            <div className="postContent">
            <img className="contentImage" src="./assets/3.jpg"/><p> Samantha Grey <small>with</small> Thomas Wood <br/>January 18, 2017 . Italy</p>
               <img className="postImage" src="./assets/4.jpg"/>
            </div></Card>
            <Card bordered={false}>...</Card>

        </Col>
        <Col xs={24} md={6} lg={6}>
            <div className="messenger">
                <ul className="userList">
                    <li><img src="./assets/people/1.jpg"/>
                        <b>Thomas Wood</b>
                    </li>
                    <li><img src="./assets/people/2.jpg"/>
                        <b>Valentine Basser</b>
                    </li>
                    <li><img src="./assets/people/3.jpg"/>
                        <b>Thomas Ronne</b>
                    </li>
                    <li><img src="./assets/people/4.jpg"/>
                        <b>Patricia Dedd</b>
                    </li>
                    <li><img src="./assets/people/5.jpg"/>
                        <b>Ousamma Ammar</b>
                    </li>
                    <li><img src="./assets/people/6.jpg"/>
                        <b>Vincent Naigard</b>
                    </li>
                    <li><img src="./assets/people/7.jpg"/>
                        <b>Theo Walcott</b>
                    </li>
                    <li><img src="./assets/people/8.jpg"/>
                        <b>Adrien Dode</b>
                    </li>
                    <li><img src="./assets/people/9.jpg"/>
                        <b>Audry Hepn</b>
                    </li>

                </ul>
            </div>
        </Col>
    </Row>
</div>

export default profilePage
