import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import * as common from "../../../Style/Common/Common";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Navigation({ menu }) {
  const pathName = useLocation().pathname;
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  if (pathName !== "/generator") {
    const removeElem = document.getElementById("temporaryFont");
    if (removeElem) {
      document.head.removeChild(removeElem);
    }
  }

  return (
    <>
      <NAVIGATION_STYLE
        id="nav"
        $path={path}
        $menu={menu}
        className="nav-component"
      >
        <nav>
          <ul>
            <li className="nav-button" id="linkToFeature">
              {pathName === "/" ? (
                <ANCHOR_LINK_STYLE
                  className="nav-btn"
                  offset="300"
                  href="#appFeatures"
                >
                  <p>特徴</p>
                </ANCHOR_LINK_STYLE>
              ) : (
                <div className="f-link nav-btn" onClick={ToFeature}>
                  <p>特徴</p>
                </div>
              )}
            </li>
            <li className="nav-button howtoNavButton" id="howtoNavButton">
              {pathName === "/howto" ? (
                <ANCHOR_LINK_STYLE className="nav-btn" href="#howToTop">
                  <p>使い方</p>
                </ANCHOR_LINK_STYLE>
              ) : (
                <LINK_STYLE className="nav-btn" to="/howto">
                  <p>使い方</p>
                </LINK_STYLE>
              )}
            </li>
            <li
              className="nav-button generatorNavButton"
              id="generatorNavButton"
            >
              {/* <LINK_STYLE className="nav-btn" to="/generator">
                <p>ジェネレート</p>
              </LINK_STYLE> */}
              {pathName === "/generator" ? (
                <ANCHOR_LINK_STYLE
                  className="nav-btn"
                  id="toGeneratorButton"
                  href="#generatorTop"
                  offset="300"
                >
                  <p>ジェネレーター</p>
                </ANCHOR_LINK_STYLE>
              ) : (
                <LINK_STYLE
                  id="toGeneratorButton"
                  className="nav-btn"
                  to="/generator"
                >
                  <p>ジェネレーター</p>
                </LINK_STYLE>
              )}
            </li>
            <li className="none">
              <ANCHOR_LINK_STYLE id="test" offset="300" href="#appFeatures" />
              <LINK_STYLE to="/" id="test2" />
            </li>
          </ul>
        </nav>
      </NAVIGATION_STYLE>
    </>
  );
}

export function ToFeature() {
  new Promise((resolve) => {
    document.getElementById("test2").click();
    resolve();
  }).then(() => {
    setTimeout(() => {
      document.getElementById("test").click();
    }, 200);
  });
}

const NAVIGATION_STYLE = styled.div`
  /* 1200px以上　共通のcss */
  display: flex;
  align-items: center;

  li {
    position: relative;
  }
  p {
    color: #8f9194;
    font-family: ${common.MAIN_FONT_FAMILY} !important;
    font-weight: 600;
  }
  li:hover::after {
    content: "";
    display: block;
    position: relative;
    left: 0.25em;
    top: 3px;
    height: 5px;
    background-color: ${common.HIGHT_LIGHT_COLOR};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    animation-name: borderAnimation;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  /* アニメーション */
  @keyframes borderAnimation {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes textAnimation {
    0% {
    }

    100% {
      color: ${common.FONT_COLOR};
    }
  }

  li:hover p {
    position: relative;
    top: 5px;

    animation-name: textAnimation;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  li:hover {
    p {
      padding: calc(0.75em - 5px) 2em;
    }
  }

  /* 特徴用のcss */

  .f-link {
    color: ${common.FONT_COLOR};
    text-decoration: none;
    display: flex;
    text-align: center;
    align-items: center;

    img {
      width: 2.2em;
      height: 2.2em;
    }

    p {
      margin-left: 0.6em;
      font-size: ${common.MAIN_FONT_SIZE}px;
      padding: 0.75em 2em;
      font-weight: 600;
      white-space: nowrap;
    }

    @media screen and (max-width: 1200px) {
      p {
        margin-left: 2em;
      }
    }
  }
  z-index: 30;
  ul {
    display: flex;
    list-style: none;
  }

  .none {
    display: none;
  }

  .nav-button {
    margin: 0 2em;
    text-align: center;
    font-weight: 600;
  }

  /* 現在のページのハイライト */
  ${(props) =>
    props.$path === "/generator"
      ? `  .generatorNavButton::after {
    content: "";
    display: block;
    position: relative;
    left: 0.25em;
    height: 5px;
    background-color: ${common.HIGHT_LIGHT_COLOR};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    top: 3px;
  }

  .generatorNavButton p {
    position: relative;
    top: 5px;
    color: ${common.FONT_COLOR};
    padding: calc(0.75em - 5px) 2em;
  }`
      : ""}

  ${(props) =>
    props.$path === "/howto"
      ? `  .howtoNavButton::after {
    content: "";
    display: block;
    position: relative;
    left: 0.25em;
    height: 5px;
    background-color: ${common.HIGHT_LIGHT_COLOR};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    top: 3px;
  }

  .howtoNavButton p {
    position: relative;
    top: 5px;
    color: ${common.FONT_COLOR};
    padding: calc(0.75em - 5px) 2em;
  }`
      : ""}


        /* レスポンシブル */
  @media screen and (max-width: 1200px) {
    position: ${(props) => (props.$menu === true ? "relative" : "fixed")};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    background-color: ${common.MAIN_COLOR};
    display: ${(props) => (props.$menu === true ? "none" : "flex")};
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .f-link {
      p {
        margin-left: 0;
      }
    }

    .nav-button {
      margin: 2.8em 0;
    }

    li:hover::after {
      left: 0;
      top: 2.5px;
    }

    li:hover p {
      top: 2.5px;
      padding: calc(0.75em - 2.5px) 2em;
    }

    ${(props) =>
      props.$path === "/generator"
        ? `  .generatorNavButton::after {
    content: "";
    display: block;
    position: relative;
    left: 0;
    top:2.5px;
    height: 5px;
    width:100%;
    background-color: ${common.HIGHT_LIGHT_COLOR};
  }


  .generatorNavButton p {
    top: 2.5px;
    padding: calc(0.75em - 2.5px) 2em;
  }
`
        : ""}

    ${(props) =>
      props.$path === "/howto"
        ? `  .howtoNavButton::after {
    left: 0;
    top:2.5px;
    width:100%;
  }
  .howtoNavButton p {
    top: 2.5px;
    padding: calc(0.75em - 2.5px) 2em;
  }
  
  `
        : ""}
  }
`;

const LINK_STYLE = styled(Link)`
  display: flex;
  text-align: center;
  color: ${common.FONT_COLOR};
  text-decoration: none;

  border-radius: 2em;
  position: relative;

  img {
    width: 2.2em;
    height: 2.2em;
  }
  p {
    margin-left: 0.6em;
    font-weight: 600;
    font-size: ${common.MAIN_FONT_SIZE}px;
    padding: 0.75em 2em;
  }

  @media screen and (max-width: 1200px) {
    p {
      margin-left: 0;
    }
  }
`;

const ANCHOR_LINK_STYLE = styled(AnchorLink)`
  color: ${common.FONT_COLOR};
  text-decoration: none;
  display: flex;
  text-align: center;

  img {
    width: 2.2em;
    height: 2.2em;
  }
  p {
    margin-left: 0.6em;
    font-weight: 600;
    font-size: ${common.MAIN_FONT_SIZE}px;
    padding: 0.75em 2em;
  }

  @media screen and (max-width: 1200px) {
    p {
      margin-left: 0;
    }
  }
`;
