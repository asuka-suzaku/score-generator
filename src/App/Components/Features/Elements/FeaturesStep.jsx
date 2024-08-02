import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function FeaturesStep() {
  return (
    <>
      <FEATURES_SUMMARY_STYLE>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/free.png" alt="" />
          <h4>POINT 1</h4>
          <p>誰でも無料</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/create2.png" alt="" />
          <h4>POINT 2</h4>
          <p>簡単画像作成</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/rule.png" alt="" />
          <h4>POINT 3</h4>
          <p>さまざまなルールに対応</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
        <FEATURES_SUMMARY_STYLE_CONTENT>
          <img src="/img/feature/member.png" alt="" />
          <h4>POINT 4</h4>
          <p>大人数の大会にも対応</p>
        </FEATURES_SUMMARY_STYLE_CONTENT>
      </FEATURES_SUMMARY_STYLE>
    </>
  );
}

const FEATURES_SUMMARY_STYLE = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3em;
  margin-bottom: 4em;
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
    font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 3em 0;
  }

  @media screen and (max-width: 800px) {
    margin: 3em 0;
  }
  @media screen and (max-width: 500px) {
    h4 {
      font-weight: 700;
    }
  }
`;
