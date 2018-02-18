import React, {PropTypes} from 'react'
import {Gradient} from 'uigradients';
import {Icon, Progress} from 'antd'
const styles = {
    gradient_box: {
        height: 150,
        padding: 20
    },
    header: {
        fontSize: 16,
        textAlign: 'left',
        color: '#f3fdfc',
        marginBottom: 20
    },
    content: {
        borderLeft: '2px solid white',
        height: 70,
        padding: 0,
        width: '100%',
        display: 'inline-block'
    },
    number: {
        fontSize: 50,
        marginLeft: 15,
        float: 'left'
    },
    arrow: {
        float: 'left',
        fontSize: 30,
        paddingTop: 20
    },
    increase: {
        float: 'left',
        fontSize: 30,
        paddingTop: 20
    },
    progress: {
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: 10
    }
}

var GradientCard = function statelessFunctionComponentClass(props) {

    return (

        <Gradient gradient={props.type} style={styles.gradient_box}>
            <div style={styles.progress}><Progress
                className="cardProgress"
                type="circle"
                percent={props.percentNumber}
                width={50}/></div>

            <h5 style={styles.header}>{props.header}</h5>
            <div style={styles.content}>
                <div style={styles.number}>{props.number}</div>
                <div style={styles.arrow}><Icon
                    style={{
            color: props.arrowColor
        }}
                    type={props.arrow}/></div>
                <div style={styles.increase}>{props.increase}</div>
            </div>
        </Gradient>
    )
}
export default GradientCard
