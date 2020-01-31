//take in user and health to create profile
import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

//to create profile need
//get user from LS
//get from DOM, hp, gold, name, avatar
function loadProfile(){
    //get user info from DOM
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');
    //parse user from LS call ()
    const user = getUser();
    //make sure there is a user
    if (!user){
        //if no user go back to home to sign up
        window.location = './';
    }
    //copy data from object to DOM
    name.textContent = user.name;
    avatar.src = '../assets/' + user.race + '.jpeg';
    gold.textContent = user.gold;
    //if dead update header
    if (isDead(user)){
        hp.textContent = 'Dead';
    } else {
        hp.textContent = user.hp;
    }
    //else show hp
}
export default loadProfile;