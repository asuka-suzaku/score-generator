import styled from "styled-components";
import Preview from "./Elements/Preview";
import Setting from "./Elements/Setting";
import {
  MenuAtom,
  StylesAtom,
  ToggleAtom,
  FontsJaAtom,
} from "../../Store/StylesAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import * as common from "../../Style/Common/Common";
import { CreateImage } from "./Function/Create/CreateImage";
import Navigation from "../Header/Elements/Navigation";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../Route/ScrollToTop";
import { useEffect } from "react";
import ErrorPage from "../Error/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
import HeaderErrorPage from "../Error/HeaderErrorPage";
import GeneratorErrorPage from "../Error/GeneratorErrorPage";
import { useState } from "react";
import TermOfUse from "../TermOfUse/TermOfUse";

export default function Generator() {
  const [consent, setConsent] = useState(false);
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const width = styles.fileConfig.contentWidth
    ? styles.fileConfig.contentWidth
    : "1920";
  const hight = styles.fileConfig.contentHight
    ? styles.fileConfig.contentHight
    : "1080";
  const [toggle, setToggle] = useRecoilState(ToggleAtom);
  const [fonts, setFonts] = useRecoilState(FontsJaAtom);
  const [po_width, setPo_width] = useState(0);
  const [po_height, setPo_height] = useState(0);

  let calcWidth = 0;
  let calcHeight = 0;

  useEffect(() => {
    const elem = document.getElementById("CreateImg");
    if (elem) {
      const elemWidth = elem.getBoundingClientRect().width;
      const elemHeight = elem.getBoundingClientRect().height;

      calcWidth = (elemWidth - width) / 2;
      calcHeight = (elemHeight - hight) / 2;
    }
  }, [styles]);

  if (calcWidth > 0) {
  }

  const handleConsent = () => {
    setConsent(!consent);
  };

  const handleToggle = () => {
    if (toggle === "block") {
      setToggle("none");
    } else {
      setToggle("block");
    }

    document.getElementById("toGeneratorButton").click();
  };

  const [menu, setMenu] = useRecoilState(MenuAtom);

  useEffect(() => {
    setMenu(true);
  }, []);

  // const handle = () => {
  //   Test();
  // };
  return (
    <>
      <Navigation menu={menu} />
      <GENERATOR_STYLE
        id="generatorTop"
        $po_w={po_width}
        $po_h={po_height}
        $toggle={toggle}
      >
        <div className="preview">
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Preview />
          </ErrorBoundary>
        </div>
        <div className="setting pre">
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Setting />
          </ErrorBoundary>
        </div>

        {toggle === "block" ? (
          <div id="fullPreviewIn" className="view" onClick={handleToggle}>
            フルサイズ
          </div>
        ) : (
          <div id="fullPreviewOut" className="view" onClick={handleToggle}>
            設定画面へ戻る
          </div>
        )}

        <div className="consent-button pre">
          <div className="consent-service pre">
            <TermOfUse />
          </div>
          <div className="consent-input pre">
            <input
              className="pre"
              id="consent"
              name="consent"
              type="checkbox"
              onClick={handleConsent}
            />
            <label className="pre" htmlFor="consent">
              同意する
            </label>
          </div>
        </div>

        <div className="export pre">
          {consent ? (
            <EXPORT
              type="button"
              className="after-consent"
              onClick={() => CreateImage(width, hight)}
            >
              出力
            </EXPORT>
          ) : (
            <p className="un-content-button">出力</p>
          )}
        </div>
      </GENERATOR_STYLE>
      <Footer />
    </>
  );
}

const EXPORT = styled.p`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 1em 6.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }
`;

const GENERATOR_STYLE = styled.main`
  position: relative;
  top: ${(props) => (props.$toggle === "block" ? "6em" : "0")};
  animation-name: smooth;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;

  @keyframes smooth {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  z-index: 2;
  .pre {
    display: ${(props) => props.$toggle};
  }

  .view:hover {
    cursor: pointer;
  }
  .view {
    padding: 1em 6.5em;
    border-radius: 13em;
    margin: 2em 0;
    background-color: ${common.HIGHT_LIGHT_COLOR};
    color: ${common.MAIN_COLOR};
    @media screen and (max-width: 500px) {
      padding: 1em 3em;
    }
  }

  .consent-button {
    width: 70%;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .consent-input {
    margin-top: 2em;
    font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
    display: flex;
    align-items: center;
  }

  .consent-input input {
    width: ${common.SECTION_TITLE_FONT_SIZE}px;
    height: ${common.SECTION_TITLE_FONT_SIZE}px;
    position: relative;
    top: 2px;
    margin-right: 1em;
  }

  .consent-service {
    border: 2px solid ${common.FONT_COLOR};
    border-radius: 15px;
    padding: 1em;
    width: 100%;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .un-content-button {
    padding: 1em 6.5em;
    border-radius: 13em;
    margin: 2em 0;
    background-color: #cf8d92;
    color: ${common.MAIN_COLOR};
    @media screen and (max-width: 500px) {
      padding: 1em 3em;
    }
  }

  .after-consent:hover {
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .setting {
    max-width: 1200px;
  }

  .preview {
    display: grid;
    place-content: center;
    overflow: scroll;
    width: ${(props) => (props.$toggle === "block" ? "90vw" : "100vw")};
    height: ${(props) => (props.$toggle === "block" ? "80vh" : "85vh")};
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    .preview {
      height: ${(props) => (props.$toggle === "block" ? "70vh" : "80vh")};
    }
  }

  @media screen and (max-width: 500px) {
    .view {
      padding: 1em 3em;
    }
  }
`;
