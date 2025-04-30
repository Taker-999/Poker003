export default class Card{
    constructor(index){
        this.index =index;
    }
getValue(){
    return(this.index - 1) % 13 +1;
    }
getSuit(){
    return Math.floor((this.index -1)/13);
}
}
console.log("card.js が読み込まれました（getValue付き）");