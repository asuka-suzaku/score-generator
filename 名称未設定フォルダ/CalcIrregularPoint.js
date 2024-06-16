const testCsv = [
  [
    "チーム名",
    "1試合目の順位",
    "1試合目のキル数",
    "2試合目の順位",
    "2試合目のキル数",
    "3試合目の順位",
    "3試合目のキル数",
  ],
  ["チーム1", "1", "1", "1", "1", "1", "1"],
  ["チーム2", "2", "2", "2", "2", "2", "2"],
  ["チーム3", "3", "3", "3", "3", "3", "3"],
  ["チーム4", "4", "4", "4", "4", "4", "4"],
  ["チーム5", "5", "5", "5", "5", "5", "5"],
  ["チーム6", "6", "6", "6", "6", "6", "6"],
  ["チーム7", "7", "7", "7", "7", "7", "7"],
  ["チーム8", "8", "8", "8", "8", "8", "8"],
  ["チーム9", "9", "9", "9", "9", "9", "9"],
  ["チーム10", "10", "10", "10", "10", "10", "10"],
];

const obj = [
  { rank: 1, point: "10" },
  { rank: 2, point: "10" },
  { rank: 3, point: "7" },
  { rank: 4, point: "5" },
  { rank: 5, point: "2" },
  { rank: 6, point: "0" },
  { rank: 7, point: "0" },
  { rank: 8, point: "0" },
  { rank: 9, point: "0" },
  { rank: 10, point: "0" },
];

const exampleArray = testCsv;
exampleArray.shift();

async function CalcIrregularPoint() {
  await new ((resolve) => {
    for (let x = 0; x < exampleArray.length; x++) {
      //一行に変更
      let testData = exampleArray[x];
      for (let i = 0; i < testData.length - 1; i++) {
        //奇数行の時に実行
        if (i % 2 === 1) {
          const rankPoint = obj.find(
            (pointData) => pointData.rank.toString() === exampleArray[x][i]
          );

          console.log(rankPoint.point);
        }
      }
    }
    resolve();
  })();
}

CalcIrregularPoint();
