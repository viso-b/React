import styles from './slide.module.scss'

import React from 'react'
 export default class Slide extends React.Component{
     render(){
        const {isActive, img, title, description, key}= this.props;

       return (<div key={key} className={`${styles.slide} ${isActive? styles.active: ""}`}>
            <img className={styles.img} src={img} alt=""/>
            <h2>{title}</h2>
            <p>{description}</p>
         </div>)
     }
 }