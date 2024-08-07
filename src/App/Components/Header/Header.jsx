import styled from "styled-components";
import Logo from "./Elements/Logo";
import Navigation from "./Elements/Navigation";
import * as common from "../../Style/Common/Common";
import { Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { MenuAtom, ToggleAtom } from "../../Store/StylesAtom";
import { ErrorBoundary } from "react-error-boundary";
import HeaderErrorPage from "../Error/HeaderErrorPage";

export default function Header() {
  const toggle = useRecoilValue(ToggleAtom);
  const [menu, setMenu] = useRecoilState(MenuAtom);
  const handleMenu = () => setMenu(!menu);
  return (
    <>
      <HEADER_STYLE $toggle={toggle}>
        <div className="header">
          <Logo />

          <ErrorBoundary FallbackComponent={HeaderErrorPage}>
            <Navigation />
            {menu === true ? (
              <div className="menu-button" onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill={`${common.FONT_COLOR}`}
                >
                  <path d="M113.3-230.2v-75.91h733.56v75.91H113.3Zm0-211.92v-75.76h733.56v75.76H113.3Zm0-211.77v-75.91h733.56v75.91H113.3Z" />
                </svg>
              </div>
            ) : (
              <div className="menu-button" onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill={`${common.FONT_COLOR}`}
                >
                  <path d="m251.33-198.29-53.04-53.04L426.96-480 198.29-708.67l53.04-53.04L480-533.04l228.67-228.67 53.04 53.04L533.04-480l228.67 228.67-53.04 53.04L480-426.96 251.33-198.29Z" />
                </svg>
              </div>
            )}
          </ErrorBoundary>
        </div>
      </HEADER_STYLE>
      <Outlet />
    </>
  );
}

const HEADER_STYLE = styled.header`
  display: ${(props) => (props.$toggle === "block" ? "flex" : "none")};
  justify-content: center;
  z-index: 99;
  position: relative;
  top: 0;
  max-height: 64px;

  .header {
    animation-name: smooth;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    z-index: 98;
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: calc(fit-content + 5px);
    margin: 0.8em;
    width: calc(100% - 3em);
    padding: 0.5em 0;
    align-items: center;
    text-align: center;
    background-color: ${common.MAIN_COLOR};
    box-shadow: 0 10px 10px #b9b9b9;
    border-radius: 100px;
    font-weight: ${common.BOLD_FONT_WIGHT};
    top: 0;
  }

  .nav-component {
    margin-right: 1em;
    height: fit-content;
  }

  .menu-button {
    display: none;
  }

  .logo-img-2 {
    display: none;
  }

  @keyframes smooth {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1200px) {
    .menu-button {
      display: block;
      padding-right: 3em;
      display: flex;
      align-items: center;
    }
    .nav-component {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .menu-button {
      padding-right: 1em;
    }

    .logo-img-1 {
      display: none;
    }

    .logo-img-2 {
      display: block;
    }
  }
`;
