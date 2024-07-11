import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function HowToUseSheet() {
  return (
    <>
      <USE_HOW_TO_STYLE>
        <HOW_TO_TITLE>
          <h2>スプレッドシートの利用方法</h2>
          <p>HOW TO USE SHEET</p>
        </HOW_TO_TITLE>
        <div className="setting-kinds">
          <p>ファイル設定</p>
        </div>
        <div className="sheet">
          <div className="how-to-step-content">
            <p className="step-title"></p>
            <p className="step-sentence"></p>
          </div>
          <div className="how-to-step-content steps">
            <p className="step-title">step 1</p>
            <p className="step-sentence">A列にチーム名を入力します。</p>
          </div>
          <div className="how-to-step-content steps">
            <p className="step-title">step 2</p>
            <p className="step-sentence">次の行にチームの順位を入力します。</p>
          </div>
          <div className="how-to-step-content steps">
            <p className="step-title">step 3</p>
            <p className="step-sentence">
              チームの順位を入力した次の行にチームのキル数を入力してください。
            </p>
          </div>
          <div className="how-to-step-content">
            <p className="step-title">step 4</p>
            <p className="step-sentence">
              試合数分2と3のステップを繰り返してください。
            </p>
            <p className="add-message">最大12試合分入力可能です。</p>
          </div>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}

export const HOW_TO_TITLE = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
  font-weight: ${common.BOLD_FONT_WIGHT};

  h2 {
    margin-bottom: 0.5em;
  }

  margin: 3em 0;
  @media screen and (max-width: 600px) {
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
    font-weight: 700;
  }
  @media screen and (max-width: 400px) {
    font-size: ${common.MAIN_FONT_SIZE}px;
  }
`;

export const USE_HOW_TO_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  .add-message {
    /* display: none; */
  }
  .sheet .how-to-step-content {
    margin-bottom: 3em;
  }

  .sheet .step-title {
    margin: 0;
  }

  .sheet .step-sentence {
    margin-top: 2em;
  }

  .how-to-step-content:not(.sheet .how-to-step-content) {
    margin: 2em 0;
  }

  .step-title {
    font-weight: 600;
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
  }

  .step-sentence {
    margin-top: 2em;
    position: relative;
    left: 1em;
  }

  .setting-kinds p {
    display: flex;
    width: fit-content;
    font-weight: 600;
    white-space: nowrap;
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
    /* margin: 3em 0; */
    background-color: ${common.SUB_COLOR};
    padding: 1em 3em;
    border-radius: 3em;
  }

  .add-message {
    color: ${common.HIGHT_LIGHT_COLOR};
    margin-top: 0.8em;
    position: relative;
    left: 1em;
  }
  @media screen and (max-width: 600px) {
    .step-title {
      font-size: ${common.MAIN_FONT_SIZE}px;
      font-weight: 700;
    }

    .setting-kinds p {
      font-weight: 700;
    }

    .step-sentence {
      font-size: ${common.MAIN_FONT_SIZE * 0.9}px;
    }
  }

  @media screen and (max-width: 500px) {
    .setting-kinds {
      display: flex;
      justify-content: center;
    }
    .step-sentence {
      left: 0;
    }

    .add-message {
      left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .setting-kinds p {
      display: flex;
      width: fit-content;
      font-weight: 600;
      white-space: nowrap;
      font-size: ${common.MAIN_FONT_SIZE}px;
      background-color: ${common.SUB_COLOR};
      padding: 1em 2em;
      border-radius: 3em;
    }
  }
`;
