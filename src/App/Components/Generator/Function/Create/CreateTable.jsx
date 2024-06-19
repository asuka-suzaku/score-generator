import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  ContentDataAtom,
  DataAtom,
  StylesAtom,
} from "../../../../Store/StylesAtom";
import { CalcPoint } from "../Calculation/CalcPoint";
import { FileToCsv } from "../FileToCsv";
import { PushHeaderEn, PushHeaderJa } from "../Calculation/PushHeader";

export function CreateElement({ ex }) {
  const styles = useRecoilValue(StylesAtom);
  const tableData = useRecoilValue(ContentDataAtom);
  const irregularRankList = useRecoilValue(DataAtom);
  // const [contentData, setContentData] = useRecoilState(ContentDataAtom);
  const [result, setResult] = useState([]);

  const csvFile = styles.fileConfig?.file[0];
  const killPoint = styles.fileConfig.killPoint;
  const rankPointSystem = styles.fileConfig.rankPoint;
  const matchPoint = styles.fileConfig.regularRankPoint;
  const useLanguage = styles.fonts.useLanguage;

  useEffect(() => {
    const calc = async () => {
      let CsvData;
      if (csvFile) {
        CsvData = await FileToCsv(csvFile);

        const calc = await CalcPoint(
          CsvData,
          rankPointSystem,
          killPoint,
          matchPoint,
          irregularRankList,
          useLanguage
        );

        let finalData = [];
        switch (useLanguage) {
          case "useJa":
            finalData = await PushHeaderJa(calc);
            break;
          case "useEn":
            finalData = await PushHeaderEn(calc);
            break;
          default:
            const err = new Error("言語が選択されていません。");
            throw err;
        }
        setResult(finalData);
      }
    };
    calc();
  }, [styles]);

  if (result[0]) {
    return (
      <>
        <CreateTableElement data={result} />
      </>
    );
  } else {
    return (
      <p id="message">ファイルのアップロードかurlを貼り付けてください。</p>
    );
  }
}

function CreateTableElement({ data }) {
  const amount = data.length;
  const temporaryArray = [];
  for (let i = 0; i < amount; i++) {
    temporaryArray.push(i.toString());
  }

  return (
    <>
      <table>
        <tbody>
          {temporaryArray.map((index) => (
            <tr
              id={`line-${Number(index) + 1}`}
              key={`line-${Number(index) + 1}`}
            >
              {data[index].map((elem, elemIndex) => (
                <td
                  id={`${Number(index) + 1}-${elemIndex + 1}`}
                  key={`${index + 1}-${elemIndex + 1}`}
                >
                  {elem}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p id="mark">GENERATE BY SCORE GENERATOR</p>
    </>
  );
}

// function CreateTableHead({ data }) {
//   const amount = data[0].length;
//   const temporaryArray = [];
//   for (let i = 0; i < amount; i++) {
//     switch (i.toString()) {
//       case "0":
//         temporaryArray.push("チーム名");
//         break;
//       case `${amount - 2}`:
//         temporaryArray.push("キルポイント");
//         break;
//       case `${amount - 1}`:
//         temporaryArray.push("合計");
//         break;
//       default:
//         temporaryArray.push(`${i}試合目`);
//     }
//   }
//   return (
//     <>
//       <g viewBox="0,0,1920,1080" id="line-1" key="line-1">
//         <text id="1-1">順位</text>

//         {temporaryArray.map((elem, index) => (
//           <text id={`1-${index + 2}`} key={`1-${index + 2}`}>
//             {elem}
//           </text>
//         ))}
//       </g>
//     </>
//   );
// }
