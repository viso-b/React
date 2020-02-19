import React from 'react';
import DataClock from './DataClock';
import styles from './Clock.module.css';


export default class Clock extends React.Component{
    state = {
        index: 1,
        typeDate: ['fullTime', 'shortTime', 'USDate']
    }
    render(){
        return (<div className={styles.clockContainer} onClick={()=>this.onClockClick()}>{this.renderClock()}</div>)
    }
    onClockClick(){
        const endIndex = this.state.typeDate.length - 1;
        const index = this.state.index <= endIndex? this.state.index + 1 : 1;
        this.setState({index: index})
        console.log(index)
    }
    renderClock(){
        const index = this.state.index;
       return <DataClock {...{index}} />
    }
}