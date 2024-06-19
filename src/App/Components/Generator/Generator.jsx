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

export default function Generator() {
  const [styles, setStyles] = useRecoilState(StylesAtom);

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
      </GENERATOR_STYLE>
      <button type="button">コンソール</button>
      <div id="text"></div>
    </>
  );
}

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
