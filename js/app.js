import Card from "./card.js";
import { judgeHand } from "./judge.js";

let cards;
const drawButton = document.getElementById("draw"); //再度引くdrawボタンを取得する
//drawButton.addEventListener("click",() =>{
    //ここにカードを新しく引く処理を書く

//});

//1~52の番号を持つカードを作成・・・それをデッキdeckと定義する
const deck =[...Array(52)].map((_,i) =>new Card(i + 1));

//シャッフル
for(let i=deck.length-1;i>0;i--){
const j =Math.floor(Math.random()*( i + 1));
[deck[i],deck[j]]=[deck[j],deck[i]];
}
//上から５枚を使用（取り出す）
cards=deck.slice(0,5);
//img要素を取得して表示
const nodes=document.querySelectorAll(".card.you");
cards.forEach((card,i)  => {
 const img =nodes[i];
 const cardImage = "images/"+ String(card.index).padStart(2,"0") + ".png";
 console.log("draw時のカード", i, ":", card.index); // ← 追加！
 console.log("draw時のパス:", cardImage); // ← 追加！

 img.src = cardImage;
});



function drawCards(){
    const deck =[...Array(52)].map((_,i)=> new Card(i+1));

    //シャッフル
    for(let i = deck.length-1; i>0 ;i--){
        const j = Math.floor(Math.random() * ( i + 1));
        [deck[i],deck[j]]=[deck[j],deck[i]];
    }
    cards = deck.slice(0,5);

    //img要素を取得して表示
    const nodes = document.querySelectorAll(".card.you");

    cards.forEach((card,i) => {
    const img =nodes[i];
    const cardImage ="images/" + String(card.index).padStart(2,"0")+".png";
    img.src =cardImage;
    });
}
function displayResult(resultText){
    document.getElementById("result-area").innerText= resultText;
}
    drawButton.addEventListener("click",() => {
       drawCards(); 
       // drawCards で cards を更新した後に、judgeHand で判定！
       const result = judgeHand(cards); // ← 役を判定！
       displayResult(result);          // ← 判定結果を画面に表示！
    });
    