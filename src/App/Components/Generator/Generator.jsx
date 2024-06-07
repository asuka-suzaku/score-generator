import { useState } from "react";
import styled from "styled-components";
import { BODY_STYLE } from "../Body/Body";
import Preview from "./Elements/Preview";
import Setting from "./Elements/Setting";
import { defaultValues } from "./Elements/Setting";
import { Link } from "react-router-dom";

export default function Generator() {
  const [styles, setStyles] = useState({ defaultValues });
  return (
    <>
      <GENERATOR_STYLE>
        <div className="content-width">
          <div className="preview">
            <Preview styles={styles} />
          </div>
          <Setting GiveData={setStyles} />
        </div>
        <Link to="/preview">ふるサイズ</Link>
      </GENERATOR_STYLE>
    </>
  );
}

const GENERATOR_STYLE = styled(BODY_STYLE)`
  margin-top: 6em;

  .preview {
    display: flex;
    justify-content: center;
    overflow: scroll;
  }
`;
