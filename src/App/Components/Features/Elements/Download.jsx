import styled from "styled-components";
import { BUTTON } from "../../../Style/Common/Button";
import * as common from "../../../Style/Common/Common";

export default function Download() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/download/ご使用前にご一読ください.txt";
    link.download = "ご使用前にご一読ください";
    link.click();
  };
  return (
    <>
      <DOWNLOAD_STYLE>
        <DOWNLOAD_MSG>今すぐ使い始めたい方はこちら。</DOWNLOAD_MSG>
        <DOWNLOAD_BUTTON
          download="SCORE-GENERATOR-FILE"
          href="/download/SCORE-GENERATOR.xlsx"
          onClick={handleClick}
        >
          ダウンロード
        </DOWNLOAD_BUTTON>
      </DOWNLOAD_STYLE>
    </>
  );
}

const DOWNLOAD_BUTTON = styled.a`
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

const DOWNLOAD_MSG = styled.p`
  color: ${common.FONT_COLOR};
  font-weight: ${common.BOLD_FONT_WIGHT};
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 0 1em;
    font-weight: 700;
  }
`;

const DOWNLOAD_STYLE = styled.div`
  margin-top: 5.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  a:hover {
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
