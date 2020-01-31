function scoreHp(hp){
    if (hp <= 0){
        return 'pushingUpDaisies';
    }
    return 'healthy';
}
export default scoreHp;