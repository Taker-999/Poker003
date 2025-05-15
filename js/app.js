import Card from "./card.js";
import { judgeHand } from "./judge.js";

//ボタン・カード要素を取得
const startButton = document.getElementById("start");
const revealButton =document.getElementById("reveal");
const drawButton = document.getElementById("draw"); 
const nodes=document.querySelectorAll(".card.you");
const playerCards = document.querySelectorAll('.card.you');//アニメーションでの追加
const opponentCards = document.querySelectorAll('.card.opponent');//アニメーションでの追加
let cards=[];

startButton.addEventListener("click",()=> {
const deck =[...Array(52)].map((_,i) =>new Card(i + 1));
//
//シャッフル
for(let i=deck.length-1;i>0;i--){
const j =Math.floor(Math.random()*( i + 1));
[deck[i],deck[j]]=[deck[j],deck[i]];
}
//上から５枚を使用（取り出す）
cards=deck.slice(0, 5);
//裏面画像を表示
nodes.forEach(img => {
    img.src="images/blue.png";
});

animateDealing(cards);//配るアニメーションの関数を呼び出す。

revealButton.disabled =false; //Revealボタンを有効に
});


//Revealボタン：表面を表示し、役を判定
revealButton.addEventListener("click",()=> {
cards.forEach((card,i)  => {
 const cardImage = "images/"+ String(card.index).padStart(2,"0") + ".png";
 nodes[i].src = cardImage;
});
 const result = judgeHand(cards);
  displayResult(result);
});
//Drawボタン：新しいカードを配る
drawButton.addEventListener("click",()=>{
    drawCards();
    const result =judgeHand(cards);
    displayResult(result);
});
 /*console.log("draw時のカード", i, ":", card.index); // ← 追加！
 console.log("draw時のパス:", cardImage); // ← 追加！

 img.src = cardImage;
});
*/
function drawCards(){
    const deck =[...Array(52)].map((_,i)=> new Card(i + 1));
    //シャッフル
    for(let i = deck.length-1; i>0 ;i--){
        const j = Math.floor(Math.random() * ( i + 1));
        [deck[i],deck[j]] = [deck[j],deck[i]];
    }
    cards = deck.slice(0,5);

    cards.forEach((card,i) => {
    const img =nodes[i];
    const cardImage ="images/" + String(card.index).padStart(2,"0")+".png";
    img.src =cardImage;
    });
}
function animateDealing(){
    const deckImage = document.getElementById("deck");

    [...Array(5)].forEach((_,i)=> {
        setTimeout(()=>{
            opponentCards[i].classList.add('deal-to-top');
        setTimeout(()=>{
            playerCards[i].classList.add('deal-to-bottom');
        },300);//交互に少し遅らせて
        },i*600);
    });
}
function dealEromDeckTo(target){
    const deckImage = document.getElementById("deck");
    const clone =deckImage.cloneNode();// 山札をコピー

    clone.classListadd("dealing");// アニメーション用クラス
    document.body.appendChild(clone); //bodyに追加

    //山札の位置と、対象の位置を取得
    const deckRect = deckImage.getBoundingClientRect();
    const targetRect =target.getBoundingClientRect();

    //移動距離を計算
    const dx = targetRect.left - deckRect.left;
    const dy = targetRect.top -  deckRect.top;

    //初期位置をdeckの位置に固定
    clone.style.position = "absolute";
    clone.style.left =`${deckRect.left}px`;
    clone.style.top =`${deckRect.top}px`;
    clone.style.width =`${deckRect.top}px`;

    //移動させる
    requestAnimationFrame(()=> {
        clone.style.transform = `translate(${dx}px,${dy}px)`;
    });
    //終了後に削除し、画像を表示
    setTimeout(() => {
        document.body.removeChild(clone);
        target.src ="images/blue.png";//実際の裏面カード表示
    },500);
}
function displayResult(resultText){
    document.getElementById("result-area").innerText= resultText;
}
