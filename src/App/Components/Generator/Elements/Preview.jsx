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

  //スタイルの設定
  const IS_STYLE = styled.div`
    color: ${styles?.fonts?.fontColor};
    width: ${styles?.fileConfig?.contentWidth}px;
    height: ${styles?.fileConfig?.contentHight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: lighten;

    th,
    td {
      font-size: ${styles?.fonts?.fontSize}px;
    }

    th,
    td:not(tr:last-child > td) {
      border-bottom: solid ${styles?.decoration?.borderColor}
        ${styles?.decoration?.borderSize}px;
    }
  `;

  let title = styles?.fileConfig?.matchTitle
    ? styles.fileConfig.matchTitle
    : "タイトル";

  // console.log(styles.fileConfig.contentWidth);

  return (
    <>
      <CONTENT_STYLE id="CreateImg">
        <IS_STYLE>
          <div className="content-wrap">
            <TITLE_STYLE>
              <p>{title}</p>
            </TITLE_STYLE>
            <TABLE_STYLE>
              <CreateElement />
            </TABLE_STYLE>
          </div>
        </IS_STYLE>
      </CONTENT_STYLE>
      {/* <Link to="/generate">戻る</Link> */}
    </>
  );
}

const CONTENT_STYLE = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: #fff;
  position: relative;
  width: fit-content;
`;

const TITLE_STYLE = styled.div`
  font-size: 3em;
  margin: 2em;
  display: flex;
  justify-content: center;
`;

const TABLE_STYLE = styled.div`
  z-index: 99;
  th,
  td {
    padding: 1em 2em;
    text-align: center;
    font-size: 18px;
  }

  #mark {
    text-align: center;
    margin-top: 3em;
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
