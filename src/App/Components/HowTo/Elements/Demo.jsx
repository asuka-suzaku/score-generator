import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import * as common from "../../../Style/Common/Common";
import { CalcPoint } from "../../Generator/Function/Calculation/CalcPoint";
import CreateTableElement from "../../Generator/Function/Create/CreateTableElement";
import {
  PushHeaderEn,
  PushHeaderJa,
} from "../../Generator/Function/Calculation/PushHeader";
import AtomToArray from "../../Generator/Function/Calculation/AtomToArray";
import CheckKillPoint from "../../Generator/Function/Calculation/CheckKillPoint";
import { DemoDataAtom } from "../../../Store/StylesAtom";
const demoData = [
  ["チーム名", "順位", "キル数"],
  ["チームA", "1", "2"],
  ["チームB", "2", "0"],
  ["チームC", "3", "5"],
];

export default function Demo({ DemoStyle }) {
  const [data, setData] = useState(demoData);
  const [error, setError] = useState("");
  const demoDataAtom = useRecoilValue(DemoDataAtom);
  let image;
  const file = DemoStyle?.decoration?.bgImg[0];

  if (file) {
    image = window.URL.createObjectURL(file);
  }

  let elementMove = 0;
  const imgElement = document.getElementById("bgImg");
  if (imgElement) {
    const elementHeight = imgElement.getBoundingClientRect().height;
    elementMove = elementHeight / 2;
  }

  let size_w = 0;
  let size_h = 0;

  const elem = document.getElementById("demo");
  if (elem) {
    const elemStyle = elem.getBoundingClientRect();
    size_w = elemStyle.width;
    size_h = elemStyle.height;
  }

  const calcMove = size_h / 2 - elementMove ? size_h / 2 - elementMove : 0;

  useEffect(() => {
    const calc = async () => {
      let CsvData = await AtomToArray(demoData);

      const useLan = DemoStyle.fonts?.useLanguage
        ? DemoStyle.fonts.useLanguage
        : "useJa";

      let calcArray = await CalcPoint(
        CsvData,
        DemoStyle.fileConfig.rankPoint,
        DemoStyle.fileConfig.killPoint,
        DemoStyle.fileConfig.regularRankPoint,
        demoDataAtom,
        useLan,
        setError
      );

      let finalArray = [];
      switch (useLan) {
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

      const completedArray = await CheckKillPoint(
        finalArray,
        DemoStyle.fileConfig.killPoint
      );

      setData(completedArray);
    };
    calc();
  }, [DemoStyle]);

  return (
    <>
      <STYLE $stylesData={DemoStyle} $calcMove={calcMove} id="demo">
        {image ? (
          <img
            src={`${image}`}
            crossorigin="anonymous"
            className="bg-img"
            id="bgImg"
          />
        ) : (
          ""
        )}
        <TITLE_STYLE>
          <p>{DemoStyle.fileConfig.matchTitle}</p>
        </TITLE_STYLE>
        <TABLE_STYLE>
          <CreateTableElement data={data} />
        </TABLE_STYLE>
      </STYLE>
    </>
  );
}

const TITLE_STYLE = styled.div`
  font-size: 2em;
  margin: 1em;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
`;
const STYLE = styled.div`
  position: relative;
  background-color: #fff;
  padding: 2em;
  border-radius: 15px;
  color: ${(props) => props.$stylesData.fonts.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: calc(100% -4em);
  width: fit-content;
  white-space: nowrap;

  .bg-img {
    position: absolute;
    top: ${(props) => props.$calcMove}px;
    left: 0;
    width: 100%;
    z-index: 3;
  }

  p {
    font-family: ${(props) => props.$stylesData.fonts.font_Family};
    font-weight: ${(props) => props.$stylesData.fonts.font_Weight};
  }

  th,
  td {
    padding: 1em;
    text-align: center;
    font-size: ${(props) => props.$stylesData.fonts.fontSize}px;
    font-family: ${(props) => props.$stylesData.fonts.font_Family};
    font-weight: ${(props) => props.$stylesData.fonts.font_Weight};
  }

  th,
  td:not(tr:last-child > td) {
    border-bottom: solid ${(props) => props.$stylesData.decoration.borderColor}
      ${(props) => props.$stylesData.decoration.borderSize}px;
  }

  background-color: ${(props) => props.$stylesData.decoration.bgColor};
`;

const TABLE_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  position: relative;
  #mark {
    text-align: center;
    margin-top: 1em;
  }
`;
