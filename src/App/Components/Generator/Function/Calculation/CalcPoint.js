import CheckNaN from "./CalcPoint/CheckNaN";
import { PushRankJa, PushRankEn } from "./CalcPoint/PushRank";
import CalcSort from "./CalcPoint/CalcSort";
import CalcTotalPoint from "./CalcPoint/CalcTotalPoint";
import SortOutData from "./CalcPoint/SortOutData";
import CalcKillPoint from "./CalcPoint/CalcKillPoint";
import CalcRegularRankPoint from "./CalcPoint/CalcRegularRankPoint";
import CalcIrregularRankPoint from "./CalcPoint/CalcIrregularRankPoint";

export async function CalcPoint(
  data,
  usePointSystem,
  killPoint,
  rankPoint,
  irregularRankList,
  useLanguage,
  setError
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
      setError(err);
  }

  await CalcKillPoint(CSV_DATA, killPoint);

  await SortOutData(CSV_DATA);

  await CalcTotalPoint(CSV_DATA);

  await CalcSort(CSV_DATA);

  await CheckNaN(CSV_DATA, setError);
  switch (useLanguage) {
    case "useJa":
      PushRankJa(CSV_DATA);
      break;
    case "useEn":
      PushRankEn(CSV_DATA);
      break;
    default:
      const err = new Error("言語が選択されていません。");
      setError(err);
  }

  return CSV_DATA;
}
