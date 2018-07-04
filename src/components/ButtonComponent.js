import React, { Component } from 'react';

import ColorAppActions from "../actions/ColorAppActions";

class ButtonComponent extends Component {
	onButtonClick = (colorName) => {
        ColorAppActions.changeColor(colorName)
    };

	render() {
        return (
            <div>
                <button onClick={() => this.onButtonClick("red")} className="color-button">Red</button>
                <button onClick={() => this.onButtonClick("blue")} className="color-button">Blue</button>
            </div>
        );
    }
}

export default ButtonComponent;