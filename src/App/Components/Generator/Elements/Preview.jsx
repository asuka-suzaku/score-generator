import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { StylesAtom } from "../../../Store/StylesAtom";
import { CreateElement } from "../Function/Create/CreateTable";
import { FileToCsv } from "../Function/FileToCsv";
import React, { useEffect } from "react";
import { DomToSvg } from "../Function/DomToSvg";
import { CssLike } from "../Function/Calculation/CssLike";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

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

  const them = {
    fontColor: styles.fonts.fontColor,
    fontSize: styles.fonts.fontSize,
    width: styles.fileConfig.contentWidth,
    hight: styles.fileConfig.contentHight,
    imageURL: image,
    borderColor: styles.decoration.borderColor,
    borderSize: styles.decoration.borderSize,
  };

  let title = styles?.fileConfig?.matchTitle
    ? styles.fileConfig.matchTitle
    : "タイトル";

  // console.log(styles.fileConfig.contentWidth);

  return (
    <>
      <CONTENT_STYLE id="CreateImg">
        {them.imageURL ? (
          <img
            src={`${them.imageURL}`}
            crossorigin="anonymous"
            className="bg-img"
          />
        ) : (
          ""
        )}

        {/* <BG $img={`url(${them.imageURL})`}> */}
        <IS_STYLE className="main-table" $stylesData={them}>
          <div className="content-wrap">
            <TITLE_STYLE>
              <p>{title}</p>
            </TITLE_STYLE>
            <TABLE_STYLE>
              <CreateElement />
            </TABLE_STYLE>
          </div>
        </IS_STYLE>
        {/* </BG> */}
      </CONTENT_STYLE>
    </>
  );
}

const BG = styled.div`
  background-image: ${(props) => props.$img};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const IS_STYLE = styled.div`
  color: ${(props) => props.$stylesData.fontColor};
  width: ${(props) => props.$stylesData.width}px;
  height: ${(props) => props.$stylesData.hight}px;
  display: flex;
  justify-content: center;
  align-items: center;

  th,
  td {
    font-size: ${(props) => props.$stylesData.fontSize}px;
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
  background-color: #fff;
  position: relative;

  .main-table {
    z-index: 3;
  }

  .bg-img {
    position: absolute;
    top: 0;
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
