function findById(array, id){
    for (let index = 0; index < array.length; index++){
        const item = array[index];
        if (item.id === id){
            return item;
        } else {

            return null;
        }
    }
}
export default findById;