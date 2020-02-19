import React from 'react';
import styles from './DataClock.module.css';


export default class DataClock extends React.Component{
    render(){
        const {index} = this.props;
        return <div className={styles.dataClock}>{this.getDataClockByIndex(index)}</div>
    }
    getDataClockByIndex(index){
        console.log('click')
        switch(index){
            case 1 :  return this.fullTime(); 
            case 2 : return this.shortTime();
            case 3 : return this.USDate();
        }
    }
    fullTime(){
       setInterval(this.fullTime, 950);
        let date = new Date();
        let time = ( `${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}`) ;
        return time ;
    }
    shortTime(){
        const date = new Date()
        return `${date.getHours() + ':' + date.getMinutes()}`
    }
    USDate(){
        const date = new Date()
        return `${date.getFullYear() + '/' + `${date.getMonth()+1}` +'/' + date.getDate()}`
    }
}