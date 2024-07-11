import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ToFeature } from "../../Header/Elements/Navigation";
import * as common from "../../../Style/Common/Common";

export default function InPageLink() {
  const pathName = useLocation().pathname;
  return (
    <>
      <INPAGE_LINK_STYLE>
        <INPAGE_LINK_CONTENT_STYLE className="footer-links">
          <p className="link-title">サイトマップ</p>
          <ul>
            <li>
              {pathName === "/" ? (
                <ANCHOR_STYLE
                  className="animation-footer"
                  href="#mainTop"
                  offset="200"
                >
                  トップページ
                </ANCHOR_STYLE>
              ) : (
                <LINK_STYLE className="animation-footer" to="/">
                  トップページ
                </LINK_STYLE>
              )}
            </li>
            <li>
              {pathName === "/" ? (
                <ANCHOR_STYLE
                  className="animation-footer"
                  offset="300"
                  href="#appFeatures"
                >
                  特徴
                </ANCHOR_STYLE>
              ) : (
                <LINK_STYLE className="animation-footer" onClick={ToFeature}>
                  特徴
                </LINK_STYLE>
              )}
            </li>
            <li>
              {pathName === "/howto" ? (
                <ANCHOR_STYLE className="animation-footer" href="#howToTop">
                  使い方
                </ANCHOR_STYLE>
              ) : (
                <LINK_STYLE className="animation-footer" to="/howto">
                  使い方
                </LINK_STYLE>
              )}
            </li>
            <li>
              {pathName === "/generator" ? (
                <AnchorLink
                  className="animation-footer"
                  href="#generatorTop"
                  offset="200"
                >
                  ジェネレーター
                </AnchorLink>
              ) : (
                <LINK_STYLE className="animation-footer" to="/generator">
                  ジェネレーター
                </LINK_STYLE>
              )}
            </li>
          </ul>
        </INPAGE_LINK_CONTENT_STYLE>
        <INPAGE_LINK_CONTENT_STYLE className="footer-links">
          <p className="link-title">利用規約</p>
          <ul>
            <li>
              {pathName === "/rules" ? (
                <ANCHOR_STYLE
                  className="animation-footer"
                  href="#termOfUseTop"
                  offset="200"
                >
                  利用規約ページ
                </ANCHOR_STYLE>
              ) : (
                <LINK_STYLE className="animation-footer" to="/rules">
                  利用規約ページ
                </LINK_STYLE>
              )}
            </li>
          </ul>
        </INPAGE_LINK_CONTENT_STYLE>
        <INPAGE_LINK_CONTENT_STYLE className="footer-links">
          <p className="link-title animation-footer">連絡先</p>
          <ul>
            <li>
              <a
                href="https://x.com/suzaku_asuka"
                target="_blank"
                rel="noopener noreferrer"
              >
                X:@suzaku_asuka
              </a>
            </li>
          </ul>
        </INPAGE_LINK_CONTENT_STYLE>
      </INPAGE_LINK_STYLE>
    </>
  );
}

const ANCHOR_STYLE = styled(AnchorLink)`
  text-decoration: none;
  color: ${common.FONT_COLOR};
`;

const LINK_STYLE = styled(Link)`
  text-decoration: none;
  color: ${common.FONT_COLOR};
`;

const INPAGE_LINK_STYLE = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const INPAGE_LINK_CONTENT_STYLE = styled.div`
  .link-title {
    font-weight: ${common.BOLD_FONT_WIGHT};
  }
  p {
    position: relative;
    left: -1em;
    margin-bottom: 2em;
  }
  ul {
    list-style: none;
  }

  li {
    margin: 0.5em 0;
    width: fit-content;
    padding: 0.5em 0;
  }

  a {
    text-decoration: none;
    color: ${common.FONT_COLOR};
  }

  li:hover::after {
    content: "";
    display: block;
    position: relative;
    left: 0;
    top: 5px;
    height: 5px;
    background-color: #acbebe;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    animation-name: borderAnimation;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  li:hover {
    position: relative;
    padding: calc(0.5em - 2.5px) 0;
    animation-name: textAnimation;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  li:hover > * {
    position: relative;
    top: 2.5px;
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

  @media screen and (max-width: 800px) {
    p {
      margin-bottom: 1em;
    }
  }

  @media screen and (max-width: 500px) {
    .link-title {
      font-weight: 700;
    }
    p {
      left: 0;
    }
  }
`;
