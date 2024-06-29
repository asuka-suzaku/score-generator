import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import * as common from "../../../Style/Common/Common";
import { Link } from "react-router-dom";

export default function Navigation({ menu }) {
  return (
    <>
      <NAVIGATION_STYLE $menu={menu} className="nav-component">
        <nav>
          <ul>
            <li className="nav-button">
              <ANCHOR_LINK_STYLE offset="300" href="#appFeatures">
                <img src="/img/icon_ex.png" alt="" />
                <p>特徴</p>
              </ANCHOR_LINK_STYLE>
            </li>
            <li className="nav-button">
              <ANCHOR_LINK_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>使い方</p>
              </ANCHOR_LINK_STYLE>
            </li>
            <li className="nav-button">
              <LINK_STYLE to="/generator">
                <img src="/img/icon_ex.png" alt="" />
                <p>ジェネレート</p>
              </LINK_STYLE>
            </li>
          </ul>
        </nav>
      </NAVIGATION_STYLE>
    </>
  );
}

const NAVIGATION_STYLE = styled.div`
  z-index: 30;
  ul {
    display: flex;
  }

  .nav-button {
    margin: 0 2.8em;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: ${common.MAIN_FONT_SIZE * 2};
    background-color: ${common.MAIN_COLOR};
    display: ${(props) => (props.$menu === true ? "none" : "flex")};
    ul {
      display: block;
    }

    .nav-button {
      margin: 2.8em 0;
    }
  }
`;

const LINK_STYLE = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  color: ${common.FONT_COLOR};
  text-decoration: none;

  img {
    width: 2.2em;
    height: 2.2em;
  }
  p {
    margin-left: 0.6em;
  }

  @media screen and (max-width: 1200px) {
    p {
      margin-left: 2em;
    }
  }
`;

const ANCHOR_LINK_STYLE = styled(AnchorLink)`
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
  }

  @media screen and (max-width: 1200px) {
    p {
      margin-left: 2em;
    }
  }
`;
