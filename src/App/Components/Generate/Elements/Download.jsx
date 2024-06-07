import styled from "styled-components";
import { BUTTON } from "../../../Style/Common/Button";
import * as common from "../../../Style/Common/Common";

export default function Download() {
  return (
    <>
      <DOWNLOAD_STYLE>
        <DOWNLOAD_MSG>
          <p>パッケージをダウンロードしてください</p>
          <BUTTON>ダウンロード</BUTTON>
        </DOWNLOAD_MSG>
        <DOWNLOAD_CONTENTS>
          <p>パッケージ内容</p>
          <ul>
            <li>SCORE GENERATOR本体</li>
            <li>設定ファイル</li>
          </ul>
        </DOWNLOAD_CONTENTS>

        <DOWNLOAD_ANNOUNCEMENTS>
          <p>困った場合はgithubにアクセスしてください</p>
          <BUTTON>アクセス</BUTTON>
        </DOWNLOAD_ANNOUNCEMENTS>
      </DOWNLOAD_STYLE>
    </>
  );
}

const DOWNLOAD_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DOWNLOAD_MSG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DOWNLOAD_CONTENTS = styled.div`
  width: 100%;
  margin: 4em 0;
  padding: 4em 0;
  border-radius: 15px;
  background-color: ${common.SUB_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: ${common.BOLD_FONT_WIGHT};
    margin-bottom: 2em;
  }
`;

const DOWNLOAD_ANNOUNCEMENTS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;
