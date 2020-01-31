function createChoice(choice){
    //create label and input
    const label = document.createElement('label');
    label.classList.add('choice');

//create radio button for choice
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = 'true';
    radio.value = choice.id;
    label.appendChild(radio);

    //create span for description
    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
    //<label> <input type= "radio" name= "choice" required value= "choice.id"> </label>

}
export default createChoice;