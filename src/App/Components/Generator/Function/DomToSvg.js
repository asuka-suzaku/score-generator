import { useRecoilValue } from "recoil";
import { StylesAtom } from "../../../Store/StylesAtom";

export function DomToSvg({ styles }) {
  window.onload = () => {
    if (styles) {
      console.log("呼び出し");
      console.log(styles);
      const ELEMENTS = document.getElementById("element");
      const SVG_PATH = "http://www.w3.org/2000/svg";
      const SVG = document.createElementNS(SVG_PATH, "svg");
      SVG.setAttribute("xmlns", SVG_PATH);
      SVG.setAttribute("width", `${styles.fileConfig.contentWidth}`);
      SVG.setAttribute("height", `${styles.fileConfig.contentHeight}`);

      const TITLE = document.createElementNS(SVG_PATH, "text");
      TITLE.setAttribute("font-size", `${styles.fonts.fontSize * 3}px`);
      const titleContent = document.getElementById("tableTitle");
      TITLE.textContent = styles.fileConfig.matchTitle;
      const title = document.getElementById("tableTitle");
      const titleStyle = title.getBoundingClientRect();
      TITLE.setAttribute("id", "svg");
      TITLE.setAttribute("x", `${titleStyle.left}`);
      TITLE.setAttribute("y", `${titleStyle.top}`);
      SVG.appendChild(TITLE);

      const CONTENT = document.getElementById("svgContent");
      CONTENT.innerHTML = "";
      CONTENT.appendChild(SVG);
    }
  };

  return (
    <>
      <div id="svgContent"></div>
    </>
  );
}

//   const TABLE = document.getElementById("table");

//   TABLE ? CreateTable() : CreateMSG();

//   function CreateTable() {
//     const removeMsg = document?.getElementById("message");
//     if (removeMsg) {
//       SVG.removeChild(removeMsg);
//     }

//     const count = TABLE.row;
//     console.log(count);
//   }

//   function CreateMSG() {
//     const msg = document.getElementById("message");
//     const MESSAGE = document.createElementNS(SVG_PATH, "text");
//     const msgStyle = msg.getBoundingClientRect();
//     MESSAGE.setAttribute("id", "message");
//     MESSAGE.setAttribute("x", `${msgStyle.left}`);
//     MESSAGE.setAttribute("y", `${msgStyle.top}`);
//     MESSAGE.textContent =
//       "ファイルのアップロードかurlを貼り付けてください。";
//     SVG.appendChild(MESSAGE);
//   }
