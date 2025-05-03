export function isOnepair(cards){
    const values = cards.map(card =>card.getValue());
    const count = {};

    values.forEach(v => {
      const[v]=(count[v]|| 0) +1;
});

    const pairs =Object.values(count).filter(c => c ===2);
    return pairs.length ===1;//1ペアある。
}

export function isFlush(cards){　　　//フラッシュ判定関数 フラッシュの手札はcardsとする。
    const suits =cards.map(card => card.getSuit());
    return suits.every(suit => suit === suits[0]);

}
export function isStraight(values){ //ストレート判定関数 ストレートの手札はvaluesとする。
    const sorted =[...values].sort((a,b) => a - b);

    const lowAce =JSON.stringify(sorted) ===JSON.stringify([1,2,3,4,5]);
    if(lowAce) return true;
    for(let i=0; i<sorted.length-1;i++)
    if(sorted[i+1] !==sorted[i]+1){
        return false;
    }
        return true;
}
export function isStraightFlush(cards){ //ストレートフラッシュ判定関数　cards
    const values = cards.map(card => card.getValue());
    return isFlush(cards)&& isStraight(values);
}
export function isRoyalFlush(cards){ //ロイヤルフラッシュ判定関数　
    const values =cards.map(card => card.getValue()).sort((a,b) => a-b);
    const suits  =cards.map(card => Math.floor((card.index-1)/13));

    const isFlush =suits.every(suit => suit === suits[0]);
    const isRoyal =JSON.stringify(values) === JSON.stringify([1,10,11,12,13]);

    return isFlush && isRoyal;
}
export function judgeHand(cards){
    const values =cards.map(card =>card.getValue());

    //値の頻度を数える
    const count={};
    values.forEach(value => {
        count [value] =(count[v] || 0)+1;
    });

    const counts =Object.values(count).sort((a,b) => b-a);

    
    if(isFlush(cards)) return"フラッシュ完成！";
    if(counts[0]=== 4) return "フォーカード完成！";
    if(counts[0]=== 3 && counts[1]===2) return "フルハウス完成！";
    if(counts[0]=== 3) return "スリーカード完成！";
    if(counts[0]=== 2 && counts[1]===2) return "2ペア完成！";
    if(isOnepair(cards)) return "1ペア完成！" ;

    //ここでストレートチェックを追加
    if(isStraight(values))return"ストレート完成！";

    return "役なし";
}