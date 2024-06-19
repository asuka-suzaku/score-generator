import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ContentDataAtom, StylesAtom } from "../../../Store/StylesAtom";
import { CreateElement } from "../Function/Create/CreateTable";
import { FileToCsv } from "../Function/FileToCsv";
import React, { useEffect } from "react";
import { DomToSvg } from "../Function/DomToSvg";
import { CssLike } from "../Function/Calculation/CssLike";

export default function Preview() {
  //背景画像の設定
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const contentData = useRecoilValue(ContentDataAtom);
  let image;
  const file = styles?.decoration?.bgImg[0];

  if (file) {
    image = window.URL.createObjectURL(file);
  }

  //使用言語の設定
  let styleLang = styles?.fonts?.useLanguage;

  let lang;

  if (styleLang) {
    switch (styleLang) {
      case "useEn":
        lang = "English";
        break;
      case "useJa":
        lang = "Japanese";
    }
  }

  //csvファイルの設定

  const csvFile = styles.fileConfig?.file[0];
  // let CsvData = [];
  // if (csvFile) {
  //   FileToCsv(csvFile, setContentDataAtom);
  // }

  //スタイルの設定
  // const IS_STYLE = styled.svg`
  //   color: ${styles?.fonts?.fontColor};
  //   width: ${styles?.fileConfig?.contentWidth}px;
  //   height: ${styles?.fileConfig?.contentHight}px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background-image: url(${image});
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-size: cover;
  //   background-blend-mode: lighten;

  //   th,
  //   td {
  //     font-size: ${styles?.fonts?.fontSize}px;
  //   }

  //   th,
  //   td:not(tr:last-child > td) {
  //     border-bottom: solid ${styles?.decoration?.borderColor}
  //       ${styles?.decoration?.borderSize}px;
  //   }
  // `;

  function CALC_WIDTH_FUNC(CALC_WIDTH_UNIT, textWidth, constantXArray) {
    let total = 0;
    const sumX = constantXArray.map((data) => {
      total += data;
    });

    const result =
      total + CALC_WIDTH_UNIT - (CALC_WIDTH_UNIT / 2 + textWidth / 2);

    return result;
  }

  useEffect(() => {
    const contentWidth = styles.fileConfig.contentWidth;
    const contentHight = styles.fileConfig.contentHight;
    const fontSize = styles.fonts.fontSize;
    const margin_h = fontSize;
    const margin_w = fontSize * 5;

    const halfWidth = contentWidth / 2;
    const halfHight = contentHight / 2;
    const TITLE = document.getElementById("tableTitle");
    const titleStyle = TITLE.getBoundingClientRect();
    TITLE.setAttribute("font-size", `${fontSize * 3}`);
    TITLE.setAttribute("fill", `${styles.fonts.fontColor}`);
    TITLE.setAttribute(
      "transform",
      `translate(${halfWidth - titleStyle.width / 2},${fontSize * 10})`
    );

    const TABLE = document.getElementById("table");
    if (TABLE) {
      const tableStyle = TABLE.getBoundingClientRect();
      TABLE.setAttribute(
        "transform",
        `translate(${halfWidth - tableStyle.width / 2},${
          halfHight - tableStyle.height / 2
        })`
      );
      TABLE.setAttribute("dy", `${fontSize}`);
      TABLE.setAttribute("fill", `${styles.fonts.fontColor}`);

      //横幅の計算
      let MAX_LENGTH = 0;
      if (contentData[0]) {
        const arrayAmount = contentData?.length;

        const constantXArray = [];
        for (let i = 0; i < contentData[0].length; i++) {
          const temporaryArray = [];

          //一行を取得してレングス順で並べ替え
          for (let x = 0; x < arrayAmount; x++) {
            temporaryArray.push(contentData[x][i]);
          }
          temporaryArray.sort((a, b) => {
            return b.length - a.length;
          });

          MAX_LENGTH = Number(temporaryArray[0].length);

          //公式のXを計算
          const CALC_WIDTH_UNIT =
            Number(MAX_LENGTH) * Number(fontSize) + Number(margin_w);

          //一行に反映させる
          for (let z = 0; z < contentData.length; z++) {
            const TEXT = document.getElementById(`${z + 1}-${i + 1}`);
            if (TEXT) {
              const textStyle = TEXT.getBoundingClientRect();
              const textWidth = textStyle.width;
              TEXT.setAttribute(
                "transform",
                `translate(${CALC_WIDTH_FUNC(
                  CALC_WIDTH_UNIT,
                  textWidth,
                  constantXArray
                )},0)`
              );
            }
          }

          //後の計算のために配列に入れる
          constantXArray.push(CALC_WIDTH_UNIT);
        }

        for (let a = 0; a < contentData.length; a++) {
          const LINE = document.getElementById(`line-${a + 1}`);
          if (LINE) {
            const lineStyle = LINE.getBoundingClientRect();
            LINE.setAttribute(
              "transform",
              `translate(0,${
                a * (fontSize + 2 * margin_h + styles.decoration.borderSize)
              })`
            );
          }
        }
      }
    }
  }, [styles, contentData]);

  let title = styles?.fileConfig?.matchTitle
    ? styles.fileConfig.matchTitle
    : "タイトル";

  // console.log(styles.fileConfig.contentWidth);

  return (
    <>
      <CONTENT_STYLE>
        <svg
          id="element"
          width={`${styles.fileConfig.contentWidth}`}
          height={`${styles.fileConfig.contentHight}`}
          viewBox="0,0,1920,1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <text id="tableTitle" viewBox="0,0,1920,1080">
              {title}
            </text>
          </g>

          <g id="table">
            <CreateElement ex={title} />
          </g>
        </svg>
      </CONTENT_STYLE>

      {/* <Link to="/generate">戻る</Link> */}
    </>
  );
}

