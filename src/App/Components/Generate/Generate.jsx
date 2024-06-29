import Choice from "./Elements/Choice";
import { SECTION_TITLE_STYLE } from "../../Style/Common/SectionTitle";
import Download from "./Elements/Download";
import GoToGenerator from "./Elements/GoToGenerator";

export default function Generate() {
  return (
    <>
      <SECTION_TITLE_STYLE>
        <h2>ジェネレート</h2>
        <p>GENERATE</p>
      </SECTION_TITLE_STYLE>
      <GoToGenerator />
    </>
  );
}
