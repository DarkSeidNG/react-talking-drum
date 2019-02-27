import React, { Component } from 'react';
import SoundKey from '../components/SoundKey';
import sounds from '../helpers/sounds';

class Home extends Component {
  render() {
    return (
      <div className="container">
          {sounds.map((sound, idx) => {
              return (
                  <SoundKey
                      key={idx}
                      keyCode={sound.keyCode}
                      keyValue={sound.keyValue}
                      soundName={sound.soundName}
                      soundFile={`../` + sound.soundFile} />
              );
          })}
      </div>
    );
  }
}

export default Home;
