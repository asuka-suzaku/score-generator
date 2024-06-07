import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function Choice() {
  return (
    <>
      <CHOICE_STYLE>
        <p className="choice-msg">どちらかを選んでください</p>
        <CHOICE_CONTENT>
          <CHOICE_WRAP>
            <CHOICE_BUTTON>画像として出力</CHOICE_BUTTON>
            <GOOD_POINT>
              <ul>
                <li>
                  <p>デザインの簡単設定</p>
                </li>
                <li>
                  <p>画像としての出力</p>
                </li>
              </ul>
            </GOOD_POINT>
          </CHOICE_WRAP>
          <CHOICE_WRAP>
            <CHOICE_BUTTON>あなたのサイトに埋め込み</CHOICE_BUTTON>
            <GOOD_POINT>
              <ul>
                <li>
                  <p>高度なデザインの設定</p>
                </li>
                <li>
                  <p>大量のスコアを表示</p>
                </li>
              </ul>
            </GOOD_POINT>
          </CHOICE_WRAP>
        </CHOICE_CONTENT>
      </CHOICE_STYLE>
    </>
  );
}

const CHOICE_STYLE = styled.div`
  .choice-msg {
    display: flex;
    justify-content: center;
  }
`;

const CHOICE_CONTENT = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7em;
`;

const CHOICE_WRAP = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CHOICE_BUTTON = styled.a`
  width: calc(100% / 2);
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  border-radius: 13em;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

const GOOD_POINT = styled.div`
  width: 50%;
  background-color: ${common.SUB_COLOR};
  border-radius: 15px;
  padding: 2em;
`;
