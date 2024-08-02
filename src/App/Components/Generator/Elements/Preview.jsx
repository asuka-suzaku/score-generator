import { useRecoilState } from "recoil";
import styled from "styled-components";
import { StylesAtom, ToggleAtom } from "../../../Store/StylesAtom";
import { CreateElement } from "../Function/Create/CreateTable";
import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import GeneratorErrorPage from "../../Error/GeneratorErrorPage";

export default function Preview() {
  //背景画像の設定
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const [topDifference, setTopDifference] = useState(0);
  const [leftDifference, setLeftDifference] = useState(0);
  const [toggle, setToggle] = useRecoilState(ToggleAtom);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const h_body = window.innerHeight;
    const w_body = window.innerWidth;
    setScreenHeight(h_body);
    setScreenWidth(w_body);
  }, [styles, toggle]);

  let image;
  const file = styles?.decoration?.bgImg[0];

  useEffect(() => {
    const tableElement = document.getElementById("mainElement");
    if (tableElement) {
      const tem_body_h = window.innerHeight;
      const tem_body_w = window.innerWidth;

      if (tem_body_h !== screenHeight) {
        setScreenHeight(tem_body_h);
      }

      if (tem_body_w !== screenWidth) {
        setScreenWidth(tem_body_w);
      }

      const tableElementStyle = tableElement.getBoundingClientRect();

      switch (toggle) {
        case "block":
          if (tableElementStyle.height > screenHeight * 0.8) {
            const topDif =
              tableElementStyle.height / 2 - (screenHeight * 0.8) / 2;

            let add = 0;

            if (styles.fileConfig.contentHight > tableElementStyle.height) {
              add =
                (styles.fileConfig.contentHight - tableElementStyle.height) / 2;
            }

            if (topDif > 0) {
              setTopDifference(topDif + add);
            }
          } else {
            const topDif =
              (styles.fileConfig.contentHight - screenHeight * 0.8) / 2;
            setTopDifference(topDif);
          }

          if (tableElementStyle.width > screenWidth * 0.9) {
            const leftDif =
              tableElementStyle.width / 2 - (screenWidth * 0.9) / 2;

            let add = 0;

            if (styles.fileConfig.contentWidth > tableElementStyle.width) {
              add =
                (styles.fileConfig.contentWidth - tableElementStyle.width) / 2;
            }

            if (leftDif > 0) {
              setLeftDifference(leftDif + add);
            }
          } else {
            const leftDif =
              (styles.fileConfig.contentWidth - screenWidth * 0.9) / 2;
            if (leftDif > 0) {
              setLeftDifference(leftDif);
            }
          }

          break;
        case "none":
          if (tableElementStyle.height > screenHeight) {
            const topDif =
              tableElementStyle.height / 2 - (screenHeight * 0.85) / 2;

            let add = 0;

            if (styles.fileConfig.contentHight > tableElementStyle.height) {
              add =
                (styles.fileConfig.contentHight - tableElementStyle.height) / 2;
            }

            if (topDif > 0) {
              setTopDifference(topDif + add);
            }
          } else {
            const topDif =
              (styles.fileConfig.contentHight - screenHeight * 0.85) / 2;

            if (topDif > 0) {
              setTopDifference(topDif);
            }
          }

          if (tableElementStyle.width > screenWidth) {
            const leftDif = tableElementStyle.width / 2 - screenWidth / 2;

            let add = 0;

            if (styles.fileConfig.contentWidth > tableElementStyle.width) {
              add =
                (styles.fileConfig.contentWidth - tableElementStyle.width) / 2;
            }

            if (leftDif > 0) {
              setLeftDifference(leftDif + add);
            }
          } else {
            const leftDif = (styles.fileConfig.contentWidth - screenWidth) / 2;
            if (leftDif > 0) {
              setLeftDifference(leftDif);
            }
          }
          break;
      }
    }
  }, [styles, toggle]);

  useEffect(() => {
    setLeftDifference(0);
    setTopDifference(0);
  }, []);

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
        $topDif={topDifference}
        $leftDif={leftDifference}
        $contentW={screenWidth}
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
              <TITLE_STYLE $fontSize={them.fontSize}>
                <p>{title}</p>
              </TITLE_STYLE>
              <TABLE_STYLE $fontSize={them.fontSize}>
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
  position: relative;
  top: ${(props) => props.$topDif}px;
  left: ${(props) => props.$leftDif}px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: ${(props) => props.$bgColor};
  position: relative;
  width: fit-content;
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
  font-size: ${(props) => props.$fontSize * 3}px;
  margin: 2em;
  display: flex;
  justify-content: center;
  position: relative;
`;

const TABLE_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 30;

  th,
  td {
    padding: 1em 2em;
    text-align: center;
  }

  #mark {
    text-align: center;
    font-size: ${(props) => props.$fontSize}px;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .message-span {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .message-span {
      display: block;
    }
  }
`;
