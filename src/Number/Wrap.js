import React, { Component } from 'react'
import Number from './Num/Number'
import Input from './Input/Input'
export default class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
      }
      whenClick =(event) => {
        console.log(event.target.textContent)
        var a=event.target.textContent + this.state.value;
        this.setState({
          value :  a
        });
        console.log("Ahmad saleh ")
      }
      
    
    render() {
        console.log("wrap rendered")
      
        return (
            <div>
                <Input a={this.state.value}/>
                <Number num="1" clickFunc={this.whenClick}/>
                <Number num="2" clickFunc={this.whenClick}/>
                <Number num="3" clickFunc={this.whenClick}/>
                <Number num="4" clickFunc={this.whenClick}/>
            </div>
        )
    }
}
