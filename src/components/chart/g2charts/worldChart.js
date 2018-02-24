import createG2 from 'g2-react';
import React from 'react';
import { Stat } from 'g2';

const mapData = require('./data/world-geo.json');

let userData = [];
const features = mapData.features;
for (let i = 0; i < features.length; i++) {
    const name = features[i].properties.name;
    userData.push({
        name,
        value: 0,
    });
}





const MyComponent = React.createClass({

    getInitialState() {
        return {
            userData,
            forceFit: true,
            width: 'inherit',
            height: 300,
        };
    },


    render() {
        if (this.props.loading) { return null; }
    
    let userDataSet = userData.slice();
  
        console.log(userDataSet);
        userDataSet.forEach((val,i) => {
            this.props.worldData.forEach((item,i) => {
                if(val.name == item.countryName){
                    val.value = item.visitCount;
                
                }
            })
      
        })

        const Map = createG2((chart) => {
            chart.source(userDataSet);
            chart.axis(false);
            chart.legend(false);
            chart
                .polygon()
                .position(Stat.map.region('name', mapData))
                .tooltip('name*value')
                .color('value', (val) => {
                    if(val == 0){return '#64ea91'}
                    return '#000';
                });
            chart.render();
        });

        return (
            <div>
                <Map
                    data={this.state.userData}
                    width={this.state.width}
                    height={this.state.height}
                    forceFit={this.state.forceFit}

                />
            </div>
        );
    },
});

export default MyComponent;
