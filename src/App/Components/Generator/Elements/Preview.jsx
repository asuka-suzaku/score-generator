import { useRecoilState } from "recoil";
import styled from "styled-components";
import { StylesAtom } from "../../../Store/StylesAtom";
import { CreateElement } from "../Function/Create/CreateTable";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import GeneratorErrorPage from "../../Error/GeneratorErrorPage";

export default function Preview() {
  //背景画像の設定
  const [styles, setStyles] = useRecoilState(StylesAtom);
  let image;
  const file = styles?.decoration?.bgImg[0];

  if (file) {
    image = window.URL.createObjectURL(file);
  }

  //使用言語の設定
  let styleLang = styles?.fonts?.useLanguage;

  let elementMove = 0;
  const imgElement = document.getElementById("bgImg");
  if (imgElement) {
    const elementHeight = imgElement.getBoundingClientRect().height;
    elementMove = elementHeight / 2;
  }

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

  const fontData = styles.fonts.fontFamily.split(",");
  const fontName = fontData[0].replace(/\s/g, "+");

  const removeElem = document.getElementById("temporaryFont");
  if (removeElem) {
    document.head.removeChild(removeElem);
  }

  const fontLink = `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`;
  const link = document.createElement("link");
  link.href = fontLink;
  link.rel = "stylesheet";
  link.id = "temporaryFont";
  document.head.appendChild(link);

  const css_family = `"${fontData[0]}",${fontData[1]}`;

  const them = {
    fontColor: styles.fonts.fontColor,
    fontSize: styles.fonts.fontSize,
    width: styles.fileConfig.contentWidth,
    hight: styles.fileConfig.contentHight,
    imageURL: image,
    borderColor: styles.decoration.borderColor,
    borderSize: styles.decoration.borderSize,
    font_Family: css_family,
    font_Weight: fontData[2],
  };

  let title = styles?.fileConfig?.matchTitle
    ? styles.fileConfig.matchTitle
    : "タイトル";

  const calcMove =
    styles.fileConfig.contentHight / 2 - elementMove
      ? styles.fileConfig.contentHight / 2 - elementMove
      : 0;

  return (
    <>
      <CONTENT_STYLE
        className="test"
        $bgColor={styles.decoration.bgColor}
        id="CreateImg"
        $calcMove={calcMove}
      >
        {them.imageURL ? (
          <img
            src={`${them.imageURL}`}
            crossorigin="anonymous"
            className="bg-img"
            id="bgImg"
          />
        ) : (
          ""
        )}

        <IS_STYLE className="main-table" $stylesData={them}>
          <div className="content-wrap" id="mainElement">
            <ErrorBoundary FallbackComponent={GeneratorErrorPage}>
              <TITLE_STYLE>
                <p>{title}</p>
              </TITLE_STYLE>
              <TABLE_STYLE>
                <CreateElement />
              </TABLE_STYLE>
            </ErrorBoundary>
          </div>
        </IS_STYLE>
      </CONTENT_STYLE>
    </>
  );
}

const IS_STYLE = styled.div`
  color: ${(props) => props.$stylesData.fontColor};
  width: ${(props) => props.$stylesData.width}px;
  height: ${(props) => props.$stylesData.hight}px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${(props) => props.$stylesData.font_Family};
    font-weight: ${(props) => props.$stylesData.font_Weight};
  }

  th,
  td {
    font-size: ${(props) => props.$stylesData.fontSize}px;
    font-family: ${(props) => props.$stylesData.font_Family};
    font-weight: ${(props) => props.$stylesData.font_Weight};
  }

  th,
  td:not(tr:last-child > td) {
    border-bottom: solid ${(props) => props.$stylesData.borderColor}
      ${(props) => props.$stylesData.borderSize}px;
  }
`;

const CONTENT_STYLE = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: ${(props) => props.$bgColor};
  position: relative;
  .main-table {
    z-index: 3;
  }

  .bg-img {
    position: absolute;
    top: ${(props) => props.$calcMove}px;
    left: 0;
    width: 100%;
  }
`;

const TITLE_STYLE = styled.div`
  font-size: 3em;
  margin: 2em;
  display: flex;
  justify-content: center;
  position: relative;
`;

const TABLE_STYLE = styled.div`
  position: relative;
  z-index: 30;
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
