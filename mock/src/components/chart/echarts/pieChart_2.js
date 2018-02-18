import React from 'react';
import ReactEcharts from 'echarts-for-react';

var placeHolderStyle = {
  normal: {
      label: {
          show: false,
          position: "center"
      },
      labelLine: {
          show: false
      },
      color: "#dedede",
      borderColor: "#dedede",
      borderWidth: 0
  },
  emphasis: {
      color: "#dedede",
      borderColor: "#dedede",
      borderWidth: 0
  }
};

const PieChart2 = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      backgroundColor: '#fff',
      color: ['#DB7093', '#fff', '#FF8C00', '#fff', "#48D1CC"],
      legend: [{
          orient: '',
          icon: 'circle',
          left: 'left',
          top: 'center',
          data: ['Excellent', 'Score', 'Passing']
      }],
      
      series: [{
          name: 'Value',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false, 
          radius: [199, 200],
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      textStyle: {
                          fontSize: 20
                      },
                      position: 'outside'
                  },
                  labelLine: {
                      show: true,
                      length: 100,
                      smooth: 0.5
                  },
                  borderWidth: 8,
                  shadowBlur: 40,
                  borderColor: "#DB7093",
                  shadowColor: 'rgba(0, 0, 0, 0)'
              }
          },
          
          data: [{
              value: 7.4,
              name: 'Passing：74%'
          }, {
              value: 2.6,
              name: '',
              itemStyle: placeHolderStyle
          }]
      }, {
          name: 'White',
          type: 'pie',
          clockWise: false,
          radius: [180, 180],
          hoverAnimation: false,
          data: [{
              value: 1
          }]
      }, {
          name: 'Value',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [159, 160],
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      textStyle: {
                          fontSize: 20
                      },
                  },
                  labelLine: {
                      show: true,
                      length: 100,
                      smooth: 0.5
                  },
                  borderWidth: 8,
                  shadowBlur: 40,
                  borderColor: "#FF8C00",
                  shadowColor: 'rgba(0, 0, 0, 0)'
              }
          },
         
          data: [{
              value: 7.1,
              name: 'Score：71%'
          }, {
              value: 2.9,
              name: '',
              itemStyle: placeHolderStyle
          }]
      }, {
          name: 'White',
          type: 'pie',
          clockWise: false,
          hoverAnimation: false,
          radius: [140, 140],
          data: [{
              value: 1
          }]
      }, {
          name: 'Value',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [119, 120],
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      textStyle: {
                          fontSize: 20
                      },
                  },
                  labelLine: {
                      show: true,
                      length: 100,
                      smooth: 0.5
                  },
                  borderWidth: 8,
                  shadowBlur: 40,
                  borderColor: "#48D1CC",
                  shadowColor: 'rgba(0, 0, 0, 0)'
              }
          },
       
          data: [{
              value: 3.6,
              name: 'Excellent：36%',
              
          }, {
              value: 6.4,
              name: '',
              itemStyle: placeHolderStyle
          }]
      }, {
          type: 'pie',
          color: ['#48D1CC', '#FF8C00', "	#DB7093"],
          data: [{
              value: '',
              name: 'Excellent'
          }, {
              value: '',
              name: 'Score'
          }, {
              value: '',
              name: 'Passing'
          }]
      }, {
          name: 'White',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [100, 100],
          label: {
              normal: {
                  position: 'center'
              }
          },
          data: [{
              value: 1,
              label: {
                  normal: {
                      formatter: 'Biology Level',
                      textStyle: {
                          color: '#666666',
                          fontSize: 26
                      }
                  }
              }
          }, {
              tooltip: {
                  show: false
              },
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

export default PieChart2;
