import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  StylesAtom,
  defaultValues,
  SheetDataAtom,
} from "../../../Store/StylesAtom";
import * as common from "../../../Style/Common/Common";
import { CreateInput } from "../Function/Create/CreateInput";
import { Validation, GetSheet } from "../Function/GetSheet";

export default function Setting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const [sheetData, setSheetData] = useRecoilState(SheetDataAtom);

  //recoil

  const [styles, setStyles] = useRecoilState(StylesAtom);

  const HandleAtom = (data) => setStyles(data);

  // console.log(styles.fileConfig.howLong)
  return (
    <>
      <FORM_STYLE onChange={handleSubmit(HandleAtom)}>
        <div className="form-content">
          <div className="form-flex">
            <div className="input-kinds">
              <TITLE_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>ファイル設定</p>
              </TITLE_STYLE>
              <INPUT_STYLE>
                <label className="label" htmlFor="choiceFile">
                  ファイル
                </label>
                <select
                  name="choiceFile"
                  id="choiceFile"
                  {...register("fileConfig.choiceFile")}
                >
                  <option value="useUrl">URL</option>
                  <option value="useFile">アップロード</option>
                </select>
              </INPUT_STYLE>

              {styles.fileConfig.choiceFile === "useFile" ? (
                <INPUT_STYLE>
                  <label className="label" htmlFor="file">
                    ファイルの選択
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept=".csv"
                    {...register("fileConfig.file")}
                  />
                </INPUT_STYLE>
              ) : (
                <div>
                  <INPUT_STYLE>
                    <label className="label" htmlFor="url">
                      googleスプレッドシート
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      onBlur={Validation}
                    />
                    <button
                      id="urlSubmit"
                      type="button"
                      onClick={() => GetSheet(setSheetData)}
                    >
                      確定
                    </button>

                    <div className="errorMsg" id="errorUrl"></div>
                  </INPUT_STYLE>
                </div>
              )}
              <INPUT_STYLE>
                <label className="label" htmlFor="matchTitle">
                  タイトル
                </label>
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
                <label className="label" htmlFor="killPoint">
                  キルポイント
                </label>
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
              </INPUT_STYLE>
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
                  <CreateInput />
                </div>
              </div>
              <INPUT_STYLE>
                <label className="label" htmlFor="contentWidth">
                  出力する画像の横幅
                </label>
                <input
                  type="number"
                  name="contentWidth"
                  id="contentWidth"
                  {...register("fileConfig.contentWidth", {
                    validate: (data) => {
                      if (data < 2) {
                        return "1以上にしてください";
                      }
                    },
                  })}
                />
                <div className="errorMsg">
                  {errors.fileConfig?.contentWidth?.message}
                </div>
              </INPUT_STYLE>
              <INPUT_STYLE>
                <label className="label" htmlFor="contentHight">
                  出力する画像の縦幅
                </label>
                <input
                  type="number"
                  name="contentHight"
                  id="contentHight"
                  {...register("fileConfig.contentHight", {
                    validate: (data) => {
                      if (data < 2) {
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

            <div className="input-kinds">
              <TITLE_STYLE>
                <img src="/img/icon_ex.png" alt="" />
                <p>テキスト設定</p>
              </TITLE_STYLE>
              <INPUT_STYLE>
                <label className="label" htmlFor="fontFamily">
                  フォント
                </label>
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
                <label className="label" htmlFor="fontColor">
                  テキストカラー
                </label>
                <input
                  type="color"
                  name="fontColor"
                  id="fontColor"
                  {...register("fonts.fontColor")}
                />
              </INPUT_STYLE>
              <INPUT_STYLE>
                <label className="label" htmlFor="fontSize">
                  テキストサイズ
                </label>
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
                <div className="errorMsg">
                  {errors.fonts?.fontSize?.message}
                </div>
              </INPUT_STYLE>
              <INPUT_STYLE>
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
              </INPUT_STYLE>
            </div>
          </div>

          <div className="input-kinds">
            <TITLE_STYLE>
              <img src="/img/icon_ex.png" alt="" />
              <p>その他設定</p>
            </TITLE_STYLE>
            <INPUT_STYLE>
              <label className="label" htmlFor="borderSize">
                区切り線のサイズ
              </label>
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
              <label className="label" htmlFor="borderColor">
                区切り線の色
              </label>
              <input
                type="color"
                name="borderColor"
                id="borderColor"
                {...register("decoration.borderColor")}
              />
            </INPUT_STYLE>
            <INPUT_STYLE>
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
            </INPUT_STYLE>
          </div>
        </div>
      </FORM_STYLE>
    </>
  );
}

const TITLE_STYLE = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  img {
    width: 1em;
    height: 1em;
  }
`;

export const INPUT_STYLE = styled.div`
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

  @media screen and (max-width: 500px) {
    margin: 1.5em 0;
  }
`;

const FORM_STYLE = styled.form`
  display: flex;
  justify-content: space-around;

  .form-content {
    display: flex;
  }

  .form-flex {
    display: flex;
  }

  .input-kinds {
    margin: 0 2em;
  }

  @media screen and (max-width: 1200px) {
    .form-content {
      display: block;
    }

    .input-kinds {
      margin: 1em 2em;
    }
  }

  @media screen and (max-width: 800px) {
    .form-flex {
      display: block;
    }

    .input-kinds {
      margin: 3em 0;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 0 2em;
  }
`;

{
  /* <CreateInput /> */
}
