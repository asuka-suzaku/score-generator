import styled from "styled-components";
import * as common from "../../../Style/Common/Common";

export default function SampleTable({ data }) {
  return (
    <>
      <STYLE>
        <p className="sample-title">サンプル</p>
        <p className="sample-case">{data.case}</p>
        <div className="sample-table-content">
          <div className="table-wrap">
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>D</th>
                  <th>E</th>
                  <th>F</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>チーム名</td>
                  <td>1試合目の順位</td>
                  <td>1試合目のキル数</td>
                  <td>{data["d-1"]}</td>
                  <td>{data["e-1"]}</td>
                  <td>{data["f-1"]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{data["a-2"]}</td>
                  <td>{data["b-2"]}</td>
                  <td>{data["c-2"]}</td>
                  <td>{data["d-2"]}</td>
                  <td>{data["e-2"]}</td>
                  <td>{data["f-2"]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{data["a-3"]}</td>
                  <td>{data["b-3"]}</td>
                  <td>{data["c-3"]}</td>
                  <td>{data["d-3"]}</td>
                  <td>{data["e-3"]}</td>
                  <td>{data["f-3"]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{data["a-4"]}</td>
                  <td>{data["b-4"]}</td>
                  <td>{data["c-4"]}</td>
                  <td>{data["d-4"]}</td>
                  <td>{data["e-4"]}</td>
                  <td>{data["f-4"]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>{data["a-5"]}</td>
                  <td>{data["b-5"]}</td>
                  <td>{data["c-5"]}</td>
                  <td>{data["d-5"]}</td>
                  <td>{data["e-5"]}</td>
                  <td>{data["f-5"]}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>{data["a-6"]}</td>
                  <td>{data["b-6"]}</td>
                  <td>{data["c-6"]}</td>
                  <td>{data["d-6"]}</td>
                  <td>{data["e-6"]}</td>
                  <td>{data["f-6"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </STYLE>
    </>
  );
}
const STYLE = styled.div`
  background-color: ${common.SUB_COLOR};
  padding: 2em;
  border-radius: 15px;
  display: block;
  width: calc(100% - 4em);
  .sample-table-content {
    margin: 2em;
    display: flex;
    justify-content: center;
  }

  .table-wrap {
    width: 70vw;
    overflow-x: scroll;
  }
  .sample-title {
    font-size: ${common.SECTION_TITLE_FONT_SIZE}px;
    font-weight: ${common.BOLD_FONT_WIGHT};
    margin-bottom: 1em;
  }
  .sample-case {
    margin-bottom: 1em;
  }
  table {
    background-color: #fff;
    white-space: nowrap;
  }
  th,
  td {
    padding: 0.5em 2em;
    border: 1px solid ${common.FONT_COLOR};
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    padding: 1em;
    width: calc(100% - 2em);
    .sample-table-content {
      margin: 1em;
    }
  }

  @media screen and (max-width: 600px) {
    .sample-title {
      font-weight: 700;
    }
  }
`;
