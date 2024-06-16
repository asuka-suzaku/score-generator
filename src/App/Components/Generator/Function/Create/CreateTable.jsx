import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  ContentDataAtom,
  DataAtom,
  StylesAtom,
} from "../../../../Store/StylesAtom";
import { CalcPoint } from "../Calculation/CalcPoint";
import { FileToCsv } from "../FileToCsv";

export function CreateElement() {
  const styles = useRecoilValue(StylesAtom);
  const tableData = useRecoilValue(ContentDataAtom);
  const irregularRankList = useRecoilValue(DataAtom);
  const setContentData = useSetRecoilState(ContentDataAtom);
  const [result, setResult] = useState([]);

  const csvFile = styles.fileConfig?.file[0];
  const killPoint = styles.fileConfig.killPoint;
  const rankPointSystem = styles.fileConfig.rankPoint;
  const matchPoint = styles.fileConfig.regularRankPoint;

  useEffect(() => {
    const calc = async () => {
      let CsvData;
      if (csvFile) {
        CsvData = await FileToCsv(csvFile);
        console.log(CsvData);

        const calc = await CalcPoint(
          CsvData,
          rankPointSystem,
          killPoint,
          matchPoint,
          irregularRankList
        );
        setResult(calc);
      }
    };
    calc();
  }, []);

  if (result[0]) {
    return (
      <>
        <CreateTableHead data={result} />
        <CreateTableElement data={result} />
      </>
    );
  } else {
    return <div>ファイルのアップロードかurlを貼り付けてください。</div>;
  }
}

function CreateTableHead({ data }) {
  const amount = data[0].length;
  const temporaryArray = [];
  for (let i = 0; i < amount; i++) {
    switch (i.toString()) {
      case "0":
        temporaryArray.push("チーム名");
        break;
      case `${amount - 2}`:
        temporaryArray.push("キルポイント");
        break;
      case `${amount - 1}`:
        temporaryArray.push("合計");
        break;
      default:
        temporaryArray.push(`${i}試合目`);
    }
  }
  return (
    <>
      <tr>
        <th>順位</th>

        {temporaryArray.map((elem, index) => (
          <th id={`head-${index}`} key={`head-${index}`}>
            {elem}
          </th>
        ))}
      </tr>
    </>
  );
}

function CreateTableElement({ data }) {
  const amount = data.length;
  const temporaryArray = [];
  for (let i = 0; i < amount; i++) {
    temporaryArray.push(i.toString());
  }

  return (
    <>
      {temporaryArray.map((index) => (
        <tr id={`line-${Number(index) + 1}`} key={`line-${Number(index) + 1}`}>
          <td key={`${index}-1`} id={`${index}-1`}>
            {Number(index) + 1}位
          </td>
          {data[index].map((elem, elemIndex) => (
            <td
              id={`${Number(index) + 1}-${elemIndex + 2}`}
              key={`${index}-${elemIndex}`}
            >
              {elem}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
