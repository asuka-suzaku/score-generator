import { useCallback, useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { StylesAtom } from "../../../Store/StylesAtom";
import Test from "../Function/Test";

export default function Preview() {
  //背景画像の設定
  const styles = useRecoilValue(StylesAtom);

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

  if (csvFile) {
    Test(csvFile);
  }

  // if (csvFile) {
  //   const reader = new FileReader();
  //   reader.onload = function (e) {
  //     console.log(e);
  //     const contents = e.target.result;
  //     const lines = contents.split("\n");
  //     const result = lines.map((line) => line.split(","));
  //     // console.log(result);
  //   };
  //   reader.readAsText(csvFile);
  // }

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
    td:not(.last > td) {
      border-bottom: solid ${styles?.decoration?.borderColor}
        ${styles?.decoration?.borderSize}px;
    }
  `;

  let title = styles?.fileConfig?.matchTitle
    ? styles.fileConfig.matchTitle
    : "タイトル";
  return (
    <>
      <CONTENT_STYLE>
        <IS_STYLE>
          <div className="content-wrap">
            <TITLE_STYLE>
              <p>{title}</p>
            </TITLE_STYLE>
            <TABLE_STYLE>
              <table>
                <tbody>
                  <tr>
                    <th>{texts[lang]?.rankTitle}</th>
                    <th>{texts[lang]?.teamNameTitle}</th>
                    <th>{texts[lang]?.matchCountTitle}</th>
                    <th>{texts[lang]?.matchCountTitle}</th>
                    <th>{texts[lang]?.matchCountTitle}</th>
                    <th>{texts[lang]?.killPointTitle}</th>
                    <th>{texts[lang]?.totalTitle}</th>
                  </tr>
                  <tr>
                    <td>1位</td>
                    <td>チーム1</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <th>50</th>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>2位</td>
                    <td>チーム2</td>
                    <td>75</td>
                    <td>75</td>
                    <td>75</td>
                    <td>40</td>
                    <td>265</td>
                  </tr>
                  <tr>
                    <td>3位</td>
                    <td>チーム3</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>30</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>4位</td>
                    <td>チーム4</td>
                    <td>25</td>
                    <td>25</td>
                    <td>25</td>
                    <td>20</td>
                    <td>95</td>
                  </tr>
                  <tr className="last">
                    <td>5位</td>
                    <td>チーム5</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </table>
            </TABLE_STYLE>
          </div>
        </IS_STYLE>
      </CONTENT_STYLE>
    </>
  );
}

const CONTENT_STYLE = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: #fff;
  overflow: scroll;
  position: relative;
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
