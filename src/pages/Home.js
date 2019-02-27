import React from 'react';
import SoundKey from '../components/SoundKey';
import sounds from '../helpers/sounds';

/**
 * Since this function does not require states and props we make it functional
 * @returns {*}
 */
function Home () {
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

export default Home;
