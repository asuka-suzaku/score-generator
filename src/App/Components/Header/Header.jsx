import styled from "styled-components";
import Logo from "./Elements/Logo";
import Navigation from "./Elements/Navigation";
import * as common from "../../Style/Common/Common";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HEADER_STYLE>
        <div className="header">
          <Logo />
          <Navigation />
        </div>
      </HEADER_STYLE>
      <Outlet />
    </>
  );
}

const HEADER_STYLE = styled.header`
  display: flex;
  justify-content: center;

  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: auto;
    margin: 0.8em;
    width: calc(100% - 3em);
    padding: 0.5em 0;
    align-items: center;
    text-align: center;
    background-color: ${common.MAIN_COLOR};
    box-shadow: 0 10px 10px #b9b9b9;
    border-radius: 100px;
    z-index: 3;
    font-weight: ${common.BOLD_FONT_WIGHT};
  }
`;
