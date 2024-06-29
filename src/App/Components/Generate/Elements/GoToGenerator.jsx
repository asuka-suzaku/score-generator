import { Link } from "react-router-dom";
import { BUTTON } from "../../../Style/Common/Button";
import { styled } from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function GoToGenerator() {
  return (
    <>
      <GENERATE_CONTENT>
        <p>ジェネレートしに行く</p>
        <GOTO_LINK>GENERATOR</GOTO_LINK>
      </GENERATE_CONTENT>
    </>
  );
}

const GENERATE_CONTENT = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GOTO_LINK = styled(Link)`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  padding: 1em 6.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }
`;
