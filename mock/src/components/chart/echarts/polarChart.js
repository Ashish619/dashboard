import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';



var data = [];
for (var i = 0; i <= 200; i++) {
  var t = i / 10 * Math.PI;
  var r = Math.sin(4 * t) * Math.cos(10 * t);
  data.push([r, i]);
}


const PolarChart = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
      backgroundColor: "#fff",
      color: ['#F9FF00'],
      
      polar: {
          center: ['50%', '54%']
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: "#403F4C",
                  textStyle: {
                      color: "#fff"
                  }
              }
  
          }
      },
      angleAxis: {
          type: 'value',
          startAngle: 0,
          axisLine: {
              lineStyle: {
                  color: '#403F4C',
              }
          }
      },
      radiusAxis: {
          min: 0
      },
      series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          lineStyle: {
              normal: {
                color: new echarts
                .graphic
                .LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0.1,
                    color: '#48D1CC'
                  }, {
                    offset: 1,
                    color: '#FF8C00'
                  }
                ]),
  
              },
          },
          showSymbol: false,
          data: data
  
      }],
      animationDuration: 2000
  };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{height: '450px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default PolarChart;
