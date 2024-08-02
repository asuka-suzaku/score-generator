import styled from "styled-components";
import * as common from "../../../Style/Common/Common";
import SampleTable from "./SampleTable";
import {
  step1Data,
  step2Data,
  step3Data,
  step4Data,
  step5Data,
  step6Data,
  noUseKillPoint,
  step6DataNoKillPoint,
} from "./StepData";
export default function HowToUseSheet() {
  return (
    <>
      <USE_HOW_TO_STYLE>
        <HOW_TO_TITLE>
          <h2>スプレッドシートの利用方法</h2>
          <p>HOW TO USE SHEET</p>
        </HOW_TO_TITLE>
        <SETTING_SECTION_TITLE className="setting-kinds">
          <p>ファイル設定</p>
        </SETTING_SECTION_TITLE>
        <div className="sheet">
          <div className="how-to-step-content steps">
            <div className="sentence">
              <p className="step-title">STEP 1</p>
              <p className="step-sentence">
                チーム名と書いてある下に出場する各チーム名のチーム名を入力します。
              </p>
            </div>
            <div className="sample-table">
              <SampleTable data={step1Data} />
            </div>
          </div>
          <div className="how-to-step-content steps">
            <div className="sentence">
              <p className="step-title">STEP 2</p>
              <p className="step-sentence">
                1試合目の順位と書いてある下の欄に各チームの順位を入力します。
              </p>
            </div>
            <div className="sample-table">
              <SampleTable data={step2Data} />
            </div>
          </div>
          <div className="how-to-step-content steps">
            <div className="sentence">
              <p className="step-title">STEP 3</p>
              <p className="step-sentence">
                1試合目のキル数と書いてある下に各チームのキル数を入力します。
              </p>
              <p className="add-message">
                キル数を使用しない場合には入力をしなくても大丈夫です。
              </p>
            </div>
            <div className="sample-table">
              <SampleTable data={step3Data} />
            </div>
            <div className="sample-table double">
              <SampleTable data={noUseKillPoint} />
            </div>
          </div>
          <div className="how-to-step-content steps">
            <div className="sentence">
              <p className="step-title">STEP 4</p>
              <p className="step-sentence">
                試合数分、1行目に「⚪︎試合目の順位」と「⚪︎試合目のキル数」を入力してください。
                <br />
                (⚪︎には数字が入ります。)
              </p>
            </div>{" "}
            <div className="sample-table">
              <SampleTable data={step4Data} />
            </div>
          </div>

          <div className="how-to-step-content">
            <div className="sentence">
              <p className="step-title">STEP 5</p>
              <p className="step-sentence">
                ⚪︎試合目の各チームの順位を⚪︎試合目の順位の下に入力してください。
              </p>
            </div>
            <div className="sample-table">
              <SampleTable data={step5Data} />
            </div>
            <div className="sample-table double">
              <SampleTable data={step6DataNoKillPoint} />
            </div>
          </div>
          <div className="how-to-step-content">
            <div className="sentence">
              <p className="step-title">STEP 6</p>
              <p className="step-sentence">
                ⚪試合目の各チームのキル数を⚪︎試合目のキル数の下に入力してください。
              </p>
            </div>
            <div className="sample-table">
              <SampleTable data={step6Data} />
            </div>
          </div>
          <div className="how-to-step-content">
            <div className="sentence">
              <p className="step-title">STEP 7</p>
              <p className="step-sentence">
                ステップ4からステップ6の工程を試合数分行ってください。
              </p>
            </div>
          </div>
          <div className="how-to-step-content">
            <div className="sentence">
              <p className="step-title">STEP 8</p>
              <p className="step-sentence">
                Google spread
                sheetからダウンロードしてください。（カンマ区切り形式(.csv)を選んでください。）
              </p>
              <p className="add-message">
                ファイルタイプをulrにする場合にはダウンロードはしなくても大丈夫です。
              </p>
            </div>
          </div>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}

export const SETTING_SECTION_TITLE = styled.div`
  p {
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
  margin-top: 1em;
  margin-bottom: 3em;

  @media screen and (max-width: 600px) {
    p {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 400px) {
    p {
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
  width: 100%;

  .double {
    margin-top: 2em;
  }

  .demo {
    background-color: ${common.SUB_COLOR};
    border-radius: 15px;
    margin: 2em 0;
    padding: 2em;
    width: calc(100% -4em);
  }

  .demo-title {
    font-weight: ${common.BOLD_FONT_WIGHT};
    font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
  }

  .demo-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .demo-preview {
    overflow-x: scroll;
  }

  @media screen and (max-width: 800px) {
    .demo {
      width: calc(100% - 4em);
      margin: 1em 0;
      padding: 2em 2em;
    }

    .demo input {
      width: 100px;
    }

    .demo-preview {
      max-width: calc(100vw - 8em);
    }
  }

  @media screen and (max-width: 1000px) {
    .demo-title {
      margin-bottom: 2em;
    }
    .demo-content {
      display: block;
    }

    .demo-input {
      margin-bottom: 1em;
    }
  }

  .font-hi-light {
    color: ${common.HIGHT_LIGHT_COLOR};
  }

  .sheet .how-to-step-content {
    margin-bottom: 3em;
    width: 100%;
  }

  .sheet .step-title {
    margin: 0;
  }

  .add-link {
    color: ${common.FONT_COLOR};
    position: relative;
    left: 1em;
    top: 0.5em;
  }

  .how-to-step-content p {
    width: fit-content;
  }

  .sheet .step-sentence {
    margin-top: 2em;
  }
  .how-to-step-content:not(.sheet .how-to-step-content) {
    margin: 2em 0;
  }

  .step-title {
    font-weight: 600;
    font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
  }

  .step-sentence {
    margin-top: 2em;
    position: relative;
    left: 1em;
  }

  .sentence {
    margin-bottom: 1em;
  }
  .add-message {
    color: ${common.HIGHT_LIGHT_COLOR};
    margin-top: 0.8em;
    position: relative;
    left: 1em;
  }

  @media screen and (max-width: 600px) {
    margin: 0 0;
    width: 100%;
    .step-title {
      font-size: ${common.MAIN_FONT_SIZE}px;
      font-weight: 700;
    }

    .step-sentence {
      font-size: ${common.MAIN_FONT_SIZE * 0.9}px;
    }

    .demo-title {
      font-weight: 700;
    }

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
`;
