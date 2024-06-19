export async function CalcPoint(
  data,
  usePointSystem,
  killPoint,
  rankPoint,
  irregularRankList,
  useLanguage
) {
  const CSV_DATA = [];

  //データを書き換えのためコピー
  await new Promise((resolve) => {
    for (let i = 0; i < data.length; i++) {
      CSV_DATA.push(data[i]);
    }
    resolve();
  });

  //一行目を消す
  CSV_DATA.shift();
  const TEAM_NUM = CSV_DATA.length;

  //順位ポイントの計算
  switch (usePointSystem) {
    case "useRegularRankPoint":
      await CalcRegularRankPoint(CSV_DATA, rankPoint, TEAM_NUM);
      break;
    case "useIrregularRankPoint":
      await CalcIrregularRankPoint(CSV_DATA, irregularRankList);
      break;
    default:
      const err = new Error("得点の計算ができません。");
      throw err;
  }

  await CalcKillPoint(CSV_DATA, killPoint);

  await SortOutData(CSV_DATA);

  await CalcTotalPoint(CSV_DATA);

  await CalcSort(CSV_DATA);

  switch (useLanguage) {
    case "useJa":
      PushRankJa(CSV_DATA);
      break;
    case "useEn":
      PushRankEn(CSV_DATA);
      break;
    default:
      const err = new Error("言語が選択されていません。");
      throw err;
  }
  return CSV_DATA;
}

// CalcPoint(testCsv1, rankPointSystem, killPoint, matchPoint);

function PushRankJa(funcInData) {
  return new Promise((resolve) => {
    for (let i = 0; i < funcInData.length; i++) {
      funcInData[i].unshift(`${i + 1}位`);
      resolve(funcInData);
    }
  });
}

function PushRankEn(funcInData) {
  return new Promise((resolve) => {
    for (let i = 0; i < funcInData.length; i++) {
      funcInData[i].unshift(`NO.${i + 1}`);
      resolve(funcInData);
    }
  });
}

//並べ替えの関数
function CalcSort(funcInData) {
  const len = funcInData[0].length;
  return new Promise((resolve) => {
    funcInData.sort((a, b) => {
      return b[len - 1] - a[len - 1];
    });
    resolve(funcInData);
  });
}
//トータルの計算
function CalcTotalPoint(funcInData) {
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

//キルポイントの部分を削除
function SortOutData(funcInData) {
  return new Promise((resolve) => {
    const temporaryArray = [];
    for (let z = 0; z < funcInData.length; z++) {
      temporaryArray.push(funcInData[z]);
    }

    for (let i = 0; i < temporaryArray.length; i++) {
      for (let x = temporaryArray[i].length; 0 < x; x--) {
        if (x != 1 && x % 2 === 0) {
          funcInData[i].splice(x, 1);
        }
      }
    }
    resolve();
  });
}

//キルポイントの計算
function CalcKillPoint(funcInData, killPoint) {
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
      //   temporaryArray.push(killTotal.toString());
      //   temporaryArray.splice(0, 0, forInArray[0]);

      let len = forInArray.length;

      //元の配列の最後のところに合計点を入れる
      funcInData[x][len] = killTotal.toString();
    }
    resolve();
  });
}

//規則的な順位ポイントの計算
function CalcRegularRankPoint(funcInData, rankPoint, teamNum) {
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

//不規則的なキルポイントの計算
function CalcIrregularRankPoint(funcInData, rankPointList) {
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
