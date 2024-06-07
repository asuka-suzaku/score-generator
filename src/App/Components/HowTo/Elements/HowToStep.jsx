import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function HowToStep() {
  return (
    <>
      <HOW_TO_SUMMARY_STYLE>
        <HOW_TO_SUMMARY_STYLE_CONTENT>
          <img src="/img/step_ex.png" alt="" />
          <h4>step1</h4>
          <p>
            指定ファイルを
            <br />
            ダウンロード
          </p>
        </HOW_TO_SUMMARY_STYLE_CONTENT>
        <HOW_TO_SUMMARY_STYLE_CONTENT>
          <img src="/img/step_ex.png" alt="" />
          <h4>step2</h4>
          <p>
            指定ファイルに
            <br />
            ポイントを入力
          </p>
        </HOW_TO_SUMMARY_STYLE_CONTENT>
        <HOW_TO_SUMMARY_STYLE_CONTENT>
          <img src="/img/step_ex.png" alt="" />
          <h4>step3</h4>
          <p>ファイルをアップロード</p>
        </HOW_TO_SUMMARY_STYLE_CONTENT>
        <HOW_TO_SUMMARY_STYLE_CONTENT>
          <img src="/img/step_ex.png" alt="" />
          <h4>step4</h4>
          <p>デザインの設定</p>
        </HOW_TO_SUMMARY_STYLE_CONTENT>
      </HOW_TO_SUMMARY_STYLE>
    </>
  );
}

const HOW_TO_SUMMARY_STYLE = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3em;
`;

const HOW_TO_SUMMARY_STYLE_CONTENT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 4);
  margin: 0 1.5em;
  font-size: 16px;
  text-align: center;

  img {
    width: 9em;
  }

  h4 {
    margin: 18px 0;
    font-weight: ${common.BOLD_FONT_WIGHT};
  }
`;
