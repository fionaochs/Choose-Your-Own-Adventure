function hasCompletedAllQuests(quests, user){

    for (let i = 0; i < quests.length; i++){
        const quest = quests[i];
        console.log(quest);
        console.log(user.completed);
        if (!user.completed[quest.id]){
            //if user has not completed selected quest id
            return false;
        }
    } return true;
}
export default hasCompletedAllQuests;

//loop through all quests and check if user has completed
//if not return false