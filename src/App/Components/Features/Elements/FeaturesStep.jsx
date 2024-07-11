import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function FeaturesStep() {
  return (
    <>
      <FEATURES_SUMMARY_STYLE>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/download.png" alt="" />
          <h4>step1</h4>
          <p>
            指定ファイルを
            <br />
            ダウンロード
          </p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/write.png" alt="" />
          <h4>step2</h4>
          <p>
            指定ファイルに
            <br />
            ポイントを入力
          </p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/upload.png" alt="" />
          <h4>step3</h4>
          <p>ファイルをアップロード</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/edit.png" alt="" />
          <h4>step4</h4>
          <p>デザインの設定</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
      </FEATURES_SUMMARY_STYLE>
    </>
  );
}

const FEATURES_SUMMARY_STYLE = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3em;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 0.5em;
  }
`;

const FEATURES_SUMMARY_STYLE_CONTENT = styled.div`
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

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 3em 0;
  }

  @media screen and (max-width: 800px) {
    margin: 3em 0;
  }
`;
