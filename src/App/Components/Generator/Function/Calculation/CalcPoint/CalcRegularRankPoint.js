//規則的な順位ポイントの計算
export default function CalcRegularRankPoint(funcInData, rankPoint, teamNum) {
  return new Promise((resolve) => {
    for (let x = 0; x < funcInData.length; x++) {
      //一行に変更
      let temporaryArray = funcInData[x];
      for (let i = 0; i < temporaryArray.length - 1; i++) {
        //奇数行の時に実行
        if (i % 2 === 1) {
          let rank = Number(temporaryArray[i]);
          //ポイント＝設定したマッチポイント×チーム数ー順位
          let mainPoint = rankPoint * (teamNum - rank);
          let push = mainPoint.toString();
          funcInData[x][i] = push;
        }
      }
    }
    resolve();
  });
}
