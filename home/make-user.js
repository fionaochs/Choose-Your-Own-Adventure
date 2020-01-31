function makeUser(formData){
    //get form data, create user array
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 50,
        gold: 0,
        completed: {}
    };
    return user;
}
export const makeNewUser = (formData) => ({
    //get form data, create new user from data
    name: formData.get('name'),
    race: formData.get('race'),
    hp: 50,
    gold: 0,
    completed: {}
  
});

export default makeUser;