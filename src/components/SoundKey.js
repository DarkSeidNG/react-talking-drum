import React, { Component } from 'react';
import '../styles/sound-key.css';

class SoundKey extends Component {

    render() {
        const {props} = this.props;
        return (
            <div data-key={props.dataKey} className="key">
                <kbd>{props.keyValue}</kbd>
                <span className="sound">{props.soundName}</span>
            </div>
        );
    }
}

export default SoundKey;
