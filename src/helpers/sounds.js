import h1 from '../assets/sounds/talkingdrum_hi_1.wav';
import h2 from '../assets/sounds/talkingdrum_hi_2.wav';
import h3 from '../assets/sounds/talkingdrum_hi_3.wav';
import h4 from '../assets/sounds/talkingdrum_hi_4.wav';
import h_desc from '../assets/sounds/talkingdrum_hi_desc.wav';
import lo1 from '../assets/sounds/talkingdrum_lo_1.wav';
import lo2 from '../assets/sounds/talkingdrum_lo_2.wav';
import lo3 from '../assets/sounds/talkingdrum_lo_3.wav';
import lo4 from '../assets/sounds/talkingdrum_lo_4.wav';
import lo5 from '../assets/sounds/talkingdrum_lo_5.wav';
import lo6 from '../assets/sounds/talkingdrum_lo_6.wav';
import lo7 from '../assets/sounds/talkingdrum_lo_7.wav';
import lo_bend_1 from '../assets/sounds/talkingdrum_lo_bend_1.wav';
import lo_double_1 from '../assets/sounds/talkingdrum_lo_double_1.wav';
import lo_double_2 from '../assets/sounds/talkingdrum_lo_double_2_bend.wav';
import lo_hi_bend from '../assets/sounds/talkingdrum_lo_hi_bend.wav';
import mid_1 from '../assets/sounds/talkingdrum_mid_1.wav';
import mid_2 from '../assets/sounds/talkingdrum_mid_2.wav';
import mid_3 from '../assets/sounds/talkingdrum_mid_3.wav';
import mid_4 from '../assets/sounds/talkingdrum_mid_4.wav';
import mid_5 from '../assets/sounds/talkingdrum_mid_5.wav';

/**
 * An array of different talking drum sounds, the key code for playing them, and their sound files
 * @type {*[]}
 */
const sounds = [
    { keyCode: '81', keyValue: 'Q', soundName: 'Hi 1', soundFile: h1 },
    { keyCode: '87', keyValue: 'W', soundName: 'Hi 2', soundFile: h2 },
    { keyCode: '69', keyValue: 'E', soundName: 'Hi 3', soundFile: h3 },
    { keyCode: '82', keyValue: 'R', soundName: 'Hi 4', soundFile: h4 },
    { keyCode: '84', keyValue: 'T', soundName: 'Hi Desc', soundFile: h_desc },
    { keyCode: '89', keyValue: 'Y', soundName: 'Lo 1', soundFile: lo1 },
    { keyCode: '85', keyValue: 'U', soundName: 'Lo 2', soundFile: lo2 },
    { keyCode: '73', keyValue: 'I', soundName: 'Lo 3', soundFile: lo3 },
    { keyCode: '79', keyValue: 'O', soundName: 'Lo 4', soundFile: lo4 },
    { keyCode: '80', keyValue: 'P', soundName: 'Lo 5', soundFile: lo5 },
    { keyCode: '65', keyValue: 'A', soundName: 'Lo 6', soundFile: lo6 },
    { keyCode: '83', keyValue: 'S', soundName: 'Lo 7', soundFile: lo7 },
    { keyCode: '68', keyValue: 'D', soundName: 'Lo Bend 1', soundFile: lo_bend_1 },
    { keyCode: '70', keyValue: 'F', soundName: 'Lo Double 1', soundFile: lo_double_1 },
    { keyCode: '71', keyValue: 'G', soundName: 'Lo Double 2', soundFile: lo_double_2 },
    { keyCode: '72', keyValue: 'H', soundName: 'Lo Hi Bend', soundFile: lo_hi_bend },
    { keyCode: '74', keyValue: 'J', soundName: 'Mid 1', soundFile: mid_1 },
    { keyCode: '75', keyValue: 'K', soundName: 'Mid 2', soundFile: mid_2 },
    { keyCode: '76', keyValue: 'L', soundName: 'Mid 3', soundFile: mid_3 },
    { keyCode: '90', keyValue: 'Z', soundName: 'Mid 4', soundFile: mid_4 },
    { keyCode: '88', keyValue: 'X', soundName: 'Mid 5', soundFile: mid_5 },
];

export default sounds;
