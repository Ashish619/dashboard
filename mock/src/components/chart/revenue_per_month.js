import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const RevenuePerMonth = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      
      "tooltip": {
          "trigger": 'item',
          "formatter": "{a} : ({d}%)"
      },
      "series": [{
          "name": "Per Month",
          "center": [
              "50%",
              "50%"
          ],
          "radius": [
              "49%",
              "50%"
          ],
          "clockWise": false,
          "hoverAnimation": false,
          "type": "pie",
          "data": [{
              "value": 84,
              "name": "",
              "label": {
                  "normal": {
                      "show": true,
                      "formatter": '{d} %',
                      "textStyle": {
                          "fontSize": 36,
                          "fontWeight": "bold"
                      },
                      "position": "center"
                  }
              },
              "labelLine": {
                  "show": false
              },
              "itemStyle": {
                  "normal": {
                      "color": "#5886f0",
                      "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#f8a5c3'
                      }, {
                          offset: 1,
                          color: '#fdbda1'
                      }]),
                      "borderWidth": 25
                  },
                  "emphasis": {
                      "color": "#5886f0",
                      "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#85b6b2'
                      }, {
                          offset: 1,
                          color: '#6d4f8d'
                      }]),
                      "borderWidth": 25
                  }
              },
          }, {
              "name": " ",
              "value": 16,
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      },
                      "color": 'rgba(0,0,0,0)',
                      "borderColor": 'rgba(0,0,0,0)',
                      "borderWidth": 0
                  },
                  "emphasis": {
                      "color": 'rgba(0,0,0,0)',
                      "borderColor": 'rgba(0,0,0,0)',
                      "borderWidth": 0
                  }
              }
          }]
      }, {
          "name": "Revenue",
          "center": [
              "50%",
              "50%"
          ],
          "radius": [
              "59%",
              "60%"
          ],
          "clockWise": false,
          "hoverAnimation": false,
          "type": "pie",
          "data": [{
              "value": 84,
              "name": "",
              "label": {
                  "normal": {
                      "show": true,
                      "formatter": '{d} %',
                      "textStyle": {
                          "fontSize": 36,
                          "fontWeight": "bold"
                      },
                      "position": "center"
                  }
              },
              "labelLine": {
                  "show": false
              },
              "itemStyle": {
                  "normal": {
                      "color": "#5886f0",
                      "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#fdeef1'
                      }, {
                          offset: 1,
                          color: '#fdeded'
                      }]),
                      "borderWidth": 1
                  },
                  "emphasis": {
                      "color": "#5886f0",
                      "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#85b6b2'
                      }, {
                          offset: 1,
                          color: '#6d4f8d'
                      }]),
                      "borderWidth": 1
                  }
              },
          }, {
              "name": " ",
              "value": 16,
              "itemStyle": {
                  "normal": {
                      "label": {
                          "show": false
                      },
                      "labelLine": {
                          "show": false
                      },
                      "color": 'rgba(0,0,0,0)',
                      "borderColor": 'rgba(0,0,0,0)',
                      "borderWidth": 0
                  },
                  "emphasis": {
                      "color": 'rgba(0,0,0,0)',
                      "borderColor": 'rgba(0,0,0,0)',
                      "borderWidth": 0
                  }
              }
          }]
      }]
  };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{
              height: '450px',
              width: '100%',
            }}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default RevenuePerMonth;

