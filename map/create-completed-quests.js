function createCompletedQuest(quest){
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    
    //update user completed quest object
    span.textContent = quest.title;
    
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    
    return span;
    
}

//replace a tag with span tag once quest completed
export default createCompletedQuest;