import Card from "./card.js";
import { judgeHand,isFlush } from "./judge.js";

//テスト用の手札（例：フラッシュのテスト）
const testHand =[
    new Card(1),  //スペードA
    new Card(2),
    new Card(3),
    new Card(4),
    new Card(5),
];
//テスト実行
console.log("役判定:",judgeHand(testHand));
console.log("isFrush結果:",isFlush(testHand.map(c => c.index)));