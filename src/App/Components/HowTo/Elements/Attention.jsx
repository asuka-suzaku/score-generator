import {
  HOW_TO_TITLE,
  USE_HOW_TO_STYLE,
  SETTING_SECTION_TITLE,
} from "./HowToUseSheet";

export default function Attention() {
  return (
    <>
      <USE_HOW_TO_STYLE className="attention">
        <HOW_TO_TITLE>
          <h2>注意点</h2>
          <p>ATTENTION</p>
        </HOW_TO_TITLE>
        <SETTING_SECTION_TITLE className="setting-kinds">
          <p>ファイル設定</p>
        </SETTING_SECTION_TITLE>
        <div className="how-to-step-content">
          <p className="step-title">ファイル</p>
          <p className="step-sentence">
            試合数が多い場合または、チーム数が多い大会の場合、一部プレビューできない部分が発生します。
            <br />
            ですが、完成品には全く影響はございません。
          </p>
          <p className="add-message">ファイルは110行目まで読み込み可能です。</p>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}
