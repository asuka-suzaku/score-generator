import styled from "styled-components";
import {
  HOW_TO_TITLE,
  SETTING_SECTION_TITLE,
  USE_HOW_TO_STYLE,
} from "./HowToUseSheet";

export default function ExplanationOfName() {
  return (
    <>
      <STYLE>
        <HOW_TO_TITLE>
          <h4>名称の説明</h4>
          <p>EXPLANATION OF NAME</p>
        </HOW_TO_TITLE>

        <img className="explanation-img" src="/img/sample/screan.png" alt="" />
        <SETTING_SECTION_TITLE>
          <p>呼び方</p>
        </SETTING_SECTION_TITLE>
        <div>
          <p>①：プレビューパネルと呼びます。</p>
          <p>②：設定パネルと呼びます。</p>
        </div>
      </STYLE>
    </>
  );
}

const STYLE = styled.div`
  img {
    margin-bottom: 4em;
  }
  .explanation-img {
    width: 100%;
  }
`;
