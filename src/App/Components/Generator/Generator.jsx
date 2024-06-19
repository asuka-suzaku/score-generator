import { useState } from "react";
import styled from "styled-components";
import { BODY_STYLE } from "../Body/Body";
import Preview from "./Elements/Preview";
import Setting from "./Elements/Setting";
import { defaultValues, StylesAtom } from "../../Store/StylesAtom";
import { Link } from "react-router-dom";
import { DomToImage } from "./Function/GenerateImage";
import { DomToSvg } from "./Function/DomToSvg";
import { useRecoilState, useRecoilValue } from "recoil";
import { BUTTON } from "../../Style/Common/Button";
import * as common from "../../Style/Common/Common";
import { CreateImage } from "./Function/Create/CreateImage";

export default function Generator() {
  const [styles, setStyles] = useRecoilState(StylesAtom);
  const width = styles.fileConfig.contentWidth;
  const hight = styles.fileConfig.contentHight;

  // const handle = () => {
  //   Test();
  // };
  return (
    <>
      <GENERATOR_STYLE>
        <div className="preview">
          <Preview />
        </div>
        <div className="setting">
          <Setting />
        </div>

        <Link to="/preview">ふるサイズ</Link>
        <div className="export">
          <EXPORT type="button" onClick={() => CreateImage(width, hight)}>
            出力
          </EXPORT>
          <div id="exportButton"></div>
        </div>
      </GENERATOR_STYLE>
    </>
  );
}

const EXPORT = styled.button`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 1em 6.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;
`;

function Console() {
  console.log(document.getElementById("element"));
}

const GENERATOR_STYLE = styled.div`
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .setting {
    width: 1200px;
  }

  .preview {
    display: grid;
    place-content: center;
    overflow: scroll;
    width: 100vw;
    height: 800px;
  }
`;
