import { Link } from "react-router-dom";
import { BUTTON } from "../../../Style/Common/Button";
import { styled } from "styled-components";
import * as common from "../../../Style/Common/Common";
import { Outlet } from "react-router-dom";

export default function GoToGenerator() {
  return (
    <>
      <GENERATE_CONTENT>
        <p>画像を作成に行く</p>
        <GOTO_LINK className="goToGenerator" to="/generator">
          GENERATOR
        </GOTO_LINK>
      </GENERATE_CONTENT>
    </>
  );
}

const GENERATE_CONTENT = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .goToGenerator:hover {
    cursor: pointer;
    animation-name: d_button;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes d_button {
    0% {
      background-color: ${common.SUB_COLOR};
    }

    100% {
      background-color: #acbebe;
    }
  }
`;

const GOTO_LINK = styled(Link)`
  color: ${common.FONT_COLOR};
  font-size: ${common.MAIN_FONT_SIZE}px;
  font-weight: ${common.BOLD_FONT_WIGHT};
  padding: 1em 5.5em;
  border-radius: 13em;
  margin: 2em 0;
  margin-top: 1em;
  text-decoration: none;

  border: 5px solid #acbebe;
  @media screen and (max-width: 600px) {
    font-weight: 700;
    padding: 1em 3em;
  }
`;
