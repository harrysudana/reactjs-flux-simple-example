import React, { Component } from 'react';
import ColorAppStore from "../stores/ColorAppStore";

class ColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "lightgrey"
        }
    }
    
    componentDidMount() {
        ColorAppStore.on("storeUpdated", this.updateBackgroundColor);
    }

    componentWillUnmount() {
        ColorAppStore.removeListener("storeUpdated", this.updateBackgroundColor);
    }

    updateBackgroundColor = () => {
        this.setState({color: ColorAppStore.getActiveColor()})
    };
    
    render() {
        return (
            <div className="color-container" style={{backgroundColor: this.state.color}}/>
        );
    }
}

export default ColorComponent;
