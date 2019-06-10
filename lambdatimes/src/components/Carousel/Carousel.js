import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      counter: 0
    }
  }
  
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    if(this.state.counter !== 0) {
      this.setState(prevState => ({
        counter: prevState.counter - 1
      }))
    } else {
      this.setState(prevState => ({
        counter: prevState.carousel.length - 1
      }))
    }
  }

  rightClick = () => {
    if(this.state.counter !== this.state.carousel.length - 1) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }))
    } else {
      this.setState({
        counter: 0
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.counter]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {
          this.selectedImage()
        }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}