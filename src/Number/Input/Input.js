import React, { Component } from 'react'

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            name: props.name,
            status: props.status
        };
      }
      
      render() {
              console.log("input renderd")
          return <input readOnly value={this.props.a}></input>
    }
}
