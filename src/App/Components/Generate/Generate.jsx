import { SECTION_TITLE_STYLE } from "../../Style/Common/SectionTitle";
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
