import styled from "styled-components";
import { BUTTON } from "../../../Style/Common/Button";
import * as common from "../../../Style/Common/Common";

export default function Download() {
  return (
    <>
      <DOWNLOAD_STYLE>
        <DOWNLOAD_MSG>指定ファイルをダウンロードしてください</DOWNLOAD_MSG>
        <BUTTON>ダウンロード</BUTTON>
      </DOWNLOAD_STYLE>
    </>
  );
}

const DOWNLOAD_MSG = styled.p`
  color: ${common.HIGHT_LIGHT_COLOR};
  @media screen and (max-width: 500px) {
    margin: 0 1em;
  }
`;

const DOWNLOAD_STYLE = styled.div`
  margin-top: 5.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
