import styled from "styled-components";
import * as common from "../../Style/Common/Common";

export const BUTTON = styled.a`
  background-color: ${common.HIGHT_LIGHT_COLOR};
  color: ${common.MAIN_COLOR};
  font-size: ${common.MAIN_FONT_SIZE}px;
  padding: 1em 5.5em;
  border-radius: 13em;
  margin: 2em 0;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    padding: 1em 3em;
  }

  :hover {
    cursor: pointer;
  }
`;
