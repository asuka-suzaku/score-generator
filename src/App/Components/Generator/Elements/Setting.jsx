import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export const defaultValues = {
  fileConfig: {
    file: "",
    choiceFile: "useUrl",
    matchTitle: "タイトル",
    killPoint: 0,
    rankPoint: "useRegularRankPoint",
    contentWidth: 1920,
    contentHight: 1080,
  },
  fonts: {
    fontFamily: "'Noto Sans JP', sans-serif",
    fontColor: "#000",
    fontSize: 18,
    useLanguage: "useJa",
  },
  decoration: {
    borderSize: 0,
    borderColor: "#000",
    bgImg: [],
  },
};

export default function Setting({ GiveData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const testConsole = (data) => console.log(data);
  const HandleData = (data) => GiveData(data);

  return (
    <>
      <FORM_STYLE onChange={handleSubmit(HandleData)}>
        <div>
          <div>
            <img src="/img/icon_ex.png" alt="" />
            <p>ファイル設定</p>
          </div>
          <INPUT_STYLE>
            <label htmlFor="choiceFile">ファイル</label>
            <select
              name="choiceFile"
              id="choiceFile"
              {...register("fileConfig.choiceFile")}
            >
              <option value="useUrl">URL</option>
              <option value="useFile">アップロード</option>
            </select>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="matchTitle">タイトル</label>
            <input
              type="text"
              id="matchTitle"
              name="matchTitle"
              {...register("fileConfig.matchTitle", {
                required: "必ず入力してください。",
              })}
            />
            <div className="errorMsg">
              {errors.fileConfig?.matchTitle?.message}
            </div>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="killPoint">キルポイント</label>
            <input
              type="number"
              id="killPoint"
              name="killPoint"
              {...register("fileConfig.killPoint", {
                validate: (data) => {
                  if (data < 0) {
                    return "0以上に設定してください";
                  }
                },
              })}
            />
            <div className="errorMsg">
              {errors.fileConfig?.killPoint?.message}
            </div>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="rankPoint">順位ポイント</label>
            <select
              name="rankPoint"
              id="rankPoint"
              {...register("fileConfig.rankPoint")}
            >
              <option value="useRegularRankPoint">規則的な順位ポイント</option>
              <option value="useIrregularRankPoint">
                不規則的な順位ポイント
              </option>
            </select>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="contentWidth">出力する画像の横幅</label>
            <input
              type="number"
              name="contentWidth"
              id="contentWidth"
              {...register("fileConfig.contentWidth", {
                validate: (data) => {
                  if (data < 1) {
                    return "1以上にしてください";
                  }
                },
              })}
            />
            <div className="errorMsg">{errors.fileConfig?.contentWidthZ}</div>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="contentHight">出力する画像の縦幅</label>
            <input
              type="number"
              name="contentHight"
              id="contentHight"
              {...register("fileConfig.contentHight", {
                validate: (data) => {
                  if (data < 1) {
                    return "1以上にしてください";
                  }
                },
              })}
            />
            <div className="errorMsg">
              {errors.fileConfig?.contentHight?.message}
            </div>
          </INPUT_STYLE>
        </div>

        <div>
          <div>
            <img src="/img/icon_ex.png" alt="" />
            <p>テキスト設定</p>
          </div>
          <INPUT_STYLE>
            <label htmlFor="fontFamily">フォント</label>
            <select
              name="fontFamily"
              id="fontFamily"
              {...register("fonts.fontFamily")}
            >
              <option value="noto">noto</option>
              <option value="hiragino">hiragino</option>
              <option value="M PLUS">M PLUS</option>
            </select>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="fontColor">テキストカラー</label>
            <input
              type="color"
              name="fontColor"
              id="fontColor"
              {...register("fonts.fontColor")}
            />
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="fontSize">テキストサイズ</label>
            <input
              type="number"
              name="fontSize"
              id="fontSize"
              {...register("fonts.fontSize", {
                validate: (data) => {
                  if (data < 1) {
                    return "1以上にしてください";
                  }
                },
              })}
            />
            <div className="errorMsg">{errors.fonts?.fontSize?.message}</div>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="useLanguage">テキストの言語</label>
            <select
              name="useLanguage"
              id="useLanguage"
              {...register("fonts.useLanguage")}
            >
              <option value="useJa">日本語</option>
              <option value="useEn">英語</option>
            </select>
          </INPUT_STYLE>
        </div>

        <div>
          <div>
            <img src="/img/icon_ex.png" alt="" />
            <p>その他設定</p>
          </div>
          <INPUT_STYLE>
            <label htmlFor="borderSize">区切り線のサイズ</label>
            <input
              type="number"
              id="borderSize"
              name="borderSize"
              {...register("decoration.borderSize", {
                validate: (data) => {
                  if (data < 0) {
                    return "0以上にしてください";
                  }
                },
              })}
            />
            <div className="errorMsg">
              {errors.decoration?.borderSize?.message}
            </div>
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="borderColor">区切り線の色</label>
            <input
              type="color"
              name="borderColor"
              id="borderColor"
              {...register("decoration.borderColor")}
            />
          </INPUT_STYLE>
          <INPUT_STYLE>
            <label htmlFor="bgImg">背景画像</label>
            <input
              type="file"
              name="bgImg"
              id="bgImg"
              accept=".jpeg,.png,image/jpeg,image/png"
              {...register("decoration.bgImg")}
            />
          </INPUT_STYLE>
        </div>
      </FORM_STYLE>
    </>
  );
}

const INPUT_STYLE = styled.div`
  margin: 1em 0;
  input {
    margin-left: 0.5em;
    height: 1.5em;
  }

  select {
    height: 2em;
  }

  .errorMsg {
    color: ${common.HIGHT_LIGHT_COLOR};
  }
`;

const FORM_STYLE = styled.form`
  display: flex;
  justify-content: space-around;
`;
