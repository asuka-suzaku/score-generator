//トータルの計算

export default function CalcTotalPoint(funcInData) {
  return new Promise((resolve) => {
    for (let i = 0; i < funcInData.length; i++) {
      let total = 0;
      for (let x = 1; x < funcInData[i].length; x++) {
        total += Number(funcInData[i][x]);
      }
      let pushTotal = total.toString();
      funcInData[i].push(pushTotal);
    }
    resolve();
  });
}
