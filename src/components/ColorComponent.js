import React, { Component } from 'react';

class ColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "lightgrey"
        }
    }
    
    render() {
        return (
            <div className="color-container" style={{backgroundColor: this.state.color}}/>
        );
    }
}

export default ColorComponent;
