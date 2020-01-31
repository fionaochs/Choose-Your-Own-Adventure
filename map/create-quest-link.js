function createQuestLink(quest){
    const link = document.createElement('a');
    link.classList.add('quest');
    //create a tag with href to link us to quest pages
    // <a class='quest' href=''>

    link.href = '../quest/?id=' + quest.id;
//link for href ../quest/?id='questId'

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;
//set link to same properties as map location in quest object

    return link;

}
export default createQuestLink;