import React, { Component } from 'react';
import '../styles/sound-key.css';

class SoundKey extends Component {
    constructor(props) {
        super(props);

        this.keyRef = React.createRef();
    }
    componentDidMount() {
        const keyCode = this.props.keyCode;
        const parent = this;
        window.addEventListener('keydown', function(e) {
            if (e.keyCode === parseInt(keyCode)){
                parent.playSound();
            }
        });

        this.keyRef.current.addEventListener('transitionend', this.removeTransition);
    }

    playSound = () => {
        this.keyRef.current.classList.add('playing');
        const audio = new Audio(this.props.soundFile);
        audio.currentTime = 0;
        audio.play();
    };

    removeTransition = () => {
        this.keyRef.current.classList.remove('playing');
    };

    render() {
        const props = this.props;
        return (
            <div data-key={props.keyCode} className="key" ref={this.keyRef}>
                <div>
                    <kbd>{props.keyValue}</kbd>
                    <span className="sound">{props.soundName}</span>
                </div>
            </div>
        );
    }
}

export default SoundKey;
