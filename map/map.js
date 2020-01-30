//import everything to render map
import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';
import isDead from '../common/is-dead.js';

//load user profile and get from local storage
loadProfile();
const user = getUser();

//if dead or completed all quests show results page
//otherwise populate links for needed quests

if (isDead(user) || hasCompletedAllQuests(quests, user)){
    window.location = '../results';

}
const nav = document.getElementById('quests');
//check if user has completed quest or if needs link
//set quest display to null first
//loop through all quests to check
for (let i = 0; i < quests.length; i++){
    const quest = quest[i];
    let questDisplay = null;
    //initialize quest display to nothing then..
    if (user.completed[quest.id]){
        questDisplay = createCompletedQuest(quests);
        //if user completed quest id
    } else {
        questDisplay = createQuestLink(quest);
        //otherwise make href for quests
    }
    nav.appendChild(questDisplay);
    //append how quests will display to nav
}