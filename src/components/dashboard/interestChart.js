import ReactEcharts from 'echarts-for-react';

import React from 'react'



function InterestChart(props) {
    if (props.loading) { return null; }
    else {

        let propData = props.data;
        let data = [];


        propData.forEach((val, i) => {
            data.push(Object.assign({
                name: val['page'],
                value: val[props.name]

            }));

        })

        function getPieChartOtion() {
            const option = {
                backgroundColor: 'transparent',
                title: {
                    text: '',
                    subtext: '',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br />{b} : {c} ({d}%)',
                },

                toolbox: {
                    show: false,
                    feature: {

                        magicType: {
                            show: true,
                            type: ['pie', 'funnel'],
                        },
                        restore: { show: true },
                        saveAsImage: { show: true },
                    },
                },
                color: ['#EAC435', '#345995', '#E40066', '#03CEA4', '#FB4D3D', '#CCC', '#FA7921', '#1B998B'],

                calculable: true,
                series: [
                    {
                        name: 'Page Level Intrests',
                        type: 'pie',
                        radius: ['30%', '70%'],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        width: '100%',
                        height: '100%',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                },
                                labelLine: {
                                    show: true,
                                    smooth: 0.9,
                                    length: 5,
                                    length2: 10,
                                },
                                borderWidth: 0,
                                shadowBlur: 30,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                },
                                labelLine: {
                                    show: true,
                                },
                            },
                        },
                        data: data
                    }

                ],
            };
            return option;
        }



        return (
            <ReactEcharts
                option={getPieChartOtion()}
                style={{
                    height: '300px',
                    width: '100%',
                   
                }}
                className="react_for_echarts"
            />
        )
    }
}

export default InterestChart
