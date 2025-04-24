import Card from "./card.js";
import { judgeHand, isFlush,isStraight } from "./judge.js"; //judge要素完成時に引用

// flash-test ボタンが押された時に実行
document.getElementById("flash-test").addEventListener("click", () => {
    // テスト用の手札（例：フラッシュのテスト）
    const testHand = [
        new Card(1),  // スペードA
        new Card(2),
        new Card(3),
        new Card(4),
        new Card(5),
    ];

    const result = judgeHand(testHand);
    const flush = isFlush(testHand.map(c => c.index));

    console.log("役判定:", result);
    console.log("isFlush結果:", flush);

    // HTML に結果を表示
    document.getElementById("result-area").textContent =result;
});
document.getElementById("fourcard-test").addEventListener("click",() =>{
    //テスト用手札
    const testHand =[
        new Card(1), //♠A
        new Card(14),//♥A
        new Card(27),//♦A
        new Card(40),//♣A
    ];
    const result = judgeHand(testHand);
    console.log("役判定:",result);
    document.getElementById("result-area").textContent =result;
});
//straight-testボタンが押されたときに実行
document.getElementById("straight-test").addEventListener("click",() => {
//テスト用手札
const testHand=[
    new Card(1),  //1
    new Card(2),  //2
    new Card(3),
    new Card(4),
    new Card(5),
];
const result = judgeHand(testHand);
console.log("役判定:",result);
document.getElementById("result-area").textContent =result;
});