function scoreGold(gold){
    if (gold === 0){
        return 'peasant';
    } else if (gold <= 30){
        return 'farmer';
    } return 'rich';
}
export default scoreGold;