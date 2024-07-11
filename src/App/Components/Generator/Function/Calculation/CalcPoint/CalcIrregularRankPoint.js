//不規則的なキルポイントの計算
export default function CalcIrregularRankPoint(funcInData, rankPointList) {
  return new Promise((resolve) => {
    for (let x = 0; x < funcInData.length; x++) {
      //一行に変更
      let temporaryArray = funcInData[x];
      for (let i = 0; i < temporaryArray.length - 1; i++) {
        //奇数行の時に実行
        if (i % 2 === 1) {
          const temporaryPoint = rankPointList.find(
            (pointData) => pointData.rank.toString() === funcInData[x][i]
          );

          const rankPoint = temporaryPoint ? temporaryPoint.point : "0";

          funcInData[x][i] = rankPoint;
        }
      }
    }
    resolve();
  });
}
