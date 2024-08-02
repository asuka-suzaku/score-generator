import Demo from "./Demo";
import { defaultValues } from "../../../Store/StylesAtom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  HOW_TO_TITLE,
  SETTING_SECTION_TITLE,
  USE_HOW_TO_STYLE,
} from "./HowToUseSheet";
import { DemoCreateInput } from "./DemoCreateInput";
import { DemoAtom } from "../../../Store/StylesAtom";
import { INPUT_STYLE } from "../../Generator/Elements/Setting";

export default function HowToUseSetting() {
  const [demoStyle, setDemoStyle] = useRecoilState(DemoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const HandleDemoStyle = (data) => {
    setDemoStyle(data);
  };
  return (
    <>
      <USE_HOW_TO_STYLE>
        <HOW_TO_TITLE>
          <h2>設定パネルの利用方法</h2>
          <p>HOW TO USE SETTING PANEL</p>
        </HOW_TO_TITLE>
        <SETTING_SECTION_TITLE className="setting-kinds">
          <p>ファイル設定</p>
        </SETTING_SECTION_TITLE>
        <div className="how-to-step-content">
          <p className="step-title">ファイルタイプ</p>
          <p className="step-sentence">
            端末内のファイルかGoogleスプレッドシートのURLのどちらかを選択できます。
          </p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">ファイルの選択</p>
          <p className="step-sentence">
            端末内から使用するcsvファイルを選択してください。
          </p>
          <p className="add-message">csvファイルは「ファイル名.csv」です。</p>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">URL</p>
          <p className="step-sentence">
            使用するGoogleスプレッドシートの共有URLを入力してください。
          </p>
          <p className="add-message">
            シートの設定はリンクを知っている人全員に設定してください。
          </p>
          <a
            className="add-link"
            href="https://support.google.com/a/users/answer/13309904?hl=ja"
          >
            設定の仕方がわからない方はこちら
          </a>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">タイトル</p>
          <p className="step-sentence">
            大会名など好きな文字をタイトルに表示できます。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoTitle">タイトル</label>
                <input
                  id="demoTitle"
                  type="text"
                  name="demoTItle"
                  {...register("fileConfig.matchTitle")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">キルポイント</p>
          <p className="step-sentence">
            試合で使用するキルポイントを設定できます。
            <br />
            キルポイントを使用しない場合は"0"を入力してください。
            <br />
            "0"を入力するとスコア表のキルポイントの欄は見えなくなります。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoKillPoint">キルポイント</label>
                <input
                  id="demoKillPoint"
                  type="number"
                  name="demoKillPoint"
                  {...register("fileConfig.killPoint")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
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

          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label className="label" htmlFor="rankPoint">
                  順位ポイント
                </label>
                <select
                  name="rankPoint"
                  id="rankPoint"
                  {...register("fileConfig.rankPoint")}
                >
                  <option value="useRegularRankPoint">
                    規則的な順位ポイント
                  </option>
                  <option value="useIrregularRankPoint">
                    不規則的な順位ポイント
                  </option>
                </select>

                {demoStyle.fileConfig.rankPoint === "useRegularRankPoint" ? (
                  <INPUT_STYLE>
                    <label className="label" htmlFor="killPoint">
                      規則的な順位ポイント
                    </label>
                    <input
                      type="number"
                      id="regularRankPoint"
                      name="regularRankPoint"
                      {...register("fileConfig.regularRankPoint", {
                        validate: (data) => {
                          if (data < 0) {
                            return "0以上に設定してください";
                          }
                        },
                      })}
                    />
                    <div className="errorMsg">
                      {errors.fileConfig?.regularRankPoint?.message}
                    </div>
                  </INPUT_STYLE>
                ) : (
                  <div>
                    <INPUT_STYLE>
                      <label className="label" htmlFor="howLong">
                        何位まで指定しますか
                      </label>
                      <input
                        type="number"
                        name="howLong"
                        id="howLong"
                        {...register("fileConfig.howLong", {
                          validate: (data) => {
                            if (data < 0) {
                              return "1以上にしてください";
                            }
                          },
                        })}
                      />
                      <div className="errorMsg">
                        {errors.fileConfig?.howLong?.message}
                      </div>
                    </INPUT_STYLE>

                    <div id="inputIrregular">
                      <DemoCreateInput />
                    </div>
                  </div>
                )}
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">出力する画像の横幅、出力する画像の横幅</p>
          <p className="step-sentence">出力する画像のサイズを指定できます。</p>
          <p className="add-message">単位はpxになっています。</p>
        </div>
        <SETTING_SECTION_TITLE className="setting-kinds">
          <p>テキスト設定</p>
        </SETTING_SECTION_TITLE>
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
          <a
            className="add-link"
            href="https://developers.google.com/fonts/faq?hl=ja"
          >
            Google fonts 質問ページ
          </a>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストカラー</p>
          <p className="step-sentence">
            点数やチーム名などの全体のテキストの色を変更できます。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoFontColor">テキストカラー</label>
                <input
                  id="demoFontColor"
                  type="color"
                  name="demoFontColor"
                  {...register("fonts.fontColor")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストサイズ</p>
          <p className="step-sentence">
            点数やチーム名などの全体のテキストのサイズが変更できます。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoFontSize">テキストカラー</label>
                <input
                  id="demoFontSize"
                  type="number"
                  name="demoFontSize"
                  {...register("fonts.fontSize")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">テキストの言語</p>
          <p className="step-sentence">
            順位や⚪︎試合目などの自動的に出るテキストの言語を変更できます。
            <br />
            現在の対応言語は日本語、英語です。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label className="label" htmlFor="useLanguage">
                  テキストの言語
                </label>
                <select
                  name="useLanguage"
                  id="useLanguage"
                  {...register("fonts.useLanguage")}
                >
                  <option value="useJa">日本語</option>
                  <option value="useEn">英語</option>
                </select>
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <SETTING_SECTION_TITLE className="setting-kinds">
          <p>その他設定</p>
        </SETTING_SECTION_TITLE>
        <div className="how-to-step-content">
          <p className="step-title">区切り線の太さ</p>
          <p className="step-sentence">
            一番最後の行を除く各行の下に線を表示できます。
            <br />
            使用しない場合は0を入力してください。
            <br />
            "0"を入力することで表示されなくなります。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoBorderSize">区切り線のサイズ</label>
                <input
                  id="demoBorderSize"
                  type="number"
                  name="demoBorderSize"
                  {...register("decoration.borderSize")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">区切り線の色</p>
          <p className="step-sentence">
            区切り線を使用している時の線の色変更できます。
            <br />
            テキストの色とは違う色を使用できます。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label htmlFor="demoBorderColor">区切り線のサイズ</label>
                <input
                  id="demoBorderColor"
                  type="color"
                  name="demoBorderColor"
                  {...register("decoration.borderColor")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-step-content">
          <p className="step-title">背景画像</p>
          <p className="step-sentence">
            お好きな背景画像を使用できます。
            <br />
            画像の横幅は出力予定のサイズの100％に調整されます。
            <br />
            また縦幅は比率はそのままで中心に配置されます。
          </p>
          <p className="add-message">
            背景画像を使用すると背景の色が見えなくなる場合もございます。
            <br />
            使用する画像の著作権などの権利には十分にご注意ください。当サイトでは責任は責任を負いかねます。
          </p>
          <div className="demo">
            <p className="demo-title">デモ</p>
            <div className="demo-content">
              <div
                className="demo-input"
                onChange={handleSubmit(HandleDemoStyle)}
              >
                <label className="label" htmlFor="bgImg">
                  背景画像
                </label>
                <input
                  type="file"
                  name="bgImg"
                  id="bgImg"
                  accept=".jpeg,.png,image/jpeg,image/png"
                  {...register("decoration.bgImg")}
                />
              </div>
              <div className="demo-preview">
                <Demo DemoStyle={demoStyle} />
              </div>
            </div>
          </div>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}
