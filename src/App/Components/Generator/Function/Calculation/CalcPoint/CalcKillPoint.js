//キルポイントの計算
export default function CalcKillPoint(funcInData, killPoint) {
  return new Promise((resolve) => {
    for (let x = 0; x < funcInData.length; x++) {
      let forInArray = funcInData[x];
      let temporaryArray = [];
      for (let i = 0; i < forInArray.length; i++) {
        if (0 < i && i % 2 === 0) {
          //取得

          //代入
          temporaryArray.push(forInArray[i]);
          //その場所を削除
        }
      }

      let killTotal = 0;
      for (let z = 0; z < temporaryArray.length; z++) {
        let cov = Number(temporaryArray[z]);
        killTotal += cov;
      }
      killTotal *= killPoint;
      let len = forInArray.length;

      //元の配列の最後のところに合計点を入れる
      funcInData[x][len] = killTotal.toString();
    }
    resolve();
  });
}
