import { useState } from "react";
import styled from "styled-components";
import LookExample from "../../Footer/Elements/LookExample";
import * as common from "../../../Style/Common/Common";

export default function ExampleImageLook() {
  const [isLook, setLook] = useState(false);
  const handleIsLook = () => setLook(!isLook);
  let down = 0;

  return (
    <>
      <STYLE $isLook={isLook} $down={down} className="finished-product">
        {isLook ? (
          <LookExample handleIsLook={handleIsLook} />
        ) : (
          <p className="looking-button" onClick={handleIsLook}>
            完成例を見る
          </p>
        )}
      </STYLE>
    </>
  );
}
const STYLE = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .looking-button {
    background-color: ${common.HIGHT_LIGHT_COLOR};
    color: ${common.MAIN_COLOR};
    padding: 1em 6.5em;
    border-radius: 13em;
    margin: 2em 0;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    .looking-button {
      font-size: ${common.MAIN_FONT_SIZE}px;
      padding: 1em 2em;
    }
  }

  .looking-button:hover {
    cursor: pointer;
  }
`;
