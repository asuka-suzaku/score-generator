import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DataAtom,
  ErrorAtom,
  SheetDataAtom,
  StylesAtom,
} from "../../../../Store/StylesAtom";
import { CalcPoint } from "../Calculation/CalcPoint";
import { FileToCsv } from "../FileToCsv";
import { PushHeaderEn, PushHeaderJa } from "../Calculation/PushHeader";
import CheckKillPoint from "../Calculation/CheckKillPoint";
import AtomToArray from "../Calculation/AtomToArray";
import CreateTableElement from "./CreateTableElement";

export function CreateElement() {
  const styles = useRecoilValue(StylesAtom);
  const irregularRankList = useRecoilValue(DataAtom);
  const [result, setResult] = useState([]);
  const sheetData = useRecoilValue(SheetDataAtom);
  const [error, setError] = useRecoilState(ErrorAtom);

  const csvFile = styles.fileConfig?.file[0];
  const choiceFileType = styles.fileConfig.choiceFile;
  const killPoint = styles.fileConfig.killPoint;
  const rankPointSystem = styles.fileConfig.rankPoint;
  const matchPoint = styles.fileConfig.regularRankPoint;
  const useLanguage = styles.fonts.useLanguage;

  useEffect(() => {
    const calc = async () => {
      let CsvData = [];
      if (csvFile || sheetData[0]) {
        switch (choiceFileType) {
          case "useUrl":
            CsvData = await AtomToArray(sheetData);
            break;
          case "useFile":
            CsvData = await FileToCsv(csvFile);
            break;
          default:
            const err = new Error("ファイルタイプが選択されていません。");
            throw err;
        }

        let calcArray = [];
        if (CsvData[0]) {
          calcArray = await CalcPoint(
            CsvData,
            rankPointSystem,
            killPoint,
            matchPoint,
            irregularRankList,
            useLanguage,
            setError
          );

          let finalArray = [];
          switch (useLanguage) {
            case "useJa":
              finalArray = await PushHeaderJa(calcArray);
              break;
            case "useEn":
              finalArray = await PushHeaderEn(calcArray);
              break;
            default:
              const err = new Error("言語が選択されていません。");
              throw err;
          }

          const completedArray = await CheckKillPoint(finalArray, killPoint);

          setResult(completedArray);
        }
      }
    };
    calc();
  }, [styles, sheetData]);

  if (error) {
    throw error;
  }

  if (result[0]) {
    return (
      <>
        <CreateTableElement data={result} />
      </>
    );
  } else {
    return (
      <p id="message">
        ファイルのアップロードか
        <br className="message-span" />
        urlを貼り付けてください。
      </p>
    );
  }
}
