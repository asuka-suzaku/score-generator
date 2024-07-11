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
import { FontsJaAtom } from "../../../Store/StylesAtom";
import GetFontsJa from "../Function/GetFont";
import { useEffect } from "react";

export default function Setting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const [sheetData, setSheetData] = useRecoilState(SheetDataAtom);

  const [fonts, setFonts] = useRecoilState(FontsJaAtom);
  //recoil

  const [styles, setStyles] = useRecoilState(StylesAtom);

  const HandleAtom = (data) => setStyles(data);

  useEffect(() => {
    const element = document.getElementById("mainElement");
    if (element) {
      const elementStyle = element.getBoundingClientRect();

      if (elementStyle.width > styles.fileConfig.contentWidth) {
        const wArea = document.getElementById("recommendWidth");
        const wArea1 = document.getElementById("recommendWidth1");
        wArea1.textContent = "要素が画像サイズを超えています";
        wArea.textContent = `推奨画像サイズは${Math.ceil(
          elementStyle.width
        )}px以上です`;
      } else {
        const wArea = document.getElementById("recommendWidth");
        const wArea1 = document.getElementById("recommendWidth1");
        wArea.textContent = "";
        wArea1.textContent = "";
      }
      if (elementStyle.height > styles.fileConfig.contentHight) {
        const hArea = document.getElementById("recommendHeight");
        const hArea1 = document.getElementById("recommendHeight1");
        hArea1.textContent = "要素が画像サイズを超えています";
        hArea.textContent = `要素が画像サイズを超えています推奨画像サイズは${Math.ceil(
          elementStyle.height
        )}px以上です`;
      } else {
        const hArea = document.getElementById("recommendHeight");
        const hArea1 = document.getElementById("recommendHeight1");
        hArea.textContent = "";
        hArea1.textContent = "";
      }
    }
  }, [styles, sheetData]);

  return (
    <>
      <FORM_STYLE onChange={handleSubmit(HandleAtom)}>
        <div className="form-content">
          <div className="form-flex">
            <div className="input-kinds">
              <TITLE_STYLE>
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

              {styles.fileConfig.choiceFile === "useUrl" ? (
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
              ) : (
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
              {styles.fileConfig.rankPoint === "useRegularRankPoint" ? (
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
                    <CreateInput />
                  </div>
                </div>
              )}

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
                <div className="errorMsg">
                  <p id="recommendWidth1"></p>
                  <p id="recommendWidth"></p>
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
                <div className="errorMsg">
                  <p id="recommendHeight1"></p>
                  <p id="recommendHeight"></p>
                </div>
              </INPUT_STYLE>
            </div>

            <div className="input-kinds">
              <TITLE_STYLE>
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
                  <option value=""></option>
                  <CreateOption fontDataArray={fonts} />
                </select>
              </INPUT_STYLE>
              <INPUT_STYLE>
                <button
                  type="button"
                  onClick={() => GetFontsJa(setFonts, fonts)}
                >
                  フォントを探す
                </button>
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
            <INPUT_STYLE>
              <label className="label" htmlFor="bgColor">
                背景色
              </label>
              <input
                type="color"
                name="bgColor"
                id="bgColor"
                {...register("decoration.bgColor")}
              />
            </INPUT_STYLE>
          </div>
        </div>
      </FORM_STYLE>
    </>
  );
}

function CreateOption({ fontDataArray, register }) {
  return (
    <>
      {fontDataArray.map((kindsDataArray, index1) =>
        kindsDataArray.map((fontData, index2) => (
          <option key={`${index1}-${index2}`} value={fontData}>
            {`${fontData[0]},${fontData[1]},${fontData[2]}`}
          </option>
        ))
      )}
    </>
  );
}

const TITLE_STYLE = styled.div`
  margin: 2em 0;
  font-weight: ${common.BOLD_FONT_WIGHT};
  @media screen and (max-width: 500px) {
    font-weight: 700;
  }
`;

export const INPUT_STYLE = styled.div`
  font-size: ${common.MAIN_FONT_SIZE}px;
  margin: 1em 0;
  input {
    margin-left: 0.5em;
    height: 1.5em;
  }

  select {
    height: 1.5em;
    width: 10em;
    font-size: 16px;
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

const testA = [
  [
    [
      "Noto Sans JP",
      "sans-serif",
      "100",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEi75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "200",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEj75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "300",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFE8j75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "regular",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "500",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFCMj75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "600",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFM8k75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "700",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "800",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFJEk75vY0rw-oME.ttf",
    ],
    [
      "Noto Sans JP",
      "sans-serif",
      "900",
      "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFLgk75vY0rw-oME.ttf",
    ],
  ],
  [
    [
      "Kiwi Maru",
      "serif",
      "300",
      "https://fonts.gstatic.com/s/kiwimaru/v14/R70djykGkuuDep-hRg6gNCi0Vxn9R5ShnA.ttf",
    ],
    [
      "Kiwi Maru",
      "serif",
      "regular",
      "https://fonts.gstatic.com/s/kiwimaru/v14/R70YjykGkuuDep-hRg6YmACQXzLhTg.ttf",
    ],
    [
      "Kiwi Maru",
      "serif",
      "500",
      "https://fonts.gstatic.com/s/kiwimaru/v14/R70djykGkuuDep-hRg6gbCm0Vxn9R5ShnA.ttf",
    ],
  ],
];
