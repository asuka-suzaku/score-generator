import { useState } from "react";
import styled from "styled-components";
import { BODY_STYLE } from "../Body/Body";
import Preview from "./Elements/Preview";
import Setting from "./Elements/Setting";
import { defaultValues } from "../../Store/StylesAtom";
import { Link } from "react-router-dom";

export default function Generator() {
  const [styles, setStyles] = useState({ defaultValues });

  // const handle = () => {
  //   Test();
  // };
  return (
    <>
      <GENERATOR_STYLE>
        <div className="preview">
          <Preview styles={styles} />
        </div>
        <div className="setting">
          <Setting GiveData={setStyles} />
        </div>

        {/* <Link to="/preview">ふるサイズ</Link> */}
      </GENERATOR_STYLE>
      <button>コンソール</button>
      <div id="text"></div>
    </>
  );
}

const GENERATOR_STYLE = styled.div`
  margin-top: 6em;
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
    height: 700px;
  }
`;
