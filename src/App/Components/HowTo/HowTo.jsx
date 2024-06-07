import styled from "styled-components";
import { SECTION_TITLE_STYLE } from "../../Style/Common/SectionTitle";
import Download from "./Elements/Download";
import HowToStep from "./Elements/HowToStep";
import * as common from "../../Style/Common/Common";

export default function HowTo() {
  return (
    <>
      <SECTION_TITLE_STYLE>
        <h2>使い方</h2>
        <p>HOW TO USE</p>
      </SECTION_TITLE_STYLE>
      <HOW_TO_STYLE>
        <HowToStep />
        <Download />
      </HOW_TO_STYLE>
    </>
  );
}

const HOW_TO_STYLE = styled.div`
  background-color: ${common.SUB_COLOR};
  padding-top: 5.5em;
  padding-bottom: 3.5em;
  border-radius: 15px;
`;
