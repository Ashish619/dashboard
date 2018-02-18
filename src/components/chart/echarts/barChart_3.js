import React from 'react';
import ReactEcharts from 'echarts-for-react';




var xData = ['RMadrid', 'Barca', 'Chelsea', 'Galatasaray', 'PSG', 'Manu', 'MCity','Roma', 'Juventus', 'Milan','AMadrid','Arsenal'];

var yData = ['Attack', 'Defence', 'Skill','Power', 'Balance', 'Finance', 'Fans','Popularite'];

function random(a,b){
   return Math.round(Math.random()*Math.abs(b-a)+Math.min(a,b));
}

var seriesData=[];


for(var i=0;i<yData.length;i++){
    var data=[];
    for(var j=0;j<xData.length;j++){
        data.push([i,j]);
    }
    seriesData.push(data);
}
for(let i=0;i<seriesData.length;i++){
    seriesData[i]=seriesData[i].map(function(item){
        return [item[1], item[0], random(1,10)];
    })
    seriesData[i]={name:yData[i],type: 'heatmap',data:seriesData[i]}
}


var colorData=["#ffffff","#e8192f","#d6664d","#B9044E","#f0ba2e","#d3ce2b","#169A7f","#0b6573","#1BB3c8"];

const BarChart3 = React.createClass({
  propTypes: {

  },
  getOtion() {
    const option = {
        title:{
            text:'Football Team Analysis'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : { 
                type : 'line'  
            }
        },
        xAxis: {
            name:'',
            type: 'category',
            data: xData
        },
        yAxis: {
            name:'',
            type: 'category',
            data: yData
        },
        visualMap: {
            color:colorData,
            min: 1,
            max: 10,
            calculable: true,
            orient: 'vertical',
            left: 'left',
            bottom: '15%'
        },
        series:seriesData,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    };
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

export default BarChart3;
