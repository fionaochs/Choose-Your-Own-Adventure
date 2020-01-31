import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreQuest from './score-quest.js';
//to go on quest need
//get user from LS
//save user
//load profile
//load choices, score quest

//first loadProfile()
loadProfile();

// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get the quest id from the URL
const questId = searchParams.get('id');
//grabbing id='questchoice' from URL
// go find which quest we choose
const quest = findById(quests, questId);

//if no matching quest id send to map
if (!quest){
    window.location = '../map';
}
//grab everything from DOM
const title = document.getElementById('title');
const image = document.getElementById('image');
const choices = document.getElementById('choices');
const choiceForm = document.getElementById('choice-form');
const description = document.getElementById('description');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = '../assets/quest/' + quest.image;
description.textContent = quest.description;

//for each of quests choices, go through all three
for (let index = 0; index < quest.choices.length; index++){
    const choice = quest.choices[index];
    //set choice to the index of the quest array
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

//on form submit 
//get formData
//update user
//score quest
//update UI
choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    //set data with our choice form
    const choiceId = formData.get('choice');
    //use get property to grab choice
    //get id and run it to get choice
    const choice = findById(quest.choices, choiceId);
    //return our choice

    //get user from LS
    const user = getUser();
    scoreQuest(choice, quest.id, user);
    //score quest with choosen quest id the choice in the quest and user
    saveUser(user);
    //save new user state

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
    //load for new state in header

    //change image on specific choice
    const selection = document.querySelector('input:checked');
    if (selection.value === 'fight'){
        image.src = '../assets/quest/killer-rabbit.jpeg';
    }
    
});


