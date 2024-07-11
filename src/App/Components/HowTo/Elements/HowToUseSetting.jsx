import { HOW_TO_TITLE, USE_HOW_TO_STYLE } from "./HowToUseSheet";

export default function HowToUseSetting() {
  return (
    <>
      <USE_HOW_TO_STYLE>
        <HOW_TO_TITLE>
          <h2>設定パネルの利用方法</h2>
          <p>HOW TO USE SETTING PANEL</p>
        </HOW_TO_TITLE>
        <div className="setting-kinds">
          <p>ファイル設定</p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">ファイル</p>
          <p className="step-sentence">
            端末内のファイルかgoogleスプレッドシートのURLのどちらかを選択できます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">ファイルの選択</p>
          <p className="step-sentence">
            端末内から使用するcsvファイルを選択してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">URL</p>
          <p className="step-sentence">使用するURLを入力してください。</p>
          <p className="add-message">
            シートの設定はリンクを知っている人全員に設定してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">タイトル</p>
          <p className="step-sentence">好きなタイトルに変更できます。</p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">キルポイント</p>
          <p className="step-sentence">
            試合で使用するキルポイントを設定できます。
            <br />
            使わない場合は0と入力してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">順位ポイント</p>
          <p className="step-sentence">
            順位によって一定の点数ずつ上がる場合は規則的な順位ポイントを選択してください。
            <br />
            一定ではない場合は不規則的な順位ポイントを選択してください。
          </p>
          <p className="add-message">
            例：1位14点、2位12点、3位10点...最下位0点などの場合は規則的な順位ポイント
            <br />
            1位14点、2位10点、3位0点などの場合は不規則的な順位ポイントを選択してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">規則的な順位ポイント</p>
          <p className="step-sentence">一括に指定することができます。</p>
          <p className="add-message">
            点数は最下位が0点になるように計算されます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">不規則的な順位ポイント</p>
          <p className="step-sentence">
            自由にカスタマイズされた順位ポイントを使用できます。
            <br />
            次の”何位まで指定しますか”を読んでご利用ください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">何位まで指定しますか</p>
          <p className="step-sentence">
            指定したい順位の数字を入力してください。入力欄が出てきます。そこに入力してください。
            <br />
            0または指定なしの場合には0点として計算されます。
          </p>
          <p className="add-message">
            例：50位までの試合で25位以降は0点とする場合には”25”と入力してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">出力する画像の横幅、出力する画像の横幅</p>
          <p className="step-sentence">
            出力する画像のサイズをピクセルで指定できます。
          </p>
        </div>
        <div className="setting-kinds">
          <p>テキスト設定</p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">フォント</p>
          <p className="step-sentence">
            フォントを探すを押すとgoogleフォントから使えるフォント一覧が出ます。
            <br />
            お好きなフォントをお選びください。
          </p>
          <p className="add-message">
            著作権などはご自身でもご確認の上ご使用ください。
            <br />
            利用規約にも明記している通り当サイトでは責任は責任を負いかねます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストカラー</p>
          <p className="step-sentence">
            点数やチーム名などの全体のテキストの色を変更できます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストサイズ</p>
          <p className="step-sentence">
            点数やチーム名などの全体のテキストのサイズが変更できます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストの言語</p>
          <p className="step-sentence">
            自動的に出るテキストの言語を変更できます。
            <br />
            現在の対応言語は日本語、英語です。
          </p>
        </div>
        <div className="setting-kinds">
          <p>その他設定</p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">区切り線のサイズ</p>
          <p className="step-sentence">
            一番最後の行を除く各行の下に線を表示できます。
            <br />
            使用しない場合は0を入力してください。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">区切り線の色</p>
          <p className="step-sentence">
            区切り線を使用している時の線の色変更できます。
            <br />
            テキストの色とは違う色を使用できます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">背景画像</p>
          <p className="step-sentence">お好きな背景画像を使用できます。</p>
          <p className="add-message">
            背景画像を使用すると背景の色が見えなくなる場合もございます。
            <br />
            使用する画像の著作権などの権利には十分にご注意ください。当サイトでは責任は責任を負いかねます。
          </p>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}
