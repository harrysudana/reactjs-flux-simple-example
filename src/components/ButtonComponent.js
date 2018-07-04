import React, { Component } from 'react';

class ButtonComponent extends Component {
	render() {
        return (
            <div>
                <button className="color-button">Red</button>
                <button className="color-button">Blue</button>
            </div>
        );
    }
}

export default ButtonComponent;