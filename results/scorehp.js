function scoreHp(hp){
    if (hp <= 0){
        return 'dead';
    }
    return 'healthy';
}
export default scoreHp;