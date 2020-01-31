import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './scorehp.js';
import scoreGold from './scoregold.js';
import { hpMessages, aliveGoldMessages, deadGoldMessages } from './result-messages.js';

//get and load profile
//grab results id from DOM
//update hp, gold and message
//let goldmessage = null
//if dead else alive
loadProfile();

const user = getUser();
const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead'){
    goldMessages = deadGoldMessages; 
} else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'Your quest has ended, ';

story += 'Brave ' + user.race + ', ';
story += hpMessage + ', ' + goldMessage + '.';

storyDisplay.textContent = story;