import React from 'react';
import ReactDOM from 'react-dom';
import SoundKey from '../components/SoundKey';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SoundKey />, div);
    ReactDOM.unmountComponentAtNode(div);
});
