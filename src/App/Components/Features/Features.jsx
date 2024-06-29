import styled from "styled-components";
import { SECTION_TITLE_STYLE } from "../../Style/Common/SectionTitle";
import Download from "./Elements/Download";
import * as common from "../../Style/Common/Common";
import FeaturesStep from "./Elements/FeaturesStep";

export default function Features() {
  return (
    <>
      <SECTION_TITLE_STYLE id="appFeatures">
        <h2>特徴</h2>
        <p>FEATURES</p>
      </SECTION_TITLE_STYLE>
      <FEATURES_STYLE>
        <div className="ad-message">
          <p>簡単4ステップ</p>
        </div>
        <FeaturesStep />
        <Download />
      </FEATURES_STYLE>
    </>
  );
}

const FEATURES_STYLE = styled.div`
  background-color: ${common.SUB_COLOR};
  padding-top: 5.5em;
  padding-bottom: 3.5em;
  border-radius: 15px;
  .ad-message {
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
    font-weight: ${common.BOLD_FONT_WIGHT};
    font-size: ${common.SECTION_TITLE_FONT_SIZE};
  }

  //ipad
  @media screen and (max-width: 1200px) {
    margin: 0 10%;
  }

  @media screen and (max-width: 800px) {
    margin: 0 5%;
  }
`;
