export function judgeHand(cards){
    const values =cards.map(card =>card.getValue());

    //値の頻度を数える
    const count={};
    values.forEach(v => {
        count [v] =(count[v] || 0)+1;
    });

    const counts =Object.values(count).sort((a,b) => b-a);

    if(counts[0]=== 4) return "フォーカード完成！";
    if(counts[0]=== 3 && counts[1]===2) return "フルハウス完成！";
    if(counts[0]=== 3) return "スリーカード完成！";
    if(counts[0]=== 2 && counts[1]===2) return "2ペア完成！";
    if(counts[0]=== 2) return "1ペア完成！" ;

    return "役なし@カンタ";
}