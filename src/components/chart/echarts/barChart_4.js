import React from 'react';
import ReactEcharts from 'echarts-for-react';


var myData = ['Paris', 'Istanbul', 'New York', 'Roma', 'Milano', 'Amsterdam', 'Oslo', 'Kahire', 'Prag', 'Sidney', 'Kyoto', 'Viana', 'Floransa', 'Berlin', 'Hong Kong', 'Boston'];
var databeast = {
    1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],

};
var databeauty = {
    1: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    2: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    3: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    4: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    5: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    6: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    7: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    8: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    9: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    10: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],

};
var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BarChart1 = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
      baseOption: {
          backgroundColor: '#000',
          timeline: {
              show: true,
              axisType: 'category',
              tooltip: {
                  show: true,
                  formatter: function(params) {
                      console.log(params);
                      return params.name + 'Culture';
                  }
              },
              autoPlay: true,
              currentIndex: 6,
              playInterval: 1000,
              label: {
                  normal: {
                      show: true,
                      interval: 'auto',
                      formatter: '{value} %',
                  },
              },
              data: [],
          },
          title: {
          
              textStyle: {
                  color: '#fff',
                  fontSize: 16,
              },
              subtext: '',
          },
          legend: {
              data: ['Woman', 'Man'],
              top: 4,
              right: '20%',
              textStyle: {
                  color: '#fff',
              },
          },
          tooltip: {
              show: true,
              trigger: 'axis',
              formatter: '{b}{a}: {c}',
              axisPointer: {
                  type: 'shadow',
              }
          },
          
          toolbox:{
              right:20,
              feature:{
                  saveAsImage: {},
                  restore: {},
                  dataView: {},
                  dataZoom: {},
                  magicType: {
                      type:['line','bar']
                  },
                 
              }
          },
          
          grid: [{
              show: false,
              left: '4%',
              top: 60,
              bottom: 60,
              containLabel: true,
              width: '46%',
          }, {
              show: false,
              left: '50.5%',
              top: 80,
              bottom: 60,
              width: '0%',
          }, {
              show: false,
              right: '4%',
              top: 60,
              bottom: 60,
              containLabel: true,
              width: '46%',
          }, ],
  
          xAxis: [
              {
              type: 'value',
              inverse: true,
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              position: 'top',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#B2B2B2',
                      fontSize: 12,
                  },
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#1F2022',
                      width: 1,
                      type: 'solid',
                  },
              },
          }, {
              gridIndex: 1,
              show: false,
          }, {
              gridIndex: 2,
              type: 'value',
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              position: 'top',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#B2B2B2',
                      fontSize: 12,
                  },
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#1F2022',
                      width: 1,
                      type: 'solid',
                  },
              },
          }, ],
          yAxis: [{
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false,
                  margin: 8,
                  textStyle: {
                      color: '#9D9EA0',
                      fontSize: 12,
                  },
  
              },
              data: myData,
          }, {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#9D9EA0',
                      fontSize: 12,
                  },
  
              },
              data: myData.map(function(value) {
                  return {
                      value: value,
                      textStyle: {
                          align: 'center',
                      }
                  }
              }),
          }, {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false,
                  textStyle: {
                      color: '#9D9EA0',
                      fontSize: 12,
                  },
  
              },
              data: myData,
          }, ],
          series: [],
  
      },
  
      options: [],
  
  
  };
  
  for (var i = 0; i < timeLineData.length; i++) {
      option.baseOption.timeline.data.push(timeLineData[i]);
      option.options.push({
          
          series: [{
                  name: '',
                  type: 'bar',
                  barGap: 20,
                  barWidth: 20,
                  label: {
                      normal: {
                          show: false,
                      },
                      emphasis: {
                          show: true,
                          position: 'left',
                          offset: [0, 0],
                          textStyle: {
                              color: '#fff',
                              fontSize: 14,
                          },
                      },
                  },
                  itemStyle: {
                      normal: {
                          color: '#659F83',
                      },
                      emphasis: {
                          color: '#08C7AE',
                      },
                  },
                  data: databeast[timeLineData[i]],
              },
  
  
              {
                  name: '',
                  type: 'bar',
                  barGap: 20,
                  barWidth: 20,
                  xAxisIndex: 2,
                  yAxisIndex: 2,
                  label: {
                      normal: {
                          show: false,
                      },
                      emphasis: {
                          show: true,
                          position: 'right',
                          offset: [0, 0],
                          textStyle: {
                              color: '#fff',
                              fontSize: 14,
                          },
                      },
                  },
                  itemStyle: {
                      normal: {
                          color: '#F68989',
                      },
                      emphasis: {
                          color: '#F94646',
                      },
                  },
                  data: databeauty[timeLineData[i]],
              }
          ]
      });
  }
  
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{height: '600px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default BarChart1;
