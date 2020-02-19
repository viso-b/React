import React from 'react';
import styles from './infoBox.module.scss'
import Slide from './Slide';

export default class InfoBox extends React.Component {
    state = {
      activeIndex: 0,
      slides: []
    };

    async componentDidMount(){
      const response = await fetch(
        "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads"
       )
      const slides = await response.json();
      this.setState({slides})
    }

    renderSlide(){
      return this.state.slides.map((slide, i) => {
        const key = Math.floor(Math.random() * 1000).toString();
        const isActive = this.state.activeIndex === i;
        return (
            <Slide {...{key, isActive, ...slide}}/>
        );
      })
    }
    increaseIndex(){
        this.setState({
            activeIndex: this.state.activeIndex + 1 <= this.state.slides.length-1 ? this.state.activeIndex + 1 : 0
        })
    }
    decreaseIndex(){
        this.setState({
            activeIndex: this.state.activeIndex - 1 >= 0 ? this.state.activeIndex - 1 : this.state.slides.length-1
        })
    }
    render() {
      return (
        <div className={styles.infoBox}>
          <div className={styles.slides}>
            {this.renderSlide()} 
          </div>
          <div className={styles.controls}>
            <button className={styles.control}>{"<<<"}</button>
            <button className={styles.control} onClick={() => this.decreaseIndex()}>{"<"}</button>
            <button className={styles.control} onClick={() => this.increaseIndex() }>{">"}</button>
            <button className={styles.control}>{">>>"}</button>
          </div>
        </div>
      );
    }
  }