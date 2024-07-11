import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function LookExample({ handleIsLook }) {
  return (
    <>
      <STYLE id="exampleImg" className="hoverImg">
        <div className="exampleImg-content">
          <img className="exampleImg" src="/img/sample/sample-csv.png" />
        </div>
        <p className="looking-button close" onClick={handleIsLook}>
          閉じる
        </p>
      </STYLE>
    </>
  );
}

const STYLE = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .exampleImg {
    width: 90%;
  }
  .exampleImg-content {
    display: flex;
    justify-content: center;
  }

  .looking-button {
    background-color: ${common.HIGHT_LIGHT_COLOR};
    color: ${common.MAIN_COLOR};
    padding: 1em 6.5em;
    border-radius: 13em;
    margin: 2em 0;
    text-decoration: none;
    white-space: nowrap;
  }

  @media screen and (max-width: 500px) {
    .looking-button {
      padding: 1em 2.5em;
    }
  }

  @media screen and (max-width: 500px) {
    width: calc(100vw - 5em);
    .exampleImg {
      width: 90%;
    }
  }

  @media screen and (max-width: 1200px) {
    width: calc(100vw - 10em);
    .exampleImg {
      width: 90%;
    }
  }
`;
