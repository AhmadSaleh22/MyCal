import React, { Component } from 'react'

export default class Number extends Component {
    render() {
        function mm (){
            console.log("button rendered")
        }
        mm();
        return (
            <div>
                <button onClick={this.props.clickFunc}>{this.props.num}</button>
            </div>
        )
    }
}



/* function mm (){
            console.log("button rendered")
        }
        mm();
        return (
            <div>
                <button onClick={this.props.clickFunc}>{this.props.num}</button>
            </div>*/