const CANVAS_STYLE = styled.canvas`
  display: block;
`;

const CONTENT_STYLE = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: #fff;
  position: relative;
  width: fit-content;
`;

const TITLE_STYLE = styled.g`
  font-size: 3em;
  margin: 2em;
  display: flex;
  justify-content: center;
`;

const TABLE_STYLE = styled.g`
  z-index: 99;
  th,
  td {
    padding: 1em 2em;
    text-align: center;
    font-size: 18px;
  }
`;

const texts = {
  English: {
    rankTitle: "RANK",
    teamNameTitle: "TEAM NAME",
    matchCountTitle: "NO.",
    totalTitle: "TOTAL",
    killPointTitle: "KILL POINTS",
  },

  Japanese: {
    rankTitle: "順位",
    teamNameTitle: "チーム名",
    matchCountTitle: "試合目",
    totalTitle: "合計",
    killPointTitle: "キルポイント",
  },
};

// <th>{texts[lang]?.rankTitle}</th>
//                     <th>{texts[lang]?.teamNameTitle}</th>
//                     <th>{texts[lang]?.matchCountTitle}</th>
//                     <th>{texts[lang]?.matchCountTitle}</th>
//                     <th>{texts[lang]?.matchCountTitle}</th>
//                     <th>{texts[lang]?.killPointTitle}</th>
//                     <th>{texts[lang]?.totalTitle}</th>

// let CsvData = [];
// if (csvFile) {
//   FileToCsv(csvFile, setContentDataAtom);
// }

//スタイルの設定
// const IS_STYLE = styled.svg`
//   color: ${styles?.fonts?.fontColor};
//   width: ${styles?.fileConfig?.contentWidth}px;
//   height: ${styles?.fileConfig?.contentHight}px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url(${image});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   background-blend-mode: lighten;

//   th,
//   td {
//     font-size: ${styles?.fonts?.fontSize}px;
//   }

//   th,
//   td:not(tr:last-child > td) {
//     border-bottom: solid ${styles?.decoration?.borderColor}
//       ${styles?.decoration?.borderSize}px;
//   }
// `;
