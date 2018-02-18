import React, { Component } from 'react';
import {  Spin } from 'antd'
import './masonry.less';
import shortid from 'shortid';
import MasonryLayout from 'react-masonry-layout'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      elements: this.generateElements(),
    };
    this.loadMores = this.loadMores.bind(this);
  }


  colors = ['#4D9DE0', '#E40066', '#FB4D3D', '#3BB273', '#7768AE', '#403F4C', '#E84855', '#F9DC5C', '#3185FC', '#B33F62'];

  heights = [200, 300, 300, 400, 400, 450];

  getRandomElement = array => array[Math.floor(Math.random() * array.length)];

  generateElements = () => [...Array(15).keys()].map(() => ({
    key: shortid.generate(),
    color: this.getRandomElement(this.colors),
    height: `${this.getRandomElement(this.heights)}px`,
  }));

  loadMores = () => {

    this.setState(state => ({ isLoading:true }))
    setTimeout(() => this.setState(state => ({ elements: state.elements.concat(this.generateElements()),isLoading:false })), 1000);

  }

  render() {
    return (

      <div className="MasonryApp">
        <div className="container">

          <MasonryLayout 
            id="items"
            infiniteScroll={this.loadMores}
            infiniteScrollDistance={1000}
            infiniteScrollContainer="main_content"
            infiniteScrollSpinner={<Spin className="loading" size="large"></Spin>}
            infiniteScrollLoading={this.state.isLoading}>
            {
              this.state.elements.map(({ key, color, height }, i) => (
                <div key={key} className="card" style={{ background: color, height }}>
                  <h2>{i}</h2>
                </div>
              ))
            }
          </MasonryLayout>
        </div>
      </div>
    );
  }
}

export default App;
