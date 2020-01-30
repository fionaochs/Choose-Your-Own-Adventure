function scoreQuest(choice, questId, user){
    //to score quest need to know which quest they did, which choice they did in quest and initial user state
    //update user health and gold
    //see if user completed quest
    //for each choice in the quest get info
    user.hp += choice.hp;
    //update user health with quest choice
    user.gold += choice.gold;
    //update user gold with quest choice
    user.completed[questId] = true;
    //set this quest id as completed in user profile

}
export default scoreQuest